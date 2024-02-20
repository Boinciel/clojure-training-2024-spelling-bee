(ns spelling-bee.events
  (:require
   [clojure.set :as set]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [spelling-bee.db :as db]
   ))

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


(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-db ::set-words-and-letters
  (fn [db [_ word-set]]
    (assoc db :words word-set
              :common-letter (find-common-letter word-set) 
              :letters (get-unique-letter-collection word-set))))

