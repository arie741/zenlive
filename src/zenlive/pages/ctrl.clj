(ns zenlive.pages.ctrl 
  (:require [net.cgrand.enlive-html :as html]
            [zenlive.pages.pagelayout :refer :all]))

;;Pages

(def ctitle " - zenius.net | The next revolution in learning")

;;Home
(html/deftemplate home (str dir "home.html")
  [])

(defn homepage []
  (createpage home (str "Home" ctitle)))

;;Sign-in
(html/deftemplate signin (str dir "signin.html")
  [])

(defn signinpage []
  (createpage signin (str "Sign-in" ctitle)))