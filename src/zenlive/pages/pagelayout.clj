(ns zenlive.pages.pagelayout
  (:require [net.cgrand.enlive-html :as html]
            [clojure.tools.reader.edn :as edn]))

;;layout
(def dir "selmer/")

(html/deftemplate header (str dir "header.html")
  [])

(html/deftemplate footer (str dir "footer.html")
  [])

(html/deftemplate layout (str dir "layout.html")
  [content contenttitle]
  [:title] (html/content contenttitle)
  [:header] (html/html-content (apply str (header)))
  [:pagecontents] (html/html-content (apply str (content)))
  [:footer] (html/html-content (apply str (footer))))

(defn createpage [pcontents tcontent]
  (apply str (layout pcontents tcontent)))
;;

