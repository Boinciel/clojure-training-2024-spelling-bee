(ns spelling-bee.events
  (:require
   [re-frame.core :as rf]
   [spelling-bee.db :as db]
   ))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-db ::set-words
  (fn [db [_ word-coll]]
    (assoc db :words word-coll)))