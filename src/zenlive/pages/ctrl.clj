(ns zenlive.pages.ctrl 
  (:require [net.cgrand.enlive-html :as html]
            [zenlive.pages.pagelayout :refer :all]
            [questdb.core :refer :all]
            [zenlive.pages.homepage :refer :all]
            [zenlive.pages.signin :refer :all]
            [zenlive.pages.signup :refer :all]
            [zenlive.pages.cp :refer :all]))

;;Pages

(def ctitle " - zenius.net | The next revolution in learning")

;;homepage
(defn homepage []
  (createpage home (str "Home" ctitle)))

;;Control Panel page
(defn cppage []
  (createpage cp (str "Control Panel" ctitle)))

(defn addquote [q]
  (put-doc! qdb q))

;;signup page
(defn signuppage []
  (createpage signup (str "Sign-Up" ctitle)))

;;signin page
(defn signinpage []
  (createpage signin (str "Sign-in" ctitle)))
