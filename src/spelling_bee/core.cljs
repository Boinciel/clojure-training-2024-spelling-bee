(ns spelling-bee.core
  (:require

   [clojure.set       :as set]
   [clojure.string    :as str]
   [re-frame.core     :as rf]
   [reagent.dom       :as rdom]
   [stylefy.core      :as stylefy :refer [use-style]]
   [stylefy.reagent   :as stylefy-reagent]))

(def debug?
  ^boolean goog.DEBUG)


;---------- our app state atom ----------

(def default-db
  {:name              "player"
   :game-started      false
   :words             #{}
   :common-letter     #{}
   :letters           #{}
   :display-letters   []
   :found-words       #{}
   :current-input     ""
   :message           "Welcome to the Spelling Bee!"
   :score             0})



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

(defn validate-word 
  "Checks the given word against the current word list and letter set to see if it is valid. Gives the following keywords as a result.
   
   :submit-ok :too-short :invalid :no-common :not-in-list :other"
  [word word-list letters common-letter]
  (cond
    (contains? word-list word)                   :submit-ok       ; first check if the word is in the word-collection
    (> 4 (count (seq word)))                           :too-short       ; check length, notify if less than 3 letters
    (not (every? letters (set word)))                  :invalid         ; check if every letter in the word is in letters set 
    (not (contains? (set word) (first common-letter))) :no-common       ; if it does not contain the common letter
    (contains? (set word) (first common-letter))       :not-in-list     ; then check if the word at least contains common letter 
    :else                                              :other))         ; generic if it somehow manages to not match one of the above

(defn validate-letter [letter letters common-letter]
  (cond
    (= letter (str (first common-letter))) :required
    (contains? (set letters) letter) :valid
    :else                            :invalid))



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
 ::game-started
  (fn [db]
    (:game-started db)))

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
 ::score
  (fn [db]
    (:score db)))

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
                :display-letters (shuffle (vec (remove common-letter letter-coll)))
                :game-started    true))))

(rf/reg-event-db ::assoc-current-input
  (fn [db [_ input-value]]
    (assoc db :current-input input-value)))

(rf/reg-event-db ::update-current-input
  (fn [db [_ input-value]]
    (update db :current-input str  input-value)))

(rf/reg-event-db ::shuffle-letter-order
  (fn [db [_ display-letters]]
    (assoc db :display-letters (shuffle display-letters))))

(rf/reg-event-db ::submit-word
  (fn [db [_ word]]
    (let [letters       (:letters       db)
          common-letter (:common-letter db)
          words         (:words         db)
          point-val     (point-formula word letters)]
      (case (validate-word word words letters common-letter)
        :submit-ok   (if (contains? (:found-words db) word)
                       (assoc db :message "You've already found that word!") 
                         (-> db
                             (update :found-words conj word)
                             (update :score + point-val)
                             (assoc  :message (str "Great job! You found " word ", worth a score of " point-val "!")))) ; add the valid word to found words
        :too-short   (assoc  db :message "Only words with 4 letters or more count.")
        :not-in-list (assoc  db :message (str "Sorry, " word " isn't in the word list today."))
        :no-common   (assoc  db :message "Nice try, but the word needs to contain the common letter.")
        :invalid     (assoc  db :message "All letters in the word must be from the given letter set.")
        :other       (assoc  db :message "Try again.")))))



;---------- handlers ----------

(defn global-key-handler [e]
  (let [key (.-key e)]
    (when (re-matches #"[a-zA-Z]" key)
      (rf/dispatch [::update-current-input (str key)]))))



;---------- stylefy components ----------

(def main-style
  {:padding "20px"
   :max-width "600px"
   :margin "0 auto"
   :font-family "'Open Sans', sans-serif" 
   :border "3px solid #ccc"})

(def button-style
  {:background-color "#4CAF50"
   :border "none"
   :color "white"
   :padding "15px 32px"
   :text-align "center"
   :text-decoration "none"
   :display "inline-block"
   :font-size "16px"
   :margin "4px 2px"
   :cursor "pointer"})

(def input-style
  {:padding "10px"
   :border "4px solid #fcc"
   :border-radius "3px"
   :margin-bottom "5px"
   :font-size "18px"
   :font-family "inherit"})

(def side-panel-style
  {:flex "1"
   :padding "10px"
   :margin-left "20px"
   :border "3px solid #ccc"
   :border-radius "4px"
   :background-color "#F0FFFF"
   :max-width "200px"})

(def main-panel-style
  {:max-width "280px"})

(def main-container-style
  {:display "flex"
   :justify-content "space-around"
   })

(def body-background
  {:background-image "url('/images/tokimemobgscroll.gif')"
   :background-size "cover"
   :background-position "center center"
   :background-repeat "no-repeat"})

(defn letter-style [letter-validation-sequence]
  (case letter-validation-sequence
    :required {:color "#FF0000"}
    :valid    {:color "#000000"}
    :invalid  {:color "#AAAAAA" :opacity "0.5"}))


;---------- main page elements ----------

(defn spawn-words-button
  "Starts the game with a preset set of words."
  []
  (let [game-started (rf/subscribe [::game-started])]
    (when-not @game-started
      [:button
       {:on-click #(rf/dispatch  [::set-words-and-letters word-collection])
        :style button-style}
       "Get Letters!"])))

(defn submit-button 
  [word]
  (let [input-value (rf/subscribe [::current-input])]
    [:button
     {:on-click #(when (seq word)
                   (println "click!")
                   (rf/dispatch [::submit-word @input-value])
                   (rf/dispatch [::assoc-current-input ""])) ; clear input after submit
      :style button-style} 
     "Submit"]))

(defn text-input
  "Field for the user to input a word of their choosing."
  []
  (let [;letters       (rf/subscribe [::letters])
        ;common-letter (rf/subscribe [::common-letter])
        input-value   (rf/subscribe [::current-input])]
    [:input {:type         "text"
             :placeholder  "Type here!"
             :value        @input-value
             :on-change    #(rf/dispatch [::assoc-current-input (-> % .-target .-value)])
             :style input-style}]))

(defn shuffle-order-button
  "Shuffles the order of the letters displayed."
  [display-letters]
  [:button {:on-click #(rf/dispatch  [::shuffle-letter-order display-letters])
            :style button-style}
   "Shuffle letters"])


;---------- main page renderer ----------

(defn main-panel []
  (let [name            (rf/subscribe [::name])
        game-started    (rf/subscribe [::game-started])
        words           (rf/subscribe [::words])
        found-words     (rf/subscribe [::found-words])
        common-letter   (rf/subscribe [::common-letter])
        letters         (rf/subscribe [::letters])
        display-letters (rf/subscribe [::display-letters])
        current-input   (rf/subscribe [::current-input])
        message         (rf/subscribe [::message])
        score           (rf/subscribe [::score])
        database        (rf/subscribe [::dbdb])]
    
    [:html
     [:head
      [:title "Spelling Bee!"]
      
      [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
      [:style {:id "_stylefy-constant-styles_"}]
      [:style {:id "_stylefy-styles_"}]]
     
     [:div (use-style body-background)
      [:div (use-style main-style)
       [:h1
        "Hello, " @name]
       [:p "debug: "@database]
       [:h3 @message]
       [spawn-words-button]
       (when @game-started 
         [:div (use-style main-container-style)
          [:div (use-style main-panel-style) 
           [:div (use-style {:text-align "center"})
            [text-input]
            [submit-button @current-input]]

           [:p "Common Letter: " (str (first @common-letter))]
           [:p "Other Letters: " (str/join ", " @display-letters)]
           [:div (use-style {:text-align "center"})
            [shuffle-order-button @display-letters]]
           [:h3 "Your score: " @score]]

          [:div (use-style side-panel-style)
           [:h3
            "Found words:"]
           [:ul (for [word (sort @found-words)]     ; sort found words into an alphabetical list
                  [:li word])]]]) 
       ]]]))


;---------- page load parameters ----------

(defn dev-setup []
  (when debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))

(defn install-global-key-listeners []
  (.addEventListener js/window "keypress" global-key-handler))

(defn init []
  (install-global-key-listeners)               ; listen for keypress events
  (rf/dispatch-sync [::initialize-db])         ; get re-frame atom initialized
  (stylefy/init {:dom (stylefy-reagent/init)}) ; set up css
  (dev-setup)
  (mount-root))
