(ns spelling-bee.events
  (:require 
   [re-frame.core      :as rf]
   [spelling-bee.logic :as logic]))


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
   :message-show      false
   :score             0
   :shake-message     false
   :shake-angry       false})

;---------- handlers ----------

(defn global-key-handler [key db]
  (cond
    (re-matches #"[a-zA-Z]" key) [::append-current-input (str key)]
    (= key "Enter")              [::submit-word (:current-input db)]
    (= key "Backspace")          [::delete-last-letter]
    :else nil))

;---------- subscriptions to data from app state ----------

(rf/reg-sub ::get
  (fn [db [_ key]]
    (get db key)))


(rf/reg-sub ::dbdb
  (fn [db]
    db))


;---------- events ----------

(rf/reg-event-db ::initialize-db
  (fn [_ _]
    default-db))

(rf/reg-event-db ::set-words-and-letters
  (fn [db [_ word-set]]
    (let [common-letter (logic/find-common-letter word-set)
          letter-coll   (logic/get-unique-letter-collection word-set)]
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

(rf/reg-event-db ::reset-message
  (fn [db _]
    (assoc db :showing-message true)))

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
          point-val     (logic/calculate-points word letters)
          submit        (partial assoc db :current-input "" :message)]
      (js/setTimeout #(rf/dispatch [::reset-shake-message]) 500) ; preemptively set a timeout to kill any shaking 
      (case (logic/validate-word word words letters common-letter)
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


