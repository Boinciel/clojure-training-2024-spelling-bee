(ns spelling-bee.core
  (:require 
   [clojure.string      :as str]
   [re-frame.core       :as rf]
   [reagent.core        :as ra]
   [reagent.dom         :as rdom]
   [stylefy.core        :as stylefy :refer [use-style]]
   [stylefy.reagent     :as stylefy-reagent]
   [spelling-bee.events :as events]
   [spelling-bee.words  :as words])
  (:require-macros
   [reagent.core :refer [with-let]]))

(def debug?
  ^boolean goog.DEBUG)

(set! *warn-on-infer* false)


;---------- stylefy components ----------
; px vs rem, google
(defn letter-style [letter-validation-sequence]
  (case letter-validation-sequence
    :required {:color "#4CAF50"}
    :valid    {:color "#000000"}
    :invalid  {:color "#AAAAAA" :opacity "0.5"}))



;---------- main page elements ----------

(defn spawn-words-button
  "Starts the game with a preset set of words."
  []
  (let [game-started (rf/subscribe [::events/game-started])]
    (when-not @game-started
      [:button
       {:on-click #(rf/dispatch  [::events/set-words-and-letters words/word-collection])
        :class "button-style"}
       "Get Letters!"])))

(defn submit-button 
  [word]
  (let [input-value (rf/subscribe [::events/current-input])]
    [:button
     {:on-click #(when (seq word)
                   (println "click!")
                   (rf/dispatch [::events/submit-word @input-value])) 
      :class "button-style"} 
     "Submit"]))

(defn text-input
  "Field for the user to input a word of their choosing."
  []
  (let [input-value   (rf/subscribe [::events/current-input])]
    [:input {:type         "text"
             :placeholder  "Type here!"
             :value        @input-value
             :on-change    #(rf/dispatch [::events/set-current-input (-> % .-target .-value)])
             :class "input-style"}]))

(defn hex-button [letter]
  [:button.hex-button {:on-click #(rf/dispatch [::events/append-current-input letter])}
   letter])

(defn letter-buttons-panel [valid-letters common-letter]
  (let [top-row (take 2 valid-letters)
        middle-row (concat (take 1 (drop 2 valid-letters)) [common-letter] (take 1 (drop 3 valid-letters)))
        bottom-row (take 2 (drop 4 valid-letters))]
    [:div.letter-buttons-panel
     [:div.hex-row.top-row (map hex-button top-row)]
     [:div.hex-row.middle-row (map hex-button middle-row)]
     [:div.hex-row.bottom-row (map hex-button bottom-row)]]))

(defn shuffle-order-button!
  "Shuffles the order of the letters displayed."
  [display-letters]
  [:button {:on-click #(rf/dispatch  [::events/shuffle-letter-order display-letters])
            :class "button-style"}
   "Shuffle letters"])



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
        [spawn-words-button]
        (when @game-started 
          [:div {:class "main-container-style"}
           [:div {:class "main-panel-style"}
            [:div (use-style {:text-align "center"})
             [text-input]
             [submit-button @current-input]]
[:div {:class "letter-buttons-container"}
 [letter-buttons-panel @display-letters (first @common-letter)]] 
            [:div (use-style {:text-align "center"})
             [shuffle-order-button! @display-letters]]
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
  (.addEventListener js/window "keydown" events/global-key-handler (rf/subscribe [::events/current-input])))

(defn init []
  (install-global-key-listeners)               ; listen for keypress events
  (rf/dispatch-sync [::events/initialize-db])         ; get re-frame atom initialized
  (stylefy/init {:dom (stylefy-reagent/init)}) ; set up css
  (dev-setup)
  (mount-root))
