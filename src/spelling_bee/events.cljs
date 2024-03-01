(ns spelling-bee.events
  (:require
   [clojure.set         :as set]
   [clojure.string      :as str]
   [re-frame.core     :as rf]))


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
   :score             0
   :shake-message     false
   :shake-angry     false})

;---------- handlers ----------

(defn global-key-handler [key db]
  (cond
    (re-matches #"[a-zA-Z]" key) [::append-current-input (str key)]
    (= key "Enter") [::submit-word (:current-input db)]
    (= key "Backspace") [::delete-last-letter]
    :else nil))

;---------- various functions ----------

;; Later this can be substituted with a database call to pull a list of words.


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
    (contains? word-list word)                         :submit-ok       ; first check if the word is in the word collection
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

(defn calculate-points [word letters]
  (cond
    (= (get-unique-letter-collection word) (set letters)) (+ (count (seq word)) 7)
    (= (count (seq word)) 4) (int 1)
    :else (count (seq word))))

;; (map #(validate-letter #{}) (seq "arroyo"))

;---------- subscriptions to data from app state ----------

(rf/reg-sub ::name
  (fn [db]
    (:name db)))

(rf/reg-sub ::game-started
  (fn [db]
    (:game-started db)))

(rf/reg-sub ::words
  (fn [db]
    (:words db)))

(rf/reg-sub ::found-words
  (fn [db]
    (:found-words db)))

(rf/reg-sub ::common-letter
  (fn [db]
    (:common-letter db)))

(rf/reg-sub ::letters
  (fn [db]
    (:letters db)))

(rf/reg-sub ::display-letters
  (fn [db]
    (:display-letters db)))

(rf/reg-sub ::current-input
  (fn [db]
    (:current-input db)))

(rf/reg-sub ::message
  (fn [db]
    (:message db)))

(rf/reg-sub ::score
  (fn [db]
    (:score db)))

(rf/reg-sub ::dbdb
  (fn [db]
    db))

(rf/reg-sub ::shake-message?
  (fn [db]
    (:shake-message db)))

(rf/reg-sub ::shake-angry?
  (fn [db]
    (:shake-angry db)))


;---------- events ----------

(rf/reg-event-db ::initialize-db
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

(rf/reg-event-fx ::key-press
  (fn [{:keys [db]} [_ key]]
    (let [result (global-key-handler key db)]
      (when result
        {:dispatch result}))))

(rf/reg-event-db ::set-current-input
  (fn [db [_ input-value]]
    (assoc db :current-input input-value)))

(rf/reg-event-db ::append-current-input
  (fn [db [_ input-value]]
    (if (> 20 (count (seq (:current-input db))))
      (update db :current-input str input-value)
      (assoc  db :message "Less letters please!"))))

(rf/reg-event-db ::delete-last-letter
  (fn [db _]
    (update db :current-input #(subs % 0 (max 0 (dec (count %)))))))

(rf/reg-event-db ::shuffle-letter-order
  (fn [db [_ display-letters]]
    (assoc db :display-letters (shuffle display-letters))))

(rf/reg-event-db ::reset-shake-message
  (fn [db _]
    (assoc db :shake-message false :shake-angry false)))

(rf/reg-event-db ::submit-word
  (fn [db [_ word]]
    (let [letters       (:letters       db)
          common-letter (:common-letter db)
          words         (:words         db)
          point-val     (calculate-points word letters)
          submit        (partial assoc db :current-input "" :message)]
      (js/setTimeout #(rf/dispatch [::reset-shake-message]) 500) ; preemptively set a timeout to kill any shaking 
      (case (validate-word word words letters common-letter)
        :submit-ok   (if (contains? (:found-words db) word)
                       (submit "You've already found that word!")
                       (-> db
                           (update :found-words conj word)
                           (update :score + point-val)
                           (assoc  :current-input "" :message (str "Great job! You found " word ", worth a score of " point-val "!")))) ; add the valid word to found words
        :too-short   (submit "Only words with 4 letters or more count.")
        :not-in-list (submit (str "Sorry, " word " isn't in the word list today."))
        :no-common   (submit "Nice try, but the word needs to contain the common letter." :shake-message true)
        :invalid     (submit "All letters in the word must be from the given letter set." :shake-message true :shake-angry true)
        :other       (submit "Try again.")))))
; use reg-event-fx to dispatch further event to clear input


