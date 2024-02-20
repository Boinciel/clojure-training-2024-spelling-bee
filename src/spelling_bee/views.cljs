(ns spelling-bee.views
  (:require
   [re-frame.core :as rf]
   [spelling-bee.subs :as subs]))

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
(rf/dispatch  [::set-words-and-letters word-collection])

(defn spawn-words-button []
  [:button {:on-click #(rf/dispatch  [::set-words-and-letters word-collection])}
   "Get Letters!"])


(defn main-panel []
  (let [name (rf/subscribe  [::subs/name])
        words (rf/subscribe [::subs/words])
        database (rf/subscribe [::subs/dbdb])]
    [:div
     [:h1
      "Hello from " @name]
     [spawn-words-button]
     [:h2
      "Here are the words you have found:"]
     [:p "test: here are the words: " @words]
     [:p "debug: db: " @database]
     ]))
