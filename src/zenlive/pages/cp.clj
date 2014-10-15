(ns zenlive.pages.cp 
  (:require [net.cgrand.enlive-html :as html]            
            [questdb.core :refer :all]))

(def qdb "quotedb")

(html/deftemplate cp "selmer/cp.html"
  [])

