(ns spelling-bee.elements
  (:require
   [clojure.string      :as str]
   [re-frame.core       :as rf]
   [stylefy.core        :as stylefy :refer [use-style]]
   [spelling-bee.events :as events]
   [spelling-bee.logic  :as logic]
   [spelling-bee.words  :as words]))


;---------- shorthand ----------
(defn db-get [key]
  (rf/subscribe [::events/get key]))

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
  (let [game-started (db-get :game-started)]
    (when-not @game-started
      [:button
       {:on-click #(rf/dispatch  [::events/set-words-and-letters words/word-collection])
        :class "button-style"}
       "Get Letters!"])))

(defn submit-button
  [word]
  (let [input-value (rf/subscribe [::events/get :current-input])]
    [:button
     {:on-click #(when (seq word)
                   (println "click!")
                   (rf/dispatch [::events/submit-word @input-value]))
      :class "button-style"}
     "Submit"]))

(defn styled-letter [letter valid-letters common-letter]
  (let [letter-validation (logic/validate-letter letter valid-letters common-letter)]
    [:span (use-style (letter-style letter-validation)) letter]))

(defn styled-text-input []
  (let [input-value   (rf/subscribe [::events/get :current-input])
        valid-letters (rf/subscribe [::events/get :letters])
        common-letter (rf/subscribe [::events/get :common-letter])]
    [:div.input-container

     [:input.input-style
      {:type         "text"
       :placeholder  (when (str/blank? @input-value) "Type here!")
       :value        @input-value
       :on-change    #(rf/dispatch [::events/get :set-current-input (-> % .-target .-value)])}]
     [:div.styled-letters
      (map-indexed
       (fn [_ ltr]
         [styled-letter ltr @valid-letters @common-letter])
       @input-value)]]))

(defn hex-button
  ([letter & [is-common]]
   [:button.hex-button {:on-click #(rf/dispatch [::events/append-current-input letter])
                        :style (when is-common {:font-weight "bold" :color "#4CAF50"})}
    letter]))

(defn letter-buttons-panel [valid-letters common-letter]
  (let [top-row (take 2 valid-letters)
        middle-row (concat (take 1 (drop 2 valid-letters)) [common-letter] (take 1 (drop 3 valid-letters)))
        bottom-row (take 2 (drop 4 valid-letters))]
    [:div.letter-buttons-panel
     [:div.hex-row.top-row (map hex-button top-row)]
     ;; if index is 1 (the middle one), it passes letter and a truthy value into the argument so it can be detected.
     [:div.hex-row.middle-row (doall (map-indexed (fn [idx letter] (hex-button letter (and (= idx 1) (= letter common-letter)))) middle-row))]
     [:div.hex-row.bottom-row (map hex-button bottom-row)]]))

(defn backspace-button []
  [:button {:class "garbage-can-button"
            :on-click #(rf/dispatch [::events/delete-last-letter])}
   [:i {:class "fa fa-trash"}]])

(defn shuffle-order-button
  "Shuffles the order of the letters displayed."
  [display-letters]
  [:button {:on-click #(rf/dispatch  [::events/shuffle-letter-order display-letters])
            :class "button-style"}
   "Shuffle letters"])
