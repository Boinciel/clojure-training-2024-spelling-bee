(ns spelling-bee.core
  (:require

   [clojure.set :as set]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.dom :as rdom]))

(def debug?
  ^boolean goog.DEBUG)


;---------- our app state atom ----------

(def default-db
  {:name          "default"
   :words         #{}
   :common-letter #{}
   :letters       #{}
   :found-words   #{}
   :message       ""})



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
    (contains? word-collection word)     :submit-ok       ; first check if the word is in the word-collection
    (< 4 (count (seq word)))             :too-short       ; check length, notify if less than 3 letters
    (not (every? letters (set word)))    :invalid         ; check if every letter in the word is in letters set
    (contains? (set word) common-letter) :not-in-list     ; then check if the word at least contains common letter 
    :else                                :no-common))     ; if it does not contain the common letter



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
    (assoc db :words word-set
           :common-letter (find-common-letter word-set)
           :letters (get-unique-letter-collection word-set))))

(rf/reg-event-db ::submit-word
  (fn [db [_ word]]
    (let [letters       (:letters       db)
          common-letter (:common-letter db)] 
      (case (word-validity-case word letters common-letter)
       :submit-ok (do (update db :found-words conj word)
                      (assoc  db :message     "Great job, you found " word " for " 0 "points!")) ; add the valid word to found words
       :too-short (assoc  db :message     "Only words with 4 letters or more count.")
       :not-in-list (assoc  db :message   "Sorry, " word " isn't in the word list today.")
       :no-common (assoc  db :message     "Nice try, but the word needs to contain the common letter.")
       :invalid   (assoc  db :message     "All letters in the word must be from the given letter set.")))))

;---------- main page elements ----------

(defn spawn-words-button []
  [:button {:on-click #(rf/dispatch  [::set-words-and-letters word-collection])}
   "Get Letters!"])



;---------- main page renderer ----------

(defn main-panel []
  (let [name (rf/subscribe  [::name])
        words (rf/subscribe [::words])
        database (rf/subscribe [::dbdb])]
    [:div
     [:h1
      "Hello from " @name]
     [spawn-words-button]
     [:h2
      "Here are the words you have found:"]
     [:p "test: here are the answer words: " @words]
     [:p "debug: db: " @database]]))


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
