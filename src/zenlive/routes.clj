(ns zenlive.routes
  (:require [compojure.core :refer :all]
            [zenlive.layout :as page]
            [zenlive.pages.ctrl :as pages]))

(defroutes home
  (GET "/" req
       (pages/homepage))
  (GET "/sign-in" req
       (pages/signinpage)))
