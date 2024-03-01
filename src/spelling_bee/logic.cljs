(ns spelling-bee.logic
  (:require
   [clojure.set         :as set]
   [clojure.string      :as str]))




;---------- various functions ----------

;; Later this can be substituted with a database call to pull a list of words.


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



(defn validate-word
  "Checks the given word against the current word list and letter set to see if it is valid. Gives the following keywords as a result.
   
   :submit-ok :too-short :invalid :no-common :not-in-list :other"
  [word word-list letters common-letter]
  (cond
    (contains? word-list word)                         :submit-ok       ; first check if the word is in the word collection
    (> 4 (count (seq word)))                           :too-short       ; check length, notify if less than 3 letters
    (not (every? letters (set word)))                  :invalid         ; check if every letter in the word is in letters set 
    (not (contains? (set word) (first common-letter))) :no-common       ; if it does not contain the common letter
    (contains? (set word) (first common-letter))       :not-in-list     ; then check if the word at least contains common letter 
    :else                                              :other))         ; generic if it somehow manages to not match one of the above

(defn validate-letter [letter letters common-letter]
  (cond
    (= letter (str (first common-letter))) :required
    (contains? (set letters) letter) :valid
    :else                            :invalid))

(defn calculate-points [word letters]
  (cond
    (= (get-unique-letter-collection word) (set letters)) (+ (count (seq word)) 7)
    (= (count (seq word)) 4) (int 1)
    :else (count (seq word))))
