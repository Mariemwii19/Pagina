
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.J9fQ5p_p.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.BswSpifZ.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor-legacy.uh8YMXWE.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DRtxhkWq.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.CFvdQnBq.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CxstPQQL.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.CJdcP84S.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.J9fYMFZL.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.CUOJ19RE.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.BUHi_pcg.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo-legacy.DuJT6Lb9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.DfRQ3YSZ.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton-legacy.Ce_LPRDa.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.Cq-w82_e.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.Ddv-71vC.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.CSL4KS-C.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery-legacy.D481ROUb.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.Bsdmu7Va.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.CEz2_-6X.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayErrorBanner-legacy.Cfh2xaNT.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage-legacy.BumrvMZ_.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.DF7NhMB4.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.C0F-82sg.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index-legacy.x_-qscs_.js","/cdn/shopifycloud/checkout-web/assets/c1/v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/monorail-legacy.DEnvHcdl.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.DgwQzhpE.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CoheM6z0.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Dg9TiGrH.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0577/6162/8330/files/logo-01_x320.png?v=1641191500","https://cdn.shopify.com/s/files/1/0577/6162/8330/files/Neuherbs_Checkout_0bcd6804-7e66-4812-a058-45af6f6ae96e_2000x.jpg?v=1642161724"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  