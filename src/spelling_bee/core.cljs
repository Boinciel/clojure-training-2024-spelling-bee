(ns spelling-bee.core
  (:require

   [clojure.set :as set]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.dom :as rdom]
   [clojure.string :as string]))

(def debug?
  ^boolean goog.DEBUG)


;---------- our app state atom ----------

(def default-db
  {:name              "default"
   :words             #{}
   :common-letter     #{}
   :letters           #{}
   :display-letters   []
   :found-words       #{}
   :current-input     ""
   :message           ""})



;---------- various functions ----------

;; Later this can be substituted with a database call to pull a list of words.
(def word-collection #{"babyproof"     "afar"           "affray"
                       "afro"          "arbor"          "array"
                       "arroyo"        "barb"           "barf"
                       "boar"          "boor"           "bray"
                       "farro"         "fora"           "foray"
                       "fray"          "parry"          "poor"
                       "pray"          "proof"          "prop"
                       "pyro"          "roar"           "roof"
                       "ropy"})

(defn get-unique-letter-collection [word-set]
  (-> word-set
      vec
      str/join
      seq
      set))

(defn find-common-letter [word-set]
  (reduce
   set/intersection
   (map set (seq word-set))))

(defn word-validity-case [word letters common-letter]
  (cond
    (contains? word-collection word)                   :submit-ok       ; first check if the word is in the word-collection
    (> 4 (count (seq word)))                           :too-short       ; check length, notify if less than 3 letters
    (not (every? letters (set word)))                  :invalid         ; check if every letter in the word is in letters set 
    (not (contains? (set word) (first common-letter))) :no-common       ; if it does not contain the common letter
    (contains? (set word) (first common-letter))       :not-in-list     ; then check if the word at least contains common letter 
    :else                                              :other))         ; generic if it somehow manages to not match one of the above

(defn point-formula [word letters]
  (cond
    (= (get-unique-letter-collection word) (set letters)) (+ (count (seq word)) 7)
    (= (count (seq word)) 4) (int 1)
    :else (count (seq word))))

;---------- subscriptions to data from app state ----------

(rf/reg-sub
 ::name
  (fn [db]
    (:name db)))

(rf/reg-sub
 ::words
  (fn [db]
    (:words db)))

(rf/reg-sub
 ::found-words
  (fn [db]
    (:found-words db)))

(rf/reg-sub
 ::common-letter
  (fn [db]
    (:common-letter db)))

(rf/reg-sub
 ::letters
  (fn [db]
    (:letters db)))
(rf/reg-sub
 ::display-letters
  (fn [db]
    (:display-letters db)))

(rf/reg-sub
 ::current-input
  (fn [db]
    (:current-input db)))

(rf/reg-sub
 ::message
  (fn [db]
    (:message db)))

(rf/reg-sub
 ::dbdb
  (fn [db]
    db))



;---------- events ----------

(rf/reg-event-db
 ::initialize-db
  (fn [_ _]
    default-db))

(rf/reg-event-db ::set-words-and-letters
  (fn [db [_ word-set]]
    (let [common-letter (find-common-letter word-set)
          letter-coll   (get-unique-letter-collection word-set)]
      (assoc db :words word-set
             :common-letter   common-letter
             :letters         letter-coll
             :display-letters (shuffle (vec (remove common-letter letter-coll)))))))

(rf/reg-event-db ::update-current-input
  (fn [db [_ input-value]]
    (assoc db :current-input input-value)))

(rf/reg-event-db ::shuffle-letter-order
  (fn [db [_ display-letters]]
    (assoc db :display-letters (shuffle display-letters))))

(rf/reg-event-db ::submit-word
  (fn [db [_ word]]
    (let [letters       (:letters       db)
          common-letter (:common-letter db)
          point-val     (point-formula word letters)]
      (case (word-validity-case word letters common-letter)
        :submit-ok   (-> db
                         (update :found-words conj word)
                         (assoc :message (str "Great job! You found " word ", worth a score of " point-val "!"))) ; add the valid word to found words
        :too-short   (assoc  db :message "Only words with 4 letters or more count.")
        :not-in-list (assoc  db :message (str "Sorry, " word " isn't in the word list today."))
        :no-common   (assoc  db :message "Nice try, but the word needs to contain the common letter.")
        :invalid     (assoc  db :message "All letters in the word must be from the given letter set.")
        :other       (assoc  db :message "Try again.")))))


;---------- main page elements ----------

(defn spawn-words-button
  "Starts the game with a preset set of words."
  []
  [:button {:on-click #(rf/dispatch  [::set-words-and-letters word-collection])}
   "Get Letters!"])

(defn submit-button 
  [word]
  (let [input-value (rf/subscribe [::current-input])]
    [:button {:on-click #(when (seq word)
                           (println "click!")
                           (rf/dispatch [::submit-word @input-value])
                           (rf/dispatch [::update-current-input ""]))} ; clear input after submit
     "Submit"]))

(defn text-input
  "Field for the user to input a word of their choosing."
  []
  (let [input-value (rf/subscribe [::current-input])]
    [:input {:type         "text"
             :placeholder  "Type here!"
             :value        @input-value
             :on-change    #(rf/dispatch [::update-current-input (-> % .-target .-value)])}]))

(defn shuffle-order-button
  "Shuffles the order of the letters displayed."
  [display-letters]
  [:button {:on-click #(rf/dispatch  [::shuffle-letter-order display-letters])}
   "Shuffle letters"])

;---------- main page renderer ----------

(defn main-panel []
  (let [name            (rf/subscribe [::name])
        words           (rf/subscribe [::words])
        found-words     (rf/subscribe [::found-words])
        common-letter   (rf/subscribe [::common-letter])
        letters         (rf/subscribe [::letters])
        display-letters (rf/subscribe [::display-letters])
        current-input   (rf/subscribe [::current-input])
        message         (rf/subscribe [::message])
        database        (rf/subscribe [::dbdb])]
    [:div
     [:h1
      "Hello, " @name]
     [spawn-words-button]
     [:h3
      "Here are the words you have found:"]
     [:p (str/join ", " (sort @found-words))]
     [text-input]
     [submit-button @current-input] 
     [:h3 @message]
     [:p "Common Letter: " (str (first @common-letter))]
     [:p "Other Letters: " (str/join ", " @display-letters)]
     [shuffle-order-button @display-letters]
     [:p "debug: db: " @database]
     ]))


;---------- page load parameters ----------

(defn dev-setup []
  (when debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))

(defn init []
  (rf/dispatch-sync [::initialize-db])
  (dev-setup)
  (mount-root))
