(ns spelling-bee.core
  (:require 
            [re-frame.core :as rf]
            [reagent.dom :as rdom]
            [spelling-bee.config :as config]
            [spelling-bee.events :as events]
            [spelling-bee.views :as views]))



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
