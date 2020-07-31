(ns io.ianalytics.d4d.core
  (:require ["react" :as react]
            ["react-dom" :as react-dom]

            ["/Component.js" :default Example]))


(defn init! []
  (react-dom/render (Example 5) (js/document.querySelector "#root")))


(defn reload! []
  (init!))
