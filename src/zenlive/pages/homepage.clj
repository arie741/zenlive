(ns zenlive.pages.homepage
  (:require [net.cgrand.enlive-html :as html]
            [questdb.core :refer :all]
            [zenlive.pages.cp :refer :all]))

(defn accessdb [keyw person]
  (keyw (find-doc qdb {:person person})))

(html/deftemplate home "selmer/home.html"
  []
  [:quotec] (html/content (accessdb :quotec "Woody Guthrie"))
  [:person] (html/content (accessdb :person "Woody Guthrie")))
