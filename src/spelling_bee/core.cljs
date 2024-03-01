(ns spelling-bee.core
  (:require 
   [re-frame.core         :as rf]
   [reagent.core          :as ra      :refer [with-let]]
   [reagent.dom           :as rdom]
   [stylefy.core          :as stylefy :refer [use-style]]
   [stylefy.reagent       :as stylefy-reagent]
   [spelling-bee.events   :as events]
   [spelling-bee.elements :as elements]))

(def debug?
  ^boolean goog.DEBUG)

(set! *warn-on-infer* false)




;---------- main page renderer ----------

(defn main-panel []
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (with-let [
             name            (rf/subscribe [::events/name])
             game-started    (rf/subscribe [::events/game-started])
             words           (rf/subscribe [::events/words])
             found-words     (rf/subscribe [::events/found-words])
             common-letter   (rf/subscribe [::events/common-letter])
             letters         (rf/subscribe [::events/letters])
             display-letters (rf/subscribe [::events/display-letters])
             current-input   (rf/subscribe [::events/current-input])
             message         (rf/subscribe [::events/message])
             score           (rf/subscribe [::events/score])
             database        (rf/subscribe [::events/dbdb])
             shake-message?  (rf/subscribe [::events/shake-message?])
             shake-angry?    (rf/subscribe [::events/shake-angry?])] 
     
      [:div
       [:div {:class "main-style"}
        [:h1
         "Hello, " @name]
       ;[:p "debug: "@database]
        [:h3 {:class (str ""(when @shake-message? "shake") (when @shake-angry? "-angry"))} @message]
        [elements/spawn-words-button]
        (when @game-started 
          [:div {:class "main-container-style"}
           [:div {:class "main-panel-style"}
            [:div (use-style {:text-align "center"})
             [elements/styled-text-input]
             [elements/submit-button @current-input]]
            [:div {:class "letter-buttons-container"}
             [elements/letter-buttons-panel @display-letters (first @common-letter)]]
            [:div (use-style {:text-align "center"})
             [elements/shuffle-order-button @display-letters]
             [elements/backspace-button]]
            [:h3 "Your score: " @score]]

           [:div {:class "side-panel-style"}
            [:h3
             "Found words:"]
            [:ul (for [word (sort @found-words)]     ; sort found words into an alphabetical list
                   [:li word])]]]) 
        ]]))


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
  (.addEventListener js/window "keydown" (fn [e] (rf/dispatch [::events/key-press (.-key e)]))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init []
  (install-global-key-listeners)               ; listen for keypress events
  (rf/dispatch-sync [::events/initialize-db])         ; get re-frame atom initialized
  (stylefy/init {:dom (stylefy-reagent/init)}) ; set up css
  (dev-setup)
  (mount-root))
