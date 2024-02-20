(ns spelling-bee.core
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [re-frame.core :as rf]
            [reagent.dom :as rdom]
            [spelling-bee.config :as config]
            [spelling-bee.events :as events]
            [spelling-bee.views :as views]))

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

(defn get-letter-collection [word-set]
  (-> word-collection
      vec
      str/join
      seq
      set))
  
(defn find-common-letter [word-set]
  (reduce
   set/intersection
   (map set (seq word-set))))





(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (rf/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
