(ns zenlive.pages.signup
  (:require [net.cgrand.enlive-html :as html]
            [questdb.core :refer :all]))



;;(def db "zenlivedb")

(html/deftemplate signup "selmer/signup.html"
  [])

;;(defn addacc [par]
;;  (put-doc! db par))

