(ns spelling-bee.views
  (:require
   [re-frame.core :as rf]
   [spelling-bee.subs :as subs]
   ))

(defn main-panel []
  (let [name (rf/subscribe [::subs/name])
        words ()]
    [:div
     [:h1
      "Hello from " @name]
     [:h2
      "Here are the words you have found:"]
     [:p ]
     ]))
