!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (e, t, r) {
    window.SpeechSDK = r(1);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(2);
    r(4).Events.instance.attachListener(new n.ConsoleLoggingListener()),
      (function (e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      })(r(29));
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(r(3)),
      n(r(23)),
      n(r(156)),
      n(r(157)),
      n(r(158)),
      n(r(159)),
      n(r(169)),
      n(r(170));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = function (e) {
        var t = this;
        void 0 === e && (e = n.EventType.Warning),
          (this.onEvent = function (e) {
            if (e.eventType >= t.privLogLevelFilter) {
              var r = t.toString(e);
              switch (e.eventType) {
                case n.EventType.Debug:
                  console.debug(r);
                  break;
                case n.EventType.Info:
                  console.info(r);
                  break;
                case n.EventType.Warning:
                  console.warn(r);
                  break;
                case n.EventType.Error:
                  console.error(r);
                  break;
                default:
                  console.log(r);
              }
            }
          }),
          (this.toString = function (e) {
            var t = ["" + e.EventTime, "" + e.Name];
            for (var r in e)
              if (
                r &&
                e.hasOwnProperty(r) &&
                "eventTime" !== r &&
                "eventType" !== r &&
                "eventId" !== r &&
                "name" !== r &&
                "constructor" !== r
              ) {
                var n = e[r],
                  i = "<NULL>";
                null != n &&
                  (i =
                    "number" == typeof n || "string" == typeof n
                      ? n.toString()
                      : JSON.stringify(n)),
                  t.push(r + ": " + i);
              }
            return t.join(" | ");
          }),
          (this.privLogLevelFilter = e);
      };
    t.ConsoleLoggingListener = i;
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(r(5)),
      n(r(8)),
      n(r(9)),
      n(r(11)),
      n(r(10)),
      n(r(12)),
      n(r(13)),
      n(r(7)),
      n(r(14)),
      n(r(15)),
      n(r(6)),
      n(r(16)),
      n(r(17)),
      n(r(18)),
      n(r(19)),
      n(r(20));
    var i = r(21);
    (t.TranslationStatus = i.TranslationStatus), n(r(22));
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(6),
      s = (function (e) {
        function t(t, r, n) {
          void 0 === n && (n = o.EventType.Info);
          var i = e.call(this, t, n) || this;
          return (i.privAudioSourceId = r), i;
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
              return this.privAudioSourceId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(o.PlatformEvent);
    t.AudioSourceEvent = s;
    var a = (function (e) {
      function t(t) {
        return e.call(this, "AudioSourceInitializingEvent", t) || this;
      }
      return i(t, e), t;
    })(s);
    t.AudioSourceInitializingEvent = a;
    var c = (function (e) {
      function t(t) {
        return e.call(this, "AudioSourceReadyEvent", t) || this;
      }
      return i(t, e), t;
    })(s);
    t.AudioSourceReadyEvent = c;
    var p = (function (e) {
      function t(t) {
        return e.call(this, "AudioSourceOffEvent", t) || this;
      }
      return i(t, e), t;
    })(s);
    t.AudioSourceOffEvent = p;
    var u = (function (e) {
      function t(t, r) {
        var n =
          e.call(this, "AudioSourceErrorEvent", t, o.EventType.Error) || this;
        return (n.privError = r), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "error", {
          get: function () {
            return this.privError;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.AudioSourceErrorEvent = u;
    var v = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, t, r) || this;
        return (i.privAudioNodeId = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "audioNodeId", {
          get: function () {
            return this.privAudioNodeId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.AudioStreamNodeEvent = v;
    var f = (function (e) {
      function t(t, r) {
        return e.call(this, "AudioStreamNodeAttachingEvent", t, r) || this;
      }
      return i(t, e), t;
    })(v);
    t.AudioStreamNodeAttachingEvent = f;
    var h = (function (e) {
      function t(t, r) {
        return e.call(this, "AudioStreamNodeAttachedEvent", t, r) || this;
      }
      return i(t, e), t;
    })(v);
    t.AudioStreamNodeAttachedEvent = h;
    var l = (function (e) {
      function t(t, r) {
        return e.call(this, "AudioStreamNodeDetachedEvent", t, r) || this;
      }
      return i(t, e), t;
    })(v);
    t.AudioStreamNodeDetachedEvent = l;
    var d = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "AudioStreamNodeErrorEvent", t, r) || this;
        return (i.privError = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "error", {
          get: function () {
            return this.privError;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(v);
    t.AudioStreamNodeErrorEvent = d;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(7);
    !(function (e) {
      (e[(e.Debug = 0)] = "Debug"),
        (e[(e.Info = 1)] = "Info"),
        (e[(e.Warning = 2)] = "Warning"),
        (e[(e.Error = 3)] = "Error");
    })(t.EventType || (t.EventType = {}));
    var i = (function () {
      function e(e, t) {
        (this.privName = e),
          (this.privEventId = n.createNoDashGuid()),
          (this.privEventTime = new Date().toISOString()),
          (this.privEventType = t),
          (this.privMetadata = {});
      }
      return (
        Object.defineProperty(e.prototype, "name", {
          get: function () {
            return this.privName;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "eventId", {
          get: function () {
            return this.privEventId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "eventTime", {
          get: function () {
            return this.privEventTime;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "eventType", {
          get: function () {
            return this.privEventType;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "metadata", {
          get: function () {
            return this.privMetadata;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.PlatformEvent = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function () {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (t) {
          var r = (e + 16 * Math.random()) % 16 | 0;
          return (
            (e = Math.floor(e / 16)), ("x" === t ? r : (3 & r) | 8).toString(16)
          );
        }
      );
    };
    t.createGuid = n;
    t.createNoDashGuid = function () {
      return n().replace(new RegExp("-", "g"), "").toUpperCase();
    };
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(6),
      s = (function (e) {
        function t(t, r, n) {
          void 0 === n && (n = o.EventType.Info);
          var i = e.call(this, t, n) || this;
          return (i.privJsonResult = r), i;
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "jsonString", {
            get: function () {
              return this.privJsonResult;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(o.PlatformEvent);
    t.ServiceEvent = s;
    var a = (function (e) {
      function t(t, r, n) {
        void 0 === n && (n = o.EventType.Info);
        var i = e.call(this, t, n) || this;
        return (i.privConnectionId = r), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "connectionId", {
          get: function () {
            return this.privConnectionId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o.PlatformEvent);
    t.ConnectionEvent = a;
    var c = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "ConnectionStartEvent", t) || this;
        return (i.privUri = r), (i.privHeaders = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "uri", {
          get: function () {
            return this.privUri;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "headers", {
          get: function () {
            return this.privHeaders;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionStartEvent = c;
    var p = (function (e) {
      function t(t, r) {
        return e.call(this, "ConnectionEstablishedEvent", t) || this;
      }
      return i(t, e), t;
    })(a);
    t.ConnectionEstablishedEvent = p;
    var u = (function (e) {
      function t(t, r, n) {
        var i =
          e.call(this, "ConnectionClosedEvent", t, o.EventType.Debug) || this;
        return (i.privRreason = n), (i.privStatusCode = r), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privRreason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "statusCode", {
          get: function () {
            return this.privStatusCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionClosedEvent = u;
    var v = (function (e) {
      function t(t, r, n) {
        var i =
          e.call(this, "ConnectionErrorEvent", t, o.EventType.Debug) || this;
        return (i.privMessage = r), (i.privType = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "message", {
          get: function () {
            return this.privMessage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return this.privType;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionErrorEvent = v;
    var f = (function (e) {
      function t(t, r, n) {
        var i =
          e.call(this, "ConnectionEstablishErrorEvent", t, o.EventType.Error) ||
          this;
        return (i.privStatusCode = r), (i.privReason = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "statusCode", {
          get: function () {
            return this.privStatusCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionEstablishErrorEvent = f;
    var h = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "ConnectionMessageReceivedEvent", t) || this;
        return (i.privNetworkReceivedTime = r), (i.privMessage = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "networkReceivedTime", {
          get: function () {
            return this.privNetworkReceivedTime;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "message", {
          get: function () {
            return this.privMessage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionMessageReceivedEvent = h;
    var l = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "ConnectionMessageSentEvent", t) || this;
        return (i.privNetworkSentTime = r), (i.privMessage = n), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "networkSentTime", {
          get: function () {
            return this.privNetworkSentTime;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "message", {
          get: function () {
            return this.privMessage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(a);
    t.ConnectionMessageSentEvent = l;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      i = r(10),
      o = r(7);
    !(function (e) {
      (e[(e.Text = 0)] = "Text"), (e[(e.Binary = 1)] = "Binary");
    })((n = t.MessageType || (t.MessageType = {})));
    var s = (function () {
      function e(e, t, r, s) {
        if (((this.privBody = null), e === n.Text && t && "string" != typeof t))
          throw new i.InvalidOperationError("Payload must be a string");
        if (e === n.Binary && t && !(t instanceof ArrayBuffer))
          throw new i.InvalidOperationError("Payload must be ArrayBuffer");
        switch (
          ((this.privMessageType = e),
          (this.privBody = t),
          (this.privHeaders = r || {}),
          (this.privId = s || o.createNoDashGuid()),
          this.messageType)
        ) {
          case n.Binary:
            this.privSize =
              null !== this.binaryBody ? this.binaryBody.byteLength : 0;
            break;
          case n.Text:
            this.privSize = this.textBody.length;
        }
      }
      return (
        Object.defineProperty(e.prototype, "messageType", {
          get: function () {
            return this.privMessageType;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "headers", {
          get: function () {
            return this.privHeaders;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "body", {
          get: function () {
            return this.privBody;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "textBody", {
          get: function () {
            if (this.privMessageType === n.Binary)
              throw new i.InvalidOperationError(
                "Not supported for binary message"
              );
            return this.privBody;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "binaryBody", {
          get: function () {
            if (this.privMessageType === n.Text)
              throw new i.InvalidOperationError(
                "Not supported for text message"
              );
            return this.privBody;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ConnectionMessage = s;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t) {
        var r = e.call(this, t) || this;
        return (r.name = "ArgumentNull"), (r.message = t), r;
      }
      return i(t, e), t;
    })(Error);
    t.ArgumentNullError = o;
    var s = (function (e) {
      function t(t) {
        var r = e.call(this, t) || this;
        return (r.name = "InvalidOperation"), (r.message = t), r;
      }
      return i(t, e), t;
    })(Error);
    t.InvalidOperationError = s;
    var a = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.name = t + "ObjectDisposed"), (n.message = r), n;
      }
      return i(t, e), t;
    })(Error);
    t.ObjectDisposedError = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t) {
        (this.privStatusCode = e), (this.privReason = t);
      }
      return (
        Object.defineProperty(e.prototype, "statusCode", {
          get: function () {
            return this.privStatusCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ConnectionOpenResponse = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = r(13),
      o = (function () {
        function e() {}
        return (
          Object.defineProperty(e, "instance", {
            get: function () {
              return e.privInstance;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.privInstance = new i.EventSource()),
          (e.setEventSource = function (t) {
            if (!t) throw new n.ArgumentNullError("eventSource");
            e.privInstance = t;
          }),
          e
        );
      })();
    t.Events = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = r(7),
      o = (function () {
        function e(e) {
          var t = this;
          (this.privEventListeners = {}),
            (this.privIsDisposed = !1),
            (this.onEvent = function (e) {
              if (t.isDisposed())
                throw new n.ObjectDisposedError("EventSource");
              if (t.metadata)
                for (var r in t.metadata)
                  r &&
                    e.metadata &&
                    (e.metadata[r] || (e.metadata[r] = t.metadata[r]));
              for (var i in t.privEventListeners)
                i && t.privEventListeners[i] && t.privEventListeners[i](e);
            }),
            (this.attach = function (e) {
              var r = i.createNoDashGuid();
              return (
                (t.privEventListeners[r] = e),
                {
                  detach: function () {
                    delete t.privEventListeners[r];
                  },
                }
              );
            }),
            (this.attachListener = function (e) {
              return t.attach(e.onEvent);
            }),
            (this.isDisposed = function () {
              return t.privIsDisposed;
            }),
            (this.dispose = function () {
              (t.privEventListeners = null), (t.privIsDisposed = !0);
            }),
            (this.privMetadata = e);
        }
        return (
          Object.defineProperty(e.prototype, "metadata", {
            get: function () {
              return this.privMetadata;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.EventSource = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Connected = 1)] = "Connected"),
          (e[(e.Connecting = 2)] = "Connecting"),
          (e[(e.Disconnected = 3)] = "Disconnected");
      })(t.ConnectionState || (t.ConnectionState = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = function e(t) {
        var r = this;
        if (
          ((this.privSubscriptionIdCounter = 0),
          (this.privAddSubscriptions = {}),
          (this.privRemoveSubscriptions = {}),
          (this.privDisposedSubscriptions = {}),
          (this.privDisposeReason = null),
          (this.get = function (e) {
            return r.throwIfDisposed(), r.privList[e];
          }),
          (this.first = function () {
            return r.get(0);
          }),
          (this.last = function () {
            return r.get(r.length() - 1);
          }),
          (this.add = function (e) {
            r.throwIfDisposed(), r.insertAt(r.privList.length, e);
          }),
          (this.insertAt = function (e, t) {
            r.throwIfDisposed(),
              0 === e
                ? r.privList.unshift(t)
                : e === r.privList.length
                ? r.privList.push(t)
                : r.privList.splice(e, 0, t),
              r.triggerSubscriptions(r.privAddSubscriptions);
          }),
          (this.removeFirst = function () {
            return r.throwIfDisposed(), r.removeAt(0);
          }),
          (this.removeLast = function () {
            return r.throwIfDisposed(), r.removeAt(r.length() - 1);
          }),
          (this.removeAt = function (e) {
            return r.throwIfDisposed(), r.remove(e, 1)[0];
          }),
          (this.remove = function (e, t) {
            r.throwIfDisposed();
            var n = r.privList.splice(e, t);
            return r.triggerSubscriptions(r.privRemoveSubscriptions), n;
          }),
          (this.clear = function () {
            r.throwIfDisposed(), r.remove(0, r.length());
          }),
          (this.length = function () {
            return r.throwIfDisposed(), r.privList.length;
          }),
          (this.onAdded = function (e) {
            r.throwIfDisposed();
            var t = r.privSubscriptionIdCounter++;
            return (
              (r.privAddSubscriptions[t] = e),
              {
                detach: function () {
                  delete r.privAddSubscriptions[t];
                },
              }
            );
          }),
          (this.onRemoved = function (e) {
            r.throwIfDisposed();
            var t = r.privSubscriptionIdCounter++;
            return (
              (r.privRemoveSubscriptions[t] = e),
              {
                detach: function () {
                  delete r.privRemoveSubscriptions[t];
                },
              }
            );
          }),
          (this.onDisposed = function (e) {
            r.throwIfDisposed();
            var t = r.privSubscriptionIdCounter++;
            return (
              (r.privDisposedSubscriptions[t] = e),
              {
                detach: function () {
                  delete r.privDisposedSubscriptions[t];
                },
              }
            );
          }),
          (this.join = function (e) {
            return r.throwIfDisposed(), r.privList.join(e);
          }),
          (this.toArray = function () {
            var e = Array();
            return (
              r.privList.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (this.any = function (e) {
            return (
              r.throwIfDisposed(), e ? r.where(e).length() > 0 : r.length() > 0
            );
          }),
          (this.all = function (e) {
            return r.throwIfDisposed(), r.where(e).length() === r.length();
          }),
          (this.forEach = function (e) {
            r.throwIfDisposed();
            for (var t = 0; t < r.length(); t++) e(r.privList[t], t);
          }),
          (this.select = function (t) {
            r.throwIfDisposed();
            for (var n = [], i = 0; i < r.privList.length; i++)
              n.push(t(r.privList[i], i));
            return new e(n);
          }),
          (this.where = function (t) {
            r.throwIfDisposed();
            for (var n = new e(), i = 0; i < r.privList.length; i++)
              t(r.privList[i], i) && n.add(r.privList[i]);
            return n;
          }),
          (this.orderBy = function (t) {
            return r.throwIfDisposed(), new e(r.toArray().sort(t));
          }),
          (this.orderByDesc = function (e) {
            return (
              r.throwIfDisposed(),
              r.orderBy(function (t, r) {
                return e(r, t);
              })
            );
          }),
          (this.clone = function () {
            return r.throwIfDisposed(), new e(r.toArray());
          }),
          (this.concat = function (t) {
            return r.throwIfDisposed(), new e(r.privList.concat(t.toArray()));
          }),
          (this.concatArray = function (t) {
            return r.throwIfDisposed(), new e(r.privList.concat(t));
          }),
          (this.isDisposed = function () {
            return null == r.privList;
          }),
          (this.dispose = function (e) {
            r.isDisposed() ||
              ((r.privDisposeReason = e),
              (r.privList = null),
              (r.privAddSubscriptions = null),
              (r.privRemoveSubscriptions = null),
              r.triggerSubscriptions(r.privDisposedSubscriptions));
          }),
          (this.throwIfDisposed = function () {
            if (r.isDisposed())
              throw new n.ObjectDisposedError("List", r.privDisposeReason);
          }),
          (this.triggerSubscriptions = function (e) {
            if (e) for (var t in e) t && e[t]();
          }),
          (this.privList = []),
          t)
        )
          for (var i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            this.privList.push(s);
          }
      };
    t.List = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      i = r(10);
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Resolved = 1)] = "Resolved"),
        (e[(e.Rejected = 2)] = "Rejected");
    })((n = t.PromiseState || (t.PromiseState = {})));
    var o = (function () {
      function e(e) {
        var t = this;
        (this.throwIfError = function () {
          if (t.isError) throw t.error;
        }),
          e.on(
            function (e) {
              t.privIsCompleted ||
                ((t.privIsCompleted = !0),
                (t.privIsError = !1),
                (t.privResult = e));
            },
            function (e) {
              t.privIsCompleted ||
                ((t.privIsCompleted = !0),
                (t.privIsError = !0),
                (t.privError = e));
            }
          );
      }
      return (
        Object.defineProperty(e.prototype, "isCompleted", {
          get: function () {
            return this.privIsCompleted;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isError", {
          get: function () {
            return this.privIsError;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "error", {
          get: function () {
            return this.privError;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.PromiseResult = o;
    var s = function () {
      var e = this;
      (this.setResult = function (t) {
        e.privOnSetResult(t);
      }),
        (this.setError = function (t) {
          e.privOnSetError(t);
        }),
        (this.on = function (t, r) {
          (e.privOnSetResult = t), (e.privOnSetError = r);
        });
    };
    t.PromiseResultEventSource = s;
    var a = (function () {
      function e() {}
      return (
        (e.whenAll = function (e) {
          if (!e || 0 === e.length) throw new i.ArgumentNullError("promises");
          for (
            var t = new p(),
              r = [],
              n = 0,
              o = function () {
                ++n === e.length &&
                  (0 === r.length ? t.resolve(!0) : t.reject(r.join(", ")));
              },
              s = 0,
              a = e;
            s < a.length;
            s++
          ) {
            a[s].on(
              function (e) {
                o();
              },
              function (e) {
                r.push(e), o();
              }
            );
          }
          return t.promise();
        }),
        (e.fromResult = function (e) {
          var t = new p();
          return t.resolve(e), t.promise();
        }),
        (e.fromError = function (e) {
          var t = new p();
          return t.reject(e), t.promise();
        }),
        e
      );
    })();
    t.PromiseHelper = a;
    var c = function (e) {
      var t = this;
      (this.result = function () {
        return t.privSink.result;
      }),
        (this.continueWith = function (e) {
          if (!e) throw new i.ArgumentNullError("continuationCallback");
          var r = new p();
          return (
            t.privSink.on(
              function (n) {
                try {
                  var i = e(t.privSink.result);
                  r.resolve(i);
                } catch (e) {
                  r.reject(e);
                }
              },
              function (n) {
                try {
                  var i = e(t.privSink.result);
                  r.resolve(i);
                } catch (e) {
                  r.reject(
                    "'Error handler for error " + n + " threw error " + e + "'"
                  );
                }
              }
            ),
            r.promise()
          );
        }),
        (this.onSuccessContinueWith = function (e) {
          if (!e) throw new i.ArgumentNullError("continuationCallback");
          var r = new p();
          return (
            t.privSink.on(
              function (t) {
                try {
                  var n = e(t);
                  r.resolve(n);
                } catch (e) {
                  r.reject(e);
                }
              },
              function (e) {
                r.reject(e);
              }
            ),
            r.promise()
          );
        }),
        (this.continueWithPromise = function (e) {
          if (!e) throw new i.ArgumentNullError("continuationCallback");
          var r = new p();
          return (
            t.privSink.on(
              function (n) {
                try {
                  var i = e(t.privSink.result);
                  if (!i)
                    throw new Error(
                      "'Continuation callback did not return promise'"
                    );
                  i.on(
                    function (e) {
                      r.resolve(e);
                    },
                    function (e) {
                      r.reject(e);
                    }
                  );
                } catch (e) {
                  r.reject(e);
                }
              },
              function (n) {
                try {
                  var i = e(t.privSink.result);
                  if (!i)
                    throw new Error(
                      "Continuation callback did not return promise"
                    );
                  i.on(
                    function (e) {
                      r.resolve(e);
                    },
                    function (e) {
                      r.reject(e);
                    }
                  );
                } catch (e) {
                  r.reject(
                    "'Error handler for error " + n + " threw error " + e + "'"
                  );
                }
              }
            ),
            r.promise()
          );
        }),
        (this.onSuccessContinueWithPromise = function (e) {
          if (!e) throw new i.ArgumentNullError("continuationCallback");
          var r = new p();
          return (
            t.privSink.on(
              function (t) {
                try {
                  var n = e(t);
                  if (!n)
                    throw new Error(
                      "Continuation callback did not return promise"
                    );
                  n.on(
                    function (e) {
                      r.resolve(e);
                    },
                    function (e) {
                      r.reject(e);
                    }
                  );
                } catch (e) {
                  r.reject(e);
                }
              },
              function (e) {
                r.reject(e);
              }
            ),
            r.promise()
          );
        }),
        (this.on = function (e, r) {
          if (!e) throw new i.ArgumentNullError("successCallback");
          if (!r) throw new i.ArgumentNullError("errorCallback");
          return t.privSink.on(e, r), t;
        }),
        (this.finally = function (e) {
          if (!e) throw new i.ArgumentNullError("callback");
          var r = function (t) {
            e();
          };
          return t.on(r, r);
        }),
        (this.privSink = e);
    };
    t.Promise = c;
    var p = function () {
      var e = this;
      (this.state = function () {
        return e.privSink.state;
      }),
        (this.promise = function () {
          return e.privPromise;
        }),
        (this.resolve = function (t) {
          return e.privSink.resolve(t), e;
        }),
        (this.reject = function (t) {
          return e.privSink.reject(t), e;
        }),
        (this.privSink = new u()),
        (this.privPromise = new c(this.privSink));
    };
    t.Deferred = p;
    var u = (function () {
      function e() {
        var e = this;
        (this.privState = n.None),
          (this.privPromiseResult = null),
          (this.privPromiseResultEvents = null),
          (this.privSuccessHandlers = []),
          (this.privErrorHandlers = []),
          (this.resolve = function (t) {
            if (e.privState !== n.None)
              throw new Error("'Cannot resolve a completed promise'");
            (e.privState = n.Resolved), e.privPromiseResultEvents.setResult(t);
            for (var r = 0; r < e.privSuccessHandlers.length; r++)
              e.executeSuccessCallback(
                t,
                e.privSuccessHandlers[r],
                e.privErrorHandlers[r]
              );
            e.detachHandlers();
          }),
          (this.reject = function (t) {
            if (e.privState !== n.None)
              throw new Error("'Cannot reject a completed promise'");
            (e.privState = n.Rejected), e.privPromiseResultEvents.setError(t);
            for (var r = 0, i = e.privErrorHandlers; r < i.length; r++) {
              var o = i[r];
              e.executeErrorCallback(t, o);
            }
            e.detachHandlers();
          }),
          (this.on = function (t, r) {
            null == t && (t = function (e) {}),
              e.privState === n.None
                ? (e.privSuccessHandlers.push(t), e.privErrorHandlers.push(r))
                : (e.privState === n.Resolved
                    ? e.executeSuccessCallback(e.privPromiseResult.result, t, r)
                    : e.privState === n.Rejected &&
                      e.executeErrorCallback(e.privPromiseResult.error, r),
                  e.detachHandlers());
          }),
          (this.executeSuccessCallback = function (t, r, n) {
            try {
              r(t);
            } catch (t) {
              e.executeErrorCallback(
                "'Unhandled callback error: " + t + "'",
                n
              );
            }
          }),
          (this.executeErrorCallback = function (e, t) {
            if (!t) throw new Error("'Unhandled error: " + e + "'");
            try {
              t(e);
            } catch (t) {
              throw new Error(
                "'Unhandled callback error: " + t + ". InnerError: " + e + "'"
              );
            }
          }),
          (this.detachHandlers = function () {
            (e.privErrorHandlers = []), (e.privSuccessHandlers = []);
          }),
          (this.privPromiseResultEvents = new s()),
          (this.privPromiseResult = new o(this.privPromiseResultEvents));
      }
      return (
        Object.defineProperty(e.prototype, "state", {
          get: function () {
            return this.privState;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "result", {
          get: function () {
            return this.privPromiseResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.Sink = u;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      i = r(10),
      o = r(15),
      s = r(16);
    !(function (e) {
      (e[(e.Dequeue = 0)] = "Dequeue"), (e[(e.Peek = 1)] = "Peek");
    })(n || (n = {}));
    var a = function (e) {
      var t = this;
      (this.privPromiseStore = new o.List()),
        (this.privIsDrainInProgress = !1),
        (this.privIsDisposing = !1),
        (this.privDisposeReason = null),
        (this.enqueue = function (e) {
          t.throwIfDispose(),
            t.enqueueFromPromise(s.PromiseHelper.fromResult(e));
        }),
        (this.enqueueFromPromise = function (e) {
          t.throwIfDispose(),
            t.privPromiseStore.add(e),
            e.finally(function () {
              for (
                ;
                t.privPromiseStore.length() > 0 &&
                t.privPromiseStore.first().result().isCompleted;

              ) {
                var e = t.privPromiseStore.removeFirst();
                e.result().isError || t.privList.add(e.result().result);
              }
            });
        }),
        (this.dequeue = function () {
          t.throwIfDispose();
          var e = new s.Deferred();
          return (
            t.privSubscribers &&
              (t.privSubscribers.add({ deferral: e, type: n.Dequeue }),
              t.drain()),
            e.promise()
          );
        }),
        (this.peek = function () {
          t.throwIfDispose();
          var e = new s.Deferred();
          return (
            t.privSubscribers &&
              (t.privSubscribers.add({ deferral: e, type: n.Peek }), t.drain()),
            e.promise()
          );
        }),
        (this.length = function () {
          return t.throwIfDispose(), t.privList.length();
        }),
        (this.isDisposed = function () {
          return null == t.privSubscribers;
        }),
        (this.drainAndDispose = function (e, r) {
          if (!t.isDisposed() && !t.privIsDisposing) {
            (t.privDisposeReason = r), (t.privIsDisposing = !0);
            var n = t.privSubscribers;
            if (n) {
              for (; n.length() > 0; ) n.removeFirst().deferral.resolve(void 0);
              t.privSubscribers === n && (t.privSubscribers = n);
            }
            for (var i = 0, o = t.privDetachables; i < o.length; i++)
              o[i].detach();
            if (t.privPromiseStore.length() > 0 && e)
              return s.PromiseHelper.whenAll(
                t.privPromiseStore.toArray()
              ).continueWith(function () {
                return (
                  (t.privSubscribers = null),
                  t.privList.forEach(function (t, r) {
                    e(t);
                  }),
                  (t.privList = null),
                  !0
                );
              });
            (t.privSubscribers = null), (t.privList = null);
          }
          return s.PromiseHelper.fromResult(!0);
        }),
        (this.dispose = function (e) {
          t.drainAndDispose(null, e);
        }),
        (this.drain = function () {
          if (!t.privIsDrainInProgress && !t.privIsDisposing) {
            t.privIsDrainInProgress = !0;
            var e = t.privSubscribers,
              r = t.privList;
            if (e && r) {
              for (; r.length() > 0 && e.length() > 0 && !t.privIsDisposing; ) {
                var i = e.removeFirst();
                if (i.type === n.Peek) i.deferral.resolve(r.first());
                else {
                  var o = r.removeFirst();
                  i.deferral.resolve(o);
                }
              }
              t.privSubscribers === e && (t.privSubscribers = e),
                t.privList === r && (t.privList = r);
            }
            t.privIsDrainInProgress = !1;
          }
        }),
        (this.throwIfDispose = function () {
          if (t.isDisposed()) {
            if (t.privDisposeReason)
              throw new i.InvalidOperationError(t.privDisposeReason);
            throw new i.ObjectDisposedError("Queue");
          }
          if (t.privIsDisposing)
            throw new i.InvalidOperationError("Queue disposing");
        }),
        (this.privList = e || new o.List()),
        (this.privDetachables = []),
        (this.privSubscribers = new o.List()),
        this.privDetachables.push(this.privList.onAdded(this.drain));
    };
    t.Queue = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(9),
      i = r(10),
      o = r(7),
      s = (function () {
        function e(e, t, r) {
          if (((this.privPayload = null), !t))
            throw new i.ArgumentNullError("payload");
          if (e === n.MessageType.Binary && !(t instanceof ArrayBuffer))
            throw new i.InvalidOperationError("Payload must be ArrayBuffer");
          if (e === n.MessageType.Text && "string" != typeof t)
            throw new i.InvalidOperationError("Payload must be a string");
          (this.privMessageType = e),
            (this.privPayload = t),
            (this.privId = r || o.createNoDashGuid());
        }
        return (
          Object.defineProperty(e.prototype, "messageType", {
            get: function () {
              return this.privMessageType;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "payload", {
            get: function () {
              return this.privPayload;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "textContent", {
            get: function () {
              if (this.privMessageType === n.MessageType.Binary)
                throw new i.InvalidOperationError(
                  "Not supported for binary message"
                );
              return this.privPayload;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "binaryContent", {
            get: function () {
              if (this.privMessageType === n.MessageType.Text)
                throw new i.InvalidOperationError(
                  "Not supported for text message"
                );
              return this.privPayload;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this.privId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.RawWebsocketMessage = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function (e, t) {
      var r = this;
      (this.encode = function (e) {
        var t = r.downSampleAudioFrame(
          e,
          r.privActualSampleRate,
          r.privDesiredSampleRate
        );
        if (!t) return null;
        var n = 2 * t.length,
          i = new ArrayBuffer(n),
          o = new DataView(i);
        return r.floatTo16BitPCM(o, 0, t), i;
      }),
        (this.setString = function (e, t, r) {
          for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n));
        }),
        (this.floatTo16BitPCM = function (e, t, r) {
          for (var n = 0; n < r.length; n++, t += 2) {
            var i = Math.max(-1, Math.min(1, r[n]));
            e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0);
          }
        }),
        (this.downSampleAudioFrame = function (e, t, r) {
          if (r === t || r > t) return e;
          for (
            var n = t / r,
              i = Math.round(e.length / n),
              o = new Float32Array(i),
              s = 0,
              a = 0;
            a < i;

          ) {
            for (
              var c = Math.round((a + 1) * n), p = 0, u = 0;
              s < c && s < e.length;

            )
              (p += e[s++]), u++;
            o[a++] = p / u;
          }
          return o;
        }),
        (this.privActualSampleRate = e),
        (this.privDesiredSampleRate = t);
    };
    t.RiffPcmEncoder = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = r(7),
      o = r(17),
      s = (function () {
        function e(e) {
          var t = this;
          (this.privReaderIdCounter = 1),
            (this.privIsEnded = !1),
            (this.getReader = function () {
              var e = t.privReaderIdCounter;
              t.privReaderIdCounter++;
              var r = new o.Queue(),
                n = t.privStreambuffer.length;
              t.privReaderQueues[e] = r;
              for (var i = 0; i < n; i++) r.enqueue(t.privStreambuffer[i]);
              return new a(t.privId, r, function () {
                delete t.privReaderQueues[e];
              });
            }),
            (this.throwIfClosed = function () {
              if (t.privIsEnded)
                throw new n.InvalidOperationError("Stream closed");
            }),
            (this.privId = e || i.createNoDashGuid()),
            (this.privStreambuffer = []),
            (this.privReaderQueues = {});
        }
        return (
          Object.defineProperty(e.prototype, "isClosed", {
            get: function () {
              return this.privIsEnded;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this.privId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.close = function () {
            this.privIsEnded ||
              (this.writeStreamChunk({
                buffer: null,
                isEnd: !0,
                timeReceived: Date.now(),
              }),
              (this.privIsEnded = !0));
          }),
          (e.prototype.writeStreamChunk = function (e) {
            for (var t in (this.throwIfClosed(),
            this.privStreambuffer.push(e),
            this.privReaderQueues))
              if (!this.privReaderQueues[t].isDisposed())
                try {
                  this.privReaderQueues[t].enqueue(e);
                } catch (e) {}
          }),
          e
        );
      })();
    t.Stream = s;
    var a = (function () {
      function e(e, t, r) {
        var i = this;
        (this.privIsClosed = !1),
          (this.read = function () {
            if (i.isClosed)
              throw new n.InvalidOperationError("StreamReader closed");
            return i.privReaderQueue
              .dequeue()
              .onSuccessContinueWith(function (e) {
                return (
                  (void 0 === e || e.isEnd) &&
                    i.privReaderQueue.dispose("End of stream reached"),
                  e
                );
              });
          }),
          (this.close = function () {
            i.privIsClosed ||
              ((i.privIsClosed = !0),
              i.privReaderQueue.dispose("StreamReader closed"),
              i.privOnClose());
          }),
          (this.privReaderQueue = t),
          (this.privOnClose = r),
          (this.privStreamId = e);
      }
      return (
        Object.defineProperty(e.prototype, "isClosed", {
          get: function () {
            return this.privIsClosed;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "streamId", {
          get: function () {
            return this.privStreamId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.StreamReader = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Success = 0)] = "Success"), (e[(e.Error = 1)] = "Error");
      })(t.TranslationStatus || (t.TranslationStatus = {}));
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privTargetChunkSize = t), (n.privNextBufferReadyBytes = 0), n;
      }
      return (
        i(t, e),
        (t.prototype.writeStreamChunk = function (t) {
          if (
            t.isEnd ||
            (0 === this.privNextBufferReadyBytes &&
              t.buffer.byteLength === this.privTargetChunkSize)
          )
            e.prototype.writeStreamChunk.call(this, t);
          else
            for (var r = 0; r < t.buffer.byteLength; ) {
              void 0 === this.privNextBufferToWrite &&
                ((this.privNextBufferToWrite = new ArrayBuffer(
                  this.privTargetChunkSize
                )),
                (this.privNextBufferStartTime = t.timeReceived));
              var n = Math.min(
                  t.buffer.byteLength - r,
                  this.privTargetChunkSize - this.privNextBufferReadyBytes
                ),
                i = new Uint8Array(this.privNextBufferToWrite),
                o = new Uint8Array(t.buffer.slice(r, n + r));
              i.set(o, this.privNextBufferReadyBytes),
                (this.privNextBufferReadyBytes += n),
                (r += n),
                this.privNextBufferReadyBytes === this.privTargetChunkSize &&
                  (e.prototype.writeStreamChunk.call(this, {
                    buffer: this.privNextBufferToWrite,
                    isEnd: !1,
                    timeReceived: this.privNextBufferStartTime,
                  }),
                  (this.privNextBufferReadyBytes = 0),
                  (this.privNextBufferToWrite = void 0));
            }
        }),
        (t.prototype.close = function () {
          0 === this.privNextBufferReadyBytes ||
            this.isClosed ||
            e.prototype.writeStreamChunk.call(this, {
              buffer: this.privNextBufferToWrite.slice(
                0,
                this.privNextBufferReadyBytes
              ),
              isEnd: !1,
              timeReceived: this.privNextBufferStartTime,
            }),
            e.prototype.close.call(this);
        }),
        t
      );
    })(r(4).Stream);
    t.ChunkedArrayBufferStream = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(4),
      o = r(35);
    t.AudioWorkletSourceURLPropertyName = "MICROPHONE-WorkletSourceUrl";
    var s = (function () {
      function e(t, r, n) {
        var o = this;
        (this.privRecorder = t),
          (this.deviceId = r),
          (this.privStreams = {}),
          (this.turnOn = function () {
            if (o.privInitializeDeferral)
              return o.privInitializeDeferral.promise();
            o.privInitializeDeferral = new i.Deferred();
            try {
              o.createAudioContext();
            } catch (t) {
              if (t instanceof Error) {
                var e = t;
                o.privInitializeDeferral.reject(e.name + ": " + e.message);
              } else o.privInitializeDeferral.reject(t);
              return o.privInitializeDeferral.promise();
            }
            var t = window.navigator,
              r =
                t.getUserMedia ||
                t.webkitGetUserMedia ||
                t.mozGetUserMedia ||
                t.msGetUserMedia;
            if (
              (t.mediaDevices &&
                (r = function (e, r, n) {
                  t.mediaDevices.getUserMedia(e).then(r).catch(n);
                }),
              r)
            ) {
              var n = function () {
                o.onEvent(new i.AudioSourceInitializingEvent(o.privId)),
                  r(
                    {
                      audio: !o.deviceId || { deviceId: o.deviceId },
                      video: !1,
                    },
                    function (e) {
                      (o.privMediaStream = e),
                        o.onEvent(new i.AudioSourceReadyEvent(o.privId)),
                        o.privInitializeDeferral.resolve(!0);
                    },
                    function (e) {
                      var t =
                          "Error occurred during microphone initialization: " +
                          e,
                        r = o.privInitializeDeferral;
                      (o.privInitializeDeferral = null),
                        r.reject(t),
                        o.onEvent(new i.AudioSourceErrorEvent(o.privId, t));
                    }
                  );
              };
              "suspended" === o.privContext.state
                ? o.privContext.resume().then(n, function (e) {
                    o.privInitializeDeferral.reject(
                      "Failed to initialize audio context: " + e
                    );
                  })
                : n();
            } else {
              var s = "Browser does not support getUserMedia.";
              o.privInitializeDeferral.reject(s),
                o.onEvent(new i.AudioSourceErrorEvent(s, ""));
            }
            return o.privInitializeDeferral.promise();
          }),
          (this.id = function () {
            return o.privId;
          }),
          (this.attach = function (e) {
            return (
              o.onEvent(new i.AudioStreamNodeAttachingEvent(o.privId, e)),
              o.listen(e).onSuccessContinueWith(function (t) {
                return (
                  o.onEvent(new i.AudioStreamNodeAttachedEvent(o.privId, e)),
                  {
                    detach: function () {
                      t.close(),
                        o.turnOff(),
                        delete o.privStreams[e],
                        o.onEvent(
                          new i.AudioStreamNodeDetachedEvent(o.privId, e)
                        );
                    },
                    id: function () {
                      return e;
                    },
                    read: function () {
                      return t.read();
                    },
                  }
                );
              })
            );
          }),
          (this.detach = function (e) {
            e &&
              o.privStreams[e] &&
              (o.privStreams[e].close(),
              delete o.privStreams[e],
              o.onEvent(new i.AudioStreamNodeDetachedEvent(o.privId, e)));
          }),
          (this.turnOff = function () {
            for (var e in o.privStreams)
              if (e) {
                var t = o.privStreams[e];
                t && t.close();
              }
            return (
              o.onEvent(new i.AudioSourceOffEvent(o.privId)),
              (o.privInitializeDeferral = null),
              o.destroyAudioContext(),
              i.PromiseHelper.fromResult(!0)
            );
          }),
          (this.listen = function (e) {
            return o.turnOn().onSuccessContinueWith(function (t) {
              var r = new i.ChunkedArrayBufferStream(o.privOutputChunkSize, e);
              o.privStreams[e] = r;
              try {
                o.privRecorder.record(o.privContext, o.privMediaStream, r);
              } catch (t) {
                throw (
                  (o.onEvent(new i.AudioStreamNodeErrorEvent(o.privId, e, t)),
                  t)
                );
              }
              return r.getReader();
            });
          }),
          (this.onEvent = function (e) {
            o.privEvents.onEvent(e), i.Events.instance.onEvent(e);
          }),
          (this.createAudioContext = function () {
            if (!o.privContext) {
              if ("undefined" == typeof AudioContext)
                throw new Error(
                  "Browser does not support Web Audio API (AudioContext is not available)."
                );
              navigator.mediaDevices.getSupportedConstraints().sampleRate
                ? (o.privContext = new AudioContext({
                    sampleRate: e.AUDIOFORMAT.samplesPerSec,
                  }))
                : (o.privContext = new AudioContext());
            }
          }),
          (this.destroyAudioContext = function () {
            if (o.privContext) {
              o.privRecorder.releaseMediaResources(o.privContext);
              var e = !1;
              "close" in o.privContext && (e = !0),
                e
                  ? (o.privContext.close(), (o.privContext = null))
                  : null !== o.privContext &&
                    "running" === o.privContext.state &&
                    o.privContext.suspend();
            }
          }),
          (this.privOutputChunkSize = e.AUDIOFORMAT.avgBytesPerSec / 10),
          (this.privId = n || i.createNoDashGuid()),
          (this.privEvents = new i.EventSource());
      }
      return (
        Object.defineProperty(e.prototype, "format", {
          get: function () {
            return i.PromiseHelper.fromResult(e.AUDIOFORMAT);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "events", {
          get: function () {
            return this.privEvents;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "deviceInfo", {
          get: function () {
            return this.getMicrophoneLabel().onSuccessContinueWith(function (
              t
            ) {
              return {
                bitspersample: e.AUDIOFORMAT.bitsPerSample,
                channelcount: e.AUDIOFORMAT.channels,
                connectivity: n.connectivity.Unknown,
                manufacturer: "Speech SDK",
                model: t,
                samplerate: e.AUDIOFORMAT.samplesPerSec,
                type: n.type.Microphones,
              };
            });
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.setProperty = function (e, r) {
          if (e !== t.AudioWorkletSourceURLPropertyName)
            throw new Error(
              "Property '" + e + "' is not supported on Microphone."
            );
          this.privRecorder.setWorkletUrl(r);
        }),
        (e.prototype.getMicrophoneLabel = function () {
          var e = this;
          if (void 0 !== this.privMicrophoneLabel)
            return i.PromiseHelper.fromResult(this.privMicrophoneLabel);
          if (void 0 === this.privMediaStream || !this.privMediaStream.active)
            return i.PromiseHelper.fromResult("microphone");
          this.privMicrophoneLabel = "microphone";
          var t = this.privMediaStream.getTracks()[0].getSettings().deviceId;
          if (void 0 === t)
            return i.PromiseHelper.fromResult(this.privMicrophoneLabel);
          var r = new i.Deferred();
          return (
            navigator.mediaDevices.enumerateDevices().then(
              function (n) {
                for (var i = 0, o = n; i < o.length; i++) {
                  var s = o[i];
                  if (s.deviceId === t) {
                    e.privMicrophoneLabel = s.label;
                    break;
                  }
                }
                r.resolve(e.privMicrophoneLabel);
              },
              function () {
                return r.resolve(e.privMicrophoneLabel);
              }
            ),
            r.promise()
          );
        }),
        (e.AUDIOFORMAT = o.AudioStreamFormat.getDefaultInputFormat()),
        e
      );
    })();
    t.MicAudioSource = s;
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(r(25)),
      n(r(27)),
      n(r(26)),
      n(r(28)),
      n(r(106)),
      n(r(107)),
      n(r(109)),
      n(r(110)),
      n(r(64)),
      n(r(111)),
      n(r(112)),
      n(r(113)),
      n(r(114)),
      n(r(115)),
      n(r(116)),
      n(r(117)),
      n(r(118)),
      n(r(119)),
      n(r(120)),
      n(r(121)),
      n(r(122)),
      n(r(123)),
      n(r(124)),
      n(r(125)),
      n(r(126)),
      n(r(127)),
      n(r(129)),
      n(r(130)),
      n(r(131)),
      n(r(135)),
      n(r(136)),
      n(r(151)),
      n(r(152)),
      n(r(153)),
      n(r(155)),
      (t.OutputFormatPropertyName = "OutputFormat"),
      (t.CancellationErrorCodePropertyName = "CancellationErrorCode"),
      (t.ServicePropertiesPropertyName = "ServiceProperties"),
      (t.ForceDictationPropertyName = "ForceDication");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(26),
      o = "Ocp-Apim-Subscription-Key",
      s = function (e) {
        var t = this;
        if (
          ((this.fetch = function (e) {
            return n.PromiseHelper.fromResult(t.privAuthInfo);
          }),
          (this.fetchOnExpiry = function (e) {
            return n.PromiseHelper.fromResult(t.privAuthInfo);
          }),
          !e)
        )
          throw new n.ArgumentNullError("subscriptionKey");
        this.privAuthInfo = new i.AuthInfo(o, e);
      };
    t.CognitiveSubscriptionKeyAuthentication = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t) {
        (this.privHeaderName = e), (this.privToken = t);
      }
      return (
        Object.defineProperty(e.prototype, "headerName", {
          get: function () {
            return this.privHeaderName;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "token", {
          get: function () {
            return this.privToken;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.AuthInfo = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(26),
      o = "Authorization",
      s = function (e, t) {
        var r = this;
        if (
          ((this.fetch = function (e) {
            return r.privFetchCallback(e).onSuccessContinueWith(function (e) {
              return new i.AuthInfo(o, e);
            });
          }),
          (this.fetchOnExpiry = function (e) {
            return r
              .privFetchOnExpiryCallback(e)
              .onSuccessContinueWith(function (e) {
                return new i.AuthInfo(o, e);
              });
          }),
          !e)
        )
          throw new n.ArgumentNullError("fetchCallback");
        if (!t) throw new n.ArgumentNullError("fetchOnExpiryCallback");
        (this.privFetchCallback = e), (this.privFetchOnExpiryCallback = t);
      };
    t.CognitiveTokenAuthentication = s;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(29),
      a = r(65),
      c = r(24),
      p = "X-ConnectionId",
      u = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.create = function (e, r, n) {
              var i = e.parameters.getProperty(
                s.PropertyId.SpeechServiceConnection_Endpoint
              );
              if (!i) {
                var a = e.parameters.getProperty(
                    s.PropertyId.SpeechServiceConnection_IntentRegion
                  ),
                  u =
                    a && a.toLowerCase().startsWith("china")
                      ? ".azure.cn"
                      : ".microsoft.com";
                i =
                  e.parameters.getProperty(
                    s.PropertyId.SpeechServiceConnection_Host,
                    "wss://" + a + ".sr.speech" + u
                  ) + "/speech/recognition/interactive/cognitiveservices/v1";
              }
              var v = {
                format: "simple",
                language: e.parameters.getProperty(
                  s.PropertyId.SpeechServiceConnection_RecoLanguage
                ),
              };
              t.setCommonUrlParams(e, v, i);
              var f = {};
              return (
                void 0 !== r.token &&
                  "" !== r.token &&
                  (f[r.headerName] = r.token),
                (f[p] = n),
                e.parameters.setProperty(
                  s.PropertyId.SpeechServiceConnection_Url,
                  i
                ),
                new o.WebsocketConnection(
                  i,
                  v,
                  f,
                  new c.WebsocketMessageFormatter(),
                  o.ProxyInfo.fromRecognizerConfig(e),
                  n
                )
              );
            }),
            t
          );
        }
        return (
          i(t, e),
          (t.prototype.getSpeechRegionFromIntentRegion = function (e) {
            switch (e) {
              case "West US":
              case "US West":
              case "westus":
                return "uswest";
              case "West US 2":
              case "US West 2":
              case "westus2":
                return "uswest2";
              case "South Central US":
              case "US South Central":
              case "southcentralus":
                return "ussouthcentral";
              case "West Central US":
              case "US West Central":
              case "westcentralus":
                return "uswestcentral";
              case "East US":
              case "US East":
              case "eastus":
                return "useast";
              case "East US 2":
              case "US East 2":
              case "eastus2":
                return "useast2";
              case "West Europe":
              case "Europe West":
              case "westeurope":
                return "europewest";
              case "North Europe":
              case "Europe North":
              case "northeurope":
                return "europenorth";
              case "Brazil South":
              case "South Brazil":
              case "southbrazil":
                return "brazilsouth";
              case "Australia East":
              case "East Australia":
              case "eastaustralia":
                return "australiaeast";
              case "Southeast Asia":
              case "Asia Southeast":
              case "southeastasia":
                return "asiasoutheast";
              case "East Asia":
              case "Asia East":
              case "eastasia":
                return "asiaeast";
              default:
                return e;
            }
          }),
          t
        );
      })(a.ConnectionFactoryBase);
    t.IntentConnectionFactory = u;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(30);
    t.AudioConfig = n.AudioConfig;
    var i = r(35);
    t.AudioStreamFormat = i.AudioStreamFormat;
    var o = r(34);
    (t.AudioInputStream = o.AudioInputStream),
      (t.PullAudioInputStream = o.PullAudioInputStream),
      (t.PushAudioInputStream = o.PushAudioInputStream);
    var s = r(36);
    (t.AudioOutputStream = s.AudioOutputStream),
      (t.PullAudioOutputStream = s.PullAudioOutputStream),
      (t.PushAudioOutputStream = s.PushAudioOutputStream);
    var a = r(39);
    t.CancellationReason = a.CancellationReason;
    var c = r(40);
    t.PullAudioInputStreamCallback = c.PullAudioInputStreamCallback;
    var p = r(41);
    t.PushAudioOutputStreamCallback = p.PushAudioOutputStreamCallback;
    var u = r(42);
    t.KeywordRecognitionModel = u.KeywordRecognitionModel;
    var v = r(43);
    t.SessionEventArgs = v.SessionEventArgs;
    var f = r(44);
    t.RecognitionEventArgs = f.RecognitionEventArgs;
    var h = r(45);
    t.OutputFormat = h.OutputFormat;
    var l = r(46);
    t.IntentRecognitionEventArgs = l.IntentRecognitionEventArgs;
    var d = r(47);
    t.RecognitionResult = d.RecognitionResult;
    var g = r(48);
    t.SpeechRecognitionResult = g.SpeechRecognitionResult;
    var y = r(49);
    t.IntentRecognitionResult = y.IntentRecognitionResult;
    var m = r(50);
    t.LanguageUnderstandingModel = m.LanguageUnderstandingModel;
    var S = r(51);
    t.SpeechRecognitionEventArgs = S.SpeechRecognitionEventArgs;
    var C = r(52);
    t.SpeechRecognitionCanceledEventArgs = C.SpeechRecognitionCanceledEventArgs;
    var b = r(53);
    t.TranslationRecognitionEventArgs = b.TranslationRecognitionEventArgs;
    var P = r(54);
    t.TranslationSynthesisEventArgs = P.TranslationSynthesisEventArgs;
    var R = r(55);
    t.TranslationRecognitionResult = R.TranslationRecognitionResult;
    var I = r(56);
    t.TranslationSynthesisResult = I.TranslationSynthesisResult;
    var O = r(57);
    t.ResultReason = O.ResultReason;
    var w = r(58);
    (t.SpeechConfig = w.SpeechConfig),
      (t.SpeechConfigImpl = w.SpeechConfigImpl);
    var T = r(59);
    t.SpeechTranslationConfig = T.SpeechTranslationConfig;
    var E = r(60);
    t.PropertyCollection = E.PropertyCollection;
    var A = r(61);
    t.PropertyId = A.PropertyId;
    var _ = r(62);
    t.Recognizer = _.Recognizer;
    var M = r(63);
    t.SpeechRecognizer = M.SpeechRecognizer;
    var D = r(67);
    t.IntentRecognizer = D.IntentRecognizer;
    var j = r(68);
    t.TranslationRecognizer = j.TranslationRecognizer;
    var k = r(69);
    t.Translations = k.Translations;
    var N = r(70);
    t.NoMatchReason = N.NoMatchReason;
    var z = r(71);
    t.NoMatchDetails = z.NoMatchDetails;
    var x = r(72);
    t.TranslationRecognitionCanceledEventArgs =
      x.TranslationRecognitionCanceledEventArgs;
    var L = r(73);
    t.IntentRecognitionCanceledEventArgs = L.IntentRecognitionCanceledEventArgs;
    var B = r(74);
    t.CancellationDetails = B.CancellationDetails;
    var F = r(75);
    t.CancellationErrorCode = F.CancellationErrorCode;
    var U = r(76);
    t.ConnectionEventArgs = U.ConnectionEventArgs;
    var q = r(77);
    t.ServiceEventArgs = q.ServiceEventArgs;
    var H = r(78);
    t.Connection = H.Connection;
    var W = r(80);
    t.PhraseListGrammar = W.PhraseListGrammar;
    var K = r(81);
    t.DialogServiceConfig = K.DialogServiceConfig;
    var J = r(82);
    t.BotFrameworkConfig = J.BotFrameworkConfig;
    var V = r(83);
    t.CustomCommandsConfig = V.CustomCommandsConfig;
    var G = r(84);
    t.DialogServiceConnector = G.DialogServiceConnector;
    var Q = r(86);
    t.ActivityReceivedEventArgs = Q.ActivityReceivedEventArgs;
    var Y = r(87);
    t.ServicePropertyChannel = Y.ServicePropertyChannel;
    var X = r(88);
    t.ProfanityOption = X.ProfanityOption;
    var Z = r(89);
    t.BaseAudioPlayer = Z.BaseAudioPlayer;
    var $ = r(90);
    t.ConnectionMessageEventArgs = $.ConnectionMessageEventArgs;
    var ee = r(79);
    t.ConnectionMessage = ee.ConnectionMessage;
    var te = r(91);
    (t.Conversation = te.Conversation),
      (t.ConversationExpirationEventArgs = te.ConversationExpirationEventArgs),
      (t.ConversationParticipantsChangedEventArgs =
        te.ConversationParticipantsChangedEventArgs),
      (t.ConversationTranslationCanceledEventArgs =
        te.ConversationTranslationCanceledEventArgs),
      (t.ConversationTranslationEventArgs =
        te.ConversationTranslationEventArgs),
      (t.ConversationTranslationResult = te.ConversationTranslationResult),
      (t.ConversationTranslator = te.ConversationTranslator),
      (t.Participant = te.Participant),
      (t.ParticipantChangedReason = te.ParticipantChangedReason),
      (t.User = te.User);
    var re = r(38);
    t.SpeechSynthesisOutputFormat = re.SpeechSynthesisOutputFormat;
    var ne = r(101);
    t.SpeechSynthesizer = ne.SpeechSynthesizer;
    var ie = r(102);
    t.SpeechSynthesisResult = ie.SpeechSynthesisResult;
    var oe = r(103);
    t.SpeechSynthesisEventArgs = oe.SpeechSynthesisEventArgs;
    var se = r(104);
    t.SpeechSynthesisWordBoundaryEventArgs =
      se.SpeechSynthesisWordBoundaryEventArgs;
    var ae = r(105);
    t.SpeakerAudioDestination = ae.SpeakerAudioDestination;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(31),
      a = r(29),
      c = r(32),
      p = r(34),
      u = r(36),
      v = (function () {
        function e() {}
        return (
          (e.fromDefaultMicrophoneInput = function () {
            var e = new o.PcmRecorder();
            return new f(new o.MicAudioSource(e));
          }),
          (e.fromMicrophoneInput = function (e) {
            var t = new o.PcmRecorder();
            return new f(new o.MicAudioSource(t, e));
          }),
          (e.fromWavFileInput = function (e) {
            return new f(new o.FileAudioSource(e));
          }),
          (e.fromStreamInput = function (e) {
            if (e instanceof a.PullAudioInputStreamCallback)
              return new f(new p.PullAudioInputStreamImpl(e));
            if (e instanceof a.AudioInputStream) return new f(e);
            throw new Error("Not Supported Type");
          }),
          (e.fromDefaultSpeakerOutput = function () {
            return new h(new a.SpeakerAudioDestination());
          }),
          (e.fromSpeakerOutput = function (t) {
            if (void 0 === t) return e.fromDefaultSpeakerOutput();
            if (t instanceof a.SpeakerAudioDestination) return new h(t);
            throw new Error("Not Supported Type");
          }),
          (e.fromAudioFileOutput = function (e) {
            return new h(new c.AudioFileWriter(e));
          }),
          (e.fromStreamOutput = function (e) {
            if (e instanceof a.PushAudioOutputStreamCallback)
              return new h(new u.PushAudioOutputStreamImpl(e));
            if (e instanceof a.PushAudioOutputStream) return new h(e);
            if (e instanceof a.PullAudioOutputStream) return new h(e);
            throw new Error("Not Supported Type");
          }),
          e
        );
      })();
    t.AudioConfig = v;
    var f = (function (e) {
      function t(t) {
        var r = e.call(this) || this;
        return (r.privSource = t), r;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          get: function () {
            return this.privSource.format;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.close = function () {
          this.privSource.turnOff();
        }),
        (t.prototype.id = function () {
          return this.privSource.id();
        }),
        (t.prototype.turnOn = function () {
          return this.privSource.turnOn();
        }),
        (t.prototype.attach = function (e) {
          return this.privSource.attach(e);
        }),
        (t.prototype.detach = function (e) {
          return this.privSource.detach(e);
        }),
        (t.prototype.turnOff = function () {
          return this.privSource.turnOff();
        }),
        Object.defineProperty(t.prototype, "events", {
          get: function () {
            return this.privSource.events;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.setProperty = function (e, t) {
          if (
            (s.Contracts.throwIfNull(t, "value"),
            void 0 === this.privSource.setProperty)
          )
            throw new Error(
              "This AudioConfig instance does not support setting properties."
            );
          this.privSource.setProperty(e, t);
        }),
        (t.prototype.getProperty = function (e, t) {
          if (void 0 !== this.privSource.getProperty)
            return this.privSource.getProperty(e, t);
          throw new Error(
            "This AudioConfig instance does not support getting properties."
          );
        }),
        Object.defineProperty(t.prototype, "deviceInfo", {
          get: function () {
            return this.privSource.deviceInfo;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(v);
    t.AudioConfigImpl = f;
    var h = (function (e) {
      function t(t) {
        var r = e.call(this) || this;
        return (r.privDestination = t), r;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          set: function (e) {
            this.privDestination.format = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.write = function (e) {
          this.privDestination.write(e);
        }),
        (t.prototype.close = function () {
          this.privDestination.close();
        }),
        (t.prototype.id = function () {
          return this.privDestination.id();
        }),
        (t.prototype.setProperty = function (e, t) {
          throw new Error(
            "This AudioConfig instance does not support setting properties."
          );
        }),
        (t.prototype.getProperty = function (e, t) {
          throw new Error(
            "This AudioConfig instance does not support getting properties."
          );
        }),
        t
      );
    })(v);
    t.AudioOutputConfigImpl = h;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e.throwIfNullOrUndefined = function (e, t) {
          if (null == e) throw new Error("throwIfNullOrUndefined:" + t);
        }),
        (e.throwIfNull = function (e, t) {
          if (null === e) throw new Error("throwIfNull:" + t);
        }),
        (e.throwIfNullOrWhitespace = function (t, r) {
          if ((e.throwIfNullOrUndefined(t, r), ("" + t).trim().length < 1))
            throw new Error("throwIfNullOrWhitespace:" + r);
        }),
        (e.throwIfDisposed = function (e) {
          if (e) throw new Error("the object is already disposed");
        }),
        (e.throwIfArrayEmptyOrWhitespace = function (t, r) {
          if ((e.throwIfNullOrUndefined(t, r), 0 === t.length))
            throw new Error("throwIfArrayEmptyOrWhitespace:" + r);
          for (var n = 0, i = t; n < i.length; n++) {
            var o = i[n];
            e.throwIfNullOrWhitespace(o, r);
          }
        }),
        (e.throwIfFileDoesNotExist = function (t, r) {
          e.throwIfNullOrWhitespace(t, r);
        }),
        (e.throwIfNotUndefined = function (e, t) {
          if (void 0 !== e) throw new Error("throwIfNotUndefined:" + t);
        }),
        e
      );
    })();
    t.Contracts = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(33),
      i = r(31),
      o = (function () {
        function e(e) {
          var t = this;
          (this.id = function () {
            return t.privId;
          }),
            (this.privFd = n.openSync(e, "w"));
        }
        return (
          Object.defineProperty(e.prototype, "format", {
            set: function (e) {
              i.Contracts.throwIfNotUndefined(
                this.privAudioFormat,
                "format is already set"
              ),
                (this.privAudioFormat = e);
              var t = 0;
              this.privAudioFormat.hasHeader &&
                (t = this.privAudioFormat.header.byteLength),
                void 0 !== this.privFd &&
                  (this.privWriteStream = n.createWriteStream("", {
                    fd: this.privFd,
                    start: t,
                    autoClose: !1,
                  }));
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.write = function (e) {
            i.Contracts.throwIfNullOrUndefined(
              this.privAudioFormat,
              "must set format before writing."
            ),
              void 0 !== this.privWriteStream &&
                this.privWriteStream.write(new Uint8Array(e.slice(0)));
          }),
          (e.prototype.close = function () {
            var e = this;
            void 0 !== this.privFd &&
              (this.privWriteStream.on("finish", function () {
                e.privAudioFormat.hasHeader &&
                  (e.privAudioFormat.updateHeader(
                    e.privWriteStream.bytesWritten
                  ),
                  n.writeSync(
                    e.privFd,
                    new Int8Array(e.privAudioFormat.header),
                    0,
                    e.privAudioFormat.header.byteLength,
                    0
                  )),
                  n.closeSync(e.privFd),
                  (e.privFd = void 0);
              }),
              this.privWriteStream.end());
          }),
          e
        );
      })();
    t.AudioFileWriter = o;
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(4),
      a = r(7),
      c = r(29),
      p = r(35),
      u = (function () {
        function e() {}
        return (
          (e.createPushStream = function (e) {
            return v.create(e);
          }),
          (e.createPullStream = function (e, t) {
            return h.create(e, t);
          }),
          e
        );
      })();
    t.AudioInputStream = u;
    var v = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        i(t, e),
        (t.create = function (e) {
          return new f(e);
        }),
        t
      );
    })(u);
    t.PushAudioInputStream = v;
    var f = (function (e) {
      function t(t) {
        var r = e.call(this) || this;
        return (
          (r.onEvent = function (e) {
            r.privEvents.onEvent(e), s.Events.instance.onEvent(e);
          }),
          (r.privFormat =
            void 0 === t ? p.AudioStreamFormatImpl.getDefaultInputFormat() : t),
          (r.privEvents = new s.EventSource()),
          (r.privId = a.createNoDashGuid()),
          (r.privStream = new s.ChunkedArrayBufferStream(
            r.privFormat.avgBytesPerSec / 10
          )),
          r
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          get: function () {
            return s.PromiseHelper.fromResult(this.privFormat);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.write = function (e) {
          this.privStream.writeStreamChunk({
            buffer: e,
            isEnd: !1,
            timeReceived: Date.now(),
          });
        }),
        (t.prototype.close = function () {
          this.privStream.close();
        }),
        (t.prototype.id = function () {
          return this.privId;
        }),
        (t.prototype.turnOn = function () {
          return (
            this.onEvent(new s.AudioSourceInitializingEvent(this.privId)),
            this.onEvent(new s.AudioSourceReadyEvent(this.privId)),
            s.PromiseHelper.fromResult(!0)
          );
        }),
        (t.prototype.attach = function (e) {
          var t = this;
          return (
            this.onEvent(new s.AudioStreamNodeAttachingEvent(this.privId, e)),
            this.turnOn()
              .onSuccessContinueWith(function (e) {
                return t.privStream.getReader();
              })
              .onSuccessContinueWith(function (r) {
                return (
                  t.onEvent(new s.AudioStreamNodeAttachedEvent(t.privId, e)),
                  {
                    detach: function () {
                      r.close(),
                        t.onEvent(
                          new s.AudioStreamNodeDetachedEvent(t.privId, e)
                        ),
                        t.turnOff();
                    },
                    id: function () {
                      return e;
                    },
                    read: function () {
                      return r.read();
                    },
                  }
                );
              })
          );
        }),
        (t.prototype.detach = function (e) {
          this.onEvent(new s.AudioStreamNodeDetachedEvent(this.privId, e));
        }),
        (t.prototype.turnOff = function () {
          return s.PromiseHelper.fromResult(!1);
        }),
        Object.defineProperty(t.prototype, "events", {
          get: function () {
            return this.privEvents;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "deviceInfo", {
          get: function () {
            return s.PromiseHelper.fromResult({
              bitspersample: this.privFormat.bitsPerSample,
              channelcount: this.privFormat.channels,
              connectivity: o.connectivity.Unknown,
              manufacturer: "Speech SDK",
              model: "PushStream",
              samplerate: this.privFormat.samplesPerSec,
              type: o.type.Stream,
            });
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(v);
    t.PushAudioInputStreamImpl = f;
    var h = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        i(t, e),
        (t.create = function (e, t) {
          return new l(e, t);
        }),
        t
      );
    })(u);
    t.PullAudioInputStream = h;
    var l = (function (e) {
      function t(t, r) {
        var n = e.call(this) || this;
        return (
          (n.onEvent = function (e) {
            n.privEvents.onEvent(e), s.Events.instance.onEvent(e);
          }),
          (n.privFormat =
            void 0 === r ? c.AudioStreamFormat.getDefaultInputFormat() : r),
          (n.privEvents = new s.EventSource()),
          (n.privId = a.createNoDashGuid()),
          (n.privCallback = t),
          (n.privIsClosed = !1),
          (n.privBufferSize = n.privFormat.avgBytesPerSec / 10),
          n
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          get: function () {
            return s.PromiseHelper.fromResult(this.privFormat);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.close = function () {
          (this.privIsClosed = !0), this.privCallback.close();
        }),
        (t.prototype.id = function () {
          return this.privId;
        }),
        (t.prototype.turnOn = function () {
          return (
            this.onEvent(new s.AudioSourceInitializingEvent(this.privId)),
            this.onEvent(new s.AudioSourceReadyEvent(this.privId)),
            s.PromiseHelper.fromResult(!0)
          );
        }),
        (t.prototype.attach = function (e) {
          var t = this;
          return (
            this.onEvent(new s.AudioStreamNodeAttachingEvent(this.privId, e)),
            this.turnOn().onSuccessContinueWith(function (r) {
              return (
                t.onEvent(new s.AudioStreamNodeAttachedEvent(t.privId, e)),
                {
                  detach: function () {
                    t.privCallback.close(),
                      t.onEvent(
                        new s.AudioStreamNodeDetachedEvent(t.privId, e)
                      ),
                      t.turnOff();
                  },
                  id: function () {
                    return e;
                  },
                  read: function () {
                    for (var e, r = 0; r < t.privBufferSize; ) {
                      var n = new ArrayBuffer(t.privBufferSize - r),
                        i = t.privCallback.read(n);
                      if (void 0 === e) e = n;
                      else new Int8Array(e).set(new Int8Array(n), r);
                      if (0 === i) break;
                      r += i;
                    }
                    return s.PromiseHelper.fromResult({
                      buffer: e.slice(0, r),
                      isEnd: t.privIsClosed || 0 === r,
                      timeReceived: Date.now(),
                    });
                  },
                }
              );
            })
          );
        }),
        (t.prototype.detach = function (e) {
          this.onEvent(new s.AudioStreamNodeDetachedEvent(this.privId, e));
        }),
        (t.prototype.turnOff = function () {
          return s.PromiseHelper.fromResult(!1);
        }),
        Object.defineProperty(t.prototype, "events", {
          get: function () {
            return this.privEvents;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "deviceInfo", {
          get: function () {
            return s.PromiseHelper.fromResult({
              bitspersample: this.privFormat.bitsPerSample,
              channelcount: this.privFormat.channels,
              connectivity: o.connectivity.Unknown,
              manufacturer: "Speech SDK",
              model: "PullStream",
              samplerate: this.privFormat.samplesPerSec,
              type: o.type.Stream,
            });
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(h);
    t.PullAudioInputStreamImpl = l;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
      function e() {}
      return (
        (e.getDefaultInputFormat = function () {
          return s.getDefaultInputFormat();
        }),
        (e.getWaveFormatPCM = function (e, t, r) {
          return new s(e, t, r);
        }),
        e
      );
    })();
    t.AudioStreamFormat = o;
    var s = (function (e) {
      function t(t, r, n) {
        void 0 === t && (t = 16e3),
          void 0 === r && (r = 16),
          void 0 === n && (n = 1);
        var i = e.call(this) || this;
        (i.setString = function (e, t, r) {
          for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n));
        }),
          (i.formatTag = 1),
          (i.bitsPerSample = r),
          (i.samplesPerSec = t),
          (i.channels = n),
          (i.avgBytesPerSec =
            i.samplesPerSec * i.channels * (i.bitsPerSample / 8)),
          (i.blockAlign = i.channels * Math.max(i.bitsPerSample, 8)),
          (i.privHeader = new ArrayBuffer(44));
        var o = new DataView(i.privHeader);
        return (
          i.setString(o, 0, "RIFF"),
          o.setUint32(4, 0, !0),
          i.setString(o, 8, "WAVEfmt "),
          o.setUint32(16, 16, !0),
          o.setUint16(20, 1, !0),
          o.setUint16(22, i.channels, !0),
          o.setUint32(24, i.samplesPerSec, !0),
          o.setUint32(28, i.avgBytesPerSec, !0),
          o.setUint16(32, i.channels * (i.bitsPerSample / 8), !0),
          o.setUint16(34, i.bitsPerSample, !0),
          i.setString(o, 36, "data"),
          o.setUint32(40, 0, !0),
          i
        );
      }
      return (
        i(t, e),
        (t.getDefaultInputFormat = function () {
          return new t();
        }),
        (t.prototype.close = function () {}),
        Object.defineProperty(t.prototype, "header", {
          get: function () {
            return this.privHeader;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o);
    t.AudioStreamFormatImpl = s;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = r(31),
      a = r(37),
      c = (function () {
        function e() {}
        return (
          (e.createPullStream = function () {
            return p.create();
          }),
          e
        );
      })();
    t.AudioOutputStream = c;
    var p = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        i(t, e),
        (t.create = function () {
          return new u();
        }),
        t
      );
    })(c);
    t.PullAudioOutputStream = p;
    var u = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (
          (t.privId = o.createNoDashGuid()),
          (t.privStream = new o.Stream()),
          (t.streamReader = t.privStream.getReader()),
          t
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          get: function () {
            return this.privFormat;
          },
          set: function (e) {
            null == e &&
              (this.privFormat =
                a.AudioOutputFormatImpl.getDefaultOutputFormat()),
              (this.privFormat = e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isClosed", {
          get: function () {
            return this.privStream.isClosed;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.id = function () {
          return this.privId;
        }),
        (t.prototype.read = function (e) {
          var t = this,
            r = new Int8Array(e),
            n = 0;
          if (void 0 !== this.privLastChunkView) {
            if (this.privLastChunkView.length > e.byteLength)
              return (
                r.set(this.privLastChunkView.slice(0, e.byteLength)),
                (this.privLastChunkView = this.privLastChunkView.slice(
                  e.byteLength
                )),
                o.PromiseHelper.fromResult(e.byteLength)
              );
            r.set(this.privLastChunkView),
              (n = this.privLastChunkView.length),
              (this.privLastChunkView = void 0);
          }
          var i = new o.Deferred(),
            s = function () {
              n < e.byteLength && !t.streamReader.isClosed
                ? t.streamReader.read().onSuccessContinueWith(function (o) {
                    if (void 0 === o || o.isEnd)
                      t.streamReader.close(), i.resolve(n);
                    else {
                      var a = void 0;
                      o.buffer.byteLength > e.byteLength - n
                        ? ((a = o.buffer.slice(0, e.byteLength - n)),
                          (t.privLastChunkView = new Int8Array(
                            o.buffer.slice(e.byteLength - n)
                          )))
                        : (a = o.buffer),
                        r.set(new Int8Array(a), n),
                        (n += a.byteLength),
                        s();
                    }
                  })
                : i.resolve(n);
            };
          return s(), i.promise();
        }),
        (t.prototype.write = function (e) {
          s.Contracts.throwIfNullOrUndefined(
            this.privStream,
            "must set format before writing"
          ),
            this.privStream.writeStreamChunk({
              buffer: e,
              isEnd: !1,
              timeReceived: Date.now(),
            });
        }),
        (t.prototype.close = function () {
          this.privStream.close();
        }),
        t
      );
    })(p);
    t.PullAudioOutputStreamImpl = u;
    var v = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        i(t, e),
        (t.create = function (e) {
          return new f(e);
        }),
        t
      );
    })(c);
    t.PushAudioOutputStream = v;
    var f = (function (e) {
      function t(t) {
        var r = e.call(this) || this;
        return (r.privId = o.createNoDashGuid()), (r.privCallback = t), r;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "format", {
          set: function (e) {},
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.write = function (e) {
          this.privCallback.write && this.privCallback.write(e);
        }),
        (t.prototype.close = function () {
          this.privCallback.close && this.privCallback.close();
        }),
        (t.prototype.id = function () {
          return this.privId;
        }),
        t
      );
    })(v);
    t.PushAudioOutputStreamImpl = f;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i,
      o =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s,
      a = r(38),
      c = r(35);
    !(function (e) {
      (e[(e.PCM = 1)] = "PCM"),
        (e[(e.MuLaw = 2)] = "MuLaw"),
        (e[(e.Siren = 3)] = "Siren"),
        (e[(e.MP3 = 4)] = "MP3"),
        (e[(e.SILKSkype = 5)] = "SILKSkype");
    })((s = t.AudioFormatTag || (t.AudioFormatTag = {})));
    var p = (function (e) {
      function t(t, r, n, i, o, s, a, c, p) {
        var u = e.call(this, n, s, r) || this;
        return (
          (u.formatTag = t),
          (u.avgBytesPerSec = i),
          (u.blockAlign = o),
          (u.priAudioFormatString = a),
          (u.priRequestAudioFormatString = c),
          (u.priHasHeader = p),
          u
        );
      }
      return (
        o(t, e),
        (t.fromSpeechSynthesisOutputFormat = function (e) {
          return t.fromSpeechSynthesisOutputFormatString(
            t.SpeechSynthesisOutputFormatToString[e]
          );
        }),
        (t.fromSpeechSynthesisOutputFormatString = function (e) {
          switch (e) {
            case "raw-8khz-8bit-mono-mulaw":
              return new t(s.PCM, 1, 8e3, 8e3, 1, 8, e, e, !1);
            case "riff-16khz-16kbps-mono-siren":
              return new t(
                s.Siren,
                1,
                16e3,
                2e3,
                40,
                0,
                e,
                "audio-16khz-16kbps-mono-siren",
                !0
              );
            case "audio-16khz-16kbps-mono-siren":
              return new t(s.Siren, 1, 16e3, 2e3, 40, 0, e, e, !1);
            case "audio-16khz-32kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 4096, 2, 16, e, e, !1);
            case "audio-16khz-128kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 16384, 2, 16, e, e, !1);
            case "audio-16khz-64kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 8192, 2, 16, e, e, !1);
            case "audio-24khz-48kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 6144, 2, 16, e, e, !1);
            case "audio-24khz-96kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 12288, 2, 16, e, e, !1);
            case "audio-24khz-160kbitrate-mono-mp3":
              return new t(s.MP3, 1, 16e3, 20480, 2, 16, e, e, !1);
            case "raw-16khz-16bit-mono-truesilk":
              return new t(s.SILKSkype, 1, 16e3, 32e3, 2, 16, e, e, !1);
            case "riff-8khz-16bit-mono-pcm":
              return new t(
                s.PCM,
                1,
                8e3,
                16e3,
                2,
                16,
                e,
                "raw-8khz-16bit-mono-pcm",
                !0
              );
            case "riff-24khz-16bit-mono-pcm":
              return new t(
                s.PCM,
                1,
                24e3,
                48e3,
                2,
                16,
                e,
                "raw-24khz-16bit-mono-pcm",
                !0
              );
            case "riff-8khz-8bit-mono-mulaw":
              return new t(
                s.MuLaw,
                1,
                8e3,
                8e3,
                1,
                8,
                e,
                "raw-8khz-8bit-mono-mulaw",
                !0
              );
            case "raw-16khz-16bit-mono-pcm":
              return new t(
                s.PCM,
                1,
                16e3,
                32e3,
                2,
                16,
                e,
                "raw-16khz-16bit-mono-pcm",
                !1
              );
            case "raw-24khz-16bit-mono-pcm":
              return new t(
                s.PCM,
                1,
                24e3,
                48e3,
                2,
                16,
                e,
                "raw-24khz-16bit-mono-pcm",
                !1
              );
            case "raw-8khz-16bit-mono-pcm":
              return new t(
                s.PCM,
                1,
                8e3,
                16e3,
                2,
                16,
                e,
                "raw-8khz-16bit-mono-pcm",
                !1
              );
            case "riff-16khz-16bit-mono-pcm":
            default:
              return new t(
                s.PCM,
                1,
                16e3,
                32e3,
                2,
                16,
                "riff-16khz-16bit-mono-pcm",
                "raw-16khz-16bit-mono-pcm",
                !0
              );
          }
        }),
        (t.getDefaultOutputFormat = function () {
          return t.fromSpeechSynthesisOutputFormatString("");
        }),
        Object.defineProperty(t.prototype, "hasHeader", {
          get: function () {
            return this.priHasHeader;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "header", {
          get: function () {
            if (this.hasHeader) return this.privHeader;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.updateHeader = function (e) {
          this.priHasHeader &&
            new DataView(this.privHeader).setUint32(40, e, !0);
        }),
        Object.defineProperty(t.prototype, "requestAudioFormatString", {
          get: function () {
            return this.priRequestAudioFormatString;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.SpeechSynthesisOutputFormatToString =
          (((i = {})[a.SpeechSynthesisOutputFormat.Raw8Khz8BitMonoMULaw] =
            "raw-8khz-8bit-mono-mulaw"),
          (i[a.SpeechSynthesisOutputFormat.Riff16Khz16KbpsMonoSiren] =
            "riff-16khz-16kbps-mono-siren"),
          (i[a.SpeechSynthesisOutputFormat.Audio16Khz16KbpsMonoSiren] =
            "audio-16khz-16kbps-mono-siren"),
          (i[a.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3] =
            "audio-16khz-32kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3] =
            "audio-16khz-128kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Audio16Khz64KBitRateMonoMp3] =
            "audio-16khz-64kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3] =
            "audio-24khz-48kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Audio24Khz96KBitRateMonoMp3] =
            "audio-24khz-96kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3] =
            "audio-24khz-160kbitrate-mono-mp3"),
          (i[a.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoTrueSilk] =
            "raw-16khz-16bit-mono-truesilk"),
          (i[a.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm] =
            "riff-16khz-16bit-mono-pcm"),
          (i[a.SpeechSynthesisOutputFormat.Riff8Khz16BitMonoPcm] =
            "riff-8khz-16bit-mono-pcm"),
          (i[a.SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm] =
            "riff-24khz-16bit-mono-pcm"),
          (i[a.SpeechSynthesisOutputFormat.Riff8Khz8BitMonoMULaw] =
            "riff-8khz-8bit-mono-mulaw"),
          (i[a.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoPcm] =
            "raw-16khz-16bit-mono-pcm"),
          (i[a.SpeechSynthesisOutputFormat.Raw24Khz16BitMonoPcm] =
            "raw-24khz-16bit-mono-pcm"),
          (i[a.SpeechSynthesisOutputFormat.Raw8Khz16BitMonoPcm] =
            "raw-8khz-16bit-mono-pcm"),
          i)),
        t
      );
    })(c.AudioStreamFormatImpl);
    t.AudioOutputFormatImpl = p;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Raw8Khz8BitMonoMULaw = 0)] = "Raw8Khz8BitMonoMULaw"),
          (e[(e.Riff16Khz16KbpsMonoSiren = 1)] = "Riff16Khz16KbpsMonoSiren"),
          (e[(e.Audio16Khz16KbpsMonoSiren = 2)] = "Audio16Khz16KbpsMonoSiren"),
          (e[(e.Audio16Khz32KBitRateMonoMp3 = 3)] =
            "Audio16Khz32KBitRateMonoMp3"),
          (e[(e.Audio16Khz128KBitRateMonoMp3 = 4)] =
            "Audio16Khz128KBitRateMonoMp3"),
          (e[(e.Audio16Khz64KBitRateMonoMp3 = 5)] =
            "Audio16Khz64KBitRateMonoMp3"),
          (e[(e.Audio24Khz48KBitRateMonoMp3 = 6)] =
            "Audio24Khz48KBitRateMonoMp3"),
          (e[(e.Audio24Khz96KBitRateMonoMp3 = 7)] =
            "Audio24Khz96KBitRateMonoMp3"),
          (e[(e.Audio24Khz160KBitRateMonoMp3 = 8)] =
            "Audio24Khz160KBitRateMonoMp3"),
          (e[(e.Raw16Khz16BitMonoTrueSilk = 9)] = "Raw16Khz16BitMonoTrueSilk"),
          (e[(e.Riff16Khz16BitMonoPcm = 10)] = "Riff16Khz16BitMonoPcm"),
          (e[(e.Riff8Khz16BitMonoPcm = 11)] = "Riff8Khz16BitMonoPcm"),
          (e[(e.Riff24Khz16BitMonoPcm = 12)] = "Riff24Khz16BitMonoPcm"),
          (e[(e.Riff8Khz8BitMonoMULaw = 13)] = "Riff8Khz8BitMonoMULaw"),
          (e[(e.Raw16Khz16BitMonoPcm = 14)] = "Raw16Khz16BitMonoPcm"),
          (e[(e.Raw24Khz16BitMonoPcm = 15)] = "Raw24Khz16BitMonoPcm"),
          (e[(e.Raw8Khz16BitMonoPcm = 16)] = "Raw8Khz16BitMonoPcm");
      })(t.SpeechSynthesisOutputFormat || (t.SpeechSynthesisOutputFormat = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Error = 0)] = "Error"), (e[(e.EndOfStream = 1)] = "EndOfStream");
      })(t.CancellationReason || (t.CancellationReason = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function () {};
    t.PullAudioInputStreamCallback = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function () {};
    t.PushAudioOutputStreamCallback = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(31),
      i = (function () {
        function e() {
          this.privDisposed = !1;
        }
        return (
          (e.fromFile = function (e) {
            throw (
              (n.Contracts.throwIfFileDoesNotExist(e, "fileName"),
              new Error("Not yet implemented."))
            );
          }),
          (e.fromStream = function (e) {
            throw (
              (n.Contracts.throwIfNull(e, "file"),
              new Error("Not yet implemented."))
            );
          }),
          (e.prototype.close = function () {
            this.privDisposed || (this.privDisposed = !0);
          }),
          e
        );
      })();
    t.KeywordRecognitionModel = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privSessionId = e;
      }
      return (
        Object.defineProperty(e.prototype, "sessionId", {
          get: function () {
            return this.privSessionId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SessionEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privOffset = t), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "offset", {
          get: function () {
            return this.privOffset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SessionEventArgs);
    t.RecognitionEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Simple = 0)] = "Simple"), (e[(e.Detailed = 1)] = "Detailed");
      })(t.OutputFormat || (t.OutputFormat = {}));
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, r, n) || this;
        return (i.privResult = t), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.IntentRecognitionEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t, r, n, i, o, s, a) {
        (this.privResultId = e),
          (this.privReason = t),
          (this.privText = r),
          (this.privDuration = n),
          (this.privOffset = i),
          (this.privErrorDetails = o),
          (this.privJson = s),
          (this.privProperties = a);
      }
      return (
        Object.defineProperty(e.prototype, "resultId", {
          get: function () {
            return this.privResultId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "text", {
          get: function () {
            return this.privText;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "duration", {
          get: function () {
            return this.privDuration;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "offset", {
          get: function () {
            return this.privOffset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "json", {
          get: function () {
            return this.privJson;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.RecognitionResult = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o, s, a, c) {
        return e.call(this, t, r, n, i, o, s, a, c) || this;
      }
      return i(t, e), t;
    })(r(29).RecognitionResult);
    t.SpeechRecognitionResult = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o, s, a, c, p) {
        var u = e.call(this, r, n, i, o, s, a, c, p) || this;
        return (u.privIntentId = t), u;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "intentId", {
          get: function () {
            return this.privIntentId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SpeechRecognitionResult);
    t.IntentRecognitionResult = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(31),
      s = (function () {
        function e() {}
        return (
          (e.fromEndpoint = function (e) {
            o.Contracts.throwIfNull(e, "uri"),
              o.Contracts.throwIfNullOrWhitespace(e.hostname, "uri");
            var t = new a(),
              r = e.host.indexOf(".");
            if (-1 === r)
              throw new Error("Could not determine region from endpoint");
            t.region = e.host.substr(0, r);
            var n = e.pathname.lastIndexOf("/") + 1;
            if (-1 === n)
              throw new Error("Could not determine appId from endpoint");
            if (
              ((t.appId = e.pathname.substr(n)),
              (t.subscriptionKey = e.searchParams.get("subscription-key")),
              void 0 === t.subscriptionKey)
            )
              throw new Error(
                "Could not determine subscription key from endpoint"
              );
            return t;
          }),
          (e.fromAppId = function (e) {
            o.Contracts.throwIfNullOrWhitespace(e, "appId");
            var t = new a();
            return (t.appId = e), t;
          }),
          (e.fromSubscription = function (e, t, r) {
            o.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"),
              o.Contracts.throwIfNullOrWhitespace(t, "appId"),
              o.Contracts.throwIfNullOrWhitespace(r, "region");
            var n = new a();
            return (n.appId = t), (n.region = r), (n.subscriptionKey = e), n;
          }),
          e
        );
      })();
    t.LanguageUnderstandingModel = s;
    var a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return i(t, e), t;
    })(s);
    t.LanguageUnderstandingModelImpl = a;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, r, n) || this;
        return (i.privResult = t), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.SpeechRecognitionEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o) {
        var s = e.call(this, i, o) || this;
        return (
          (s.privReason = t), (s.privErrorDetails = r), (s.privErrorCode = n), s
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorCode", {
          get: function () {
            return this.privErrorCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.SpeechRecognitionCanceledEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, r, n) || this;
        return (i.privResult = t), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.TranslationRecognitionEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privResult = t), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SessionEventArgs);
    t.TranslationSynthesisEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o, s, a, c, p) {
        var u = e.call(this, r, n, i, o, s, a, c, p) || this;
        return (u.privTranslations = t), u;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "translations", {
          get: function () {
            return this.privTranslations;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SpeechRecognitionResult);
    t.TranslationRecognitionResult = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t) {
        (this.privReason = e), (this.privAudio = t);
      }
      return (
        Object.defineProperty(e.prototype, "audio", {
          get: function () {
            return this.privAudio;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.TranslationSynthesisResult = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.NoMatch = 0)] = "NoMatch"),
          (e[(e.Canceled = 1)] = "Canceled"),
          (e[(e.RecognizingSpeech = 2)] = "RecognizingSpeech"),
          (e[(e.RecognizedSpeech = 3)] = "RecognizedSpeech"),
          (e[(e.RecognizingIntent = 4)] = "RecognizingIntent"),
          (e[(e.RecognizedIntent = 5)] = "RecognizedIntent"),
          (e[(e.TranslatingSpeech = 6)] = "TranslatingSpeech"),
          (e[(e.TranslatedSpeech = 7)] = "TranslatedSpeech"),
          (e[(e.SynthesizingAudio = 8)] = "SynthesizingAudio"),
          (e[(e.SynthesizingAudioCompleted = 9)] =
            "SynthesizingAudioCompleted"),
          (e[(e.SynthesizingAudioStarted = 10)] = "SynthesizingAudioStarted");
      })(t.ResultReason || (t.ResultReason = {}));
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(31),
      a = r(29),
      c = (function () {
        function e() {}
        return (
          (e.fromSubscription = function (e, t) {
            s.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"),
              s.Contracts.throwIfNullOrWhitespace(t, "region");
            var r = new p();
            return (
              r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t),
              r.setProperty(
                a.PropertyId.SpeechServiceConnection_IntentRegion,
                t
              ),
              r.setProperty(a.PropertyId.SpeechServiceConnection_Key, e),
              r
            );
          }),
          (e.fromEndpoint = function (e, t) {
            s.Contracts.throwIfNull(e, "endpoint");
            var r = new p();
            return (
              r.setProperty(
                a.PropertyId.SpeechServiceConnection_Endpoint,
                e.href
              ),
              void 0 !== t &&
                r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t),
              r
            );
          }),
          (e.fromHost = function (e, t) {
            s.Contracts.throwIfNull(e, "hostName");
            var r = new p();
            return (
              r.setProperty(
                a.PropertyId.SpeechServiceConnection_Host,
                e.protocol +
                  "//" +
                  e.hostname +
                  ("" === e.port ? "" : ":" + e.port)
              ),
              void 0 !== t &&
                r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t),
              r
            );
          }),
          (e.fromAuthorizationToken = function (e, t) {
            s.Contracts.throwIfNull(e, "authorizationToken"),
              s.Contracts.throwIfNullOrWhitespace(t, "region");
            var r = new p();
            return (
              r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t),
              r.setProperty(
                a.PropertyId.SpeechServiceConnection_IntentRegion,
                t
              ),
              (r.authorizationToken = e),
              r
            );
          }),
          (e.prototype.close = function () {}),
          e
        );
      })();
    t.SpeechConfig = c;
    var p = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (
          (t.privProperties = new a.PropertyCollection()),
          (t.speechRecognitionLanguage = "en-US"),
          (t.outputFormat = a.OutputFormat.Simple),
          t
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "endPoint", {
          get: function () {
            return new URL(
              this.privProperties.getProperty(
                a.PropertyId.SpeechServiceConnection_Endpoint
              )
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "subscriptionKey", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_Key
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "region", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_Region
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "authorizationToken", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceAuthorization_Token
            );
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceAuthorization_Token,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_RecoLanguage
            );
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_RecoLanguage,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "outputFormat", {
          get: function () {
            return a.OutputFormat[
              this.privProperties.getProperty(
                o.OutputFormatPropertyName,
                void 0
              )
            ];
          },
          set: function (e) {
            this.privProperties.setProperty(
              o.OutputFormatPropertyName,
              a.OutputFormat[e]
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "endpointId", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_EndpointId
            );
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_EndpointId,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.setProperty = function (e, t) {
          s.Contracts.throwIfNull(t, "value"),
            this.privProperties.setProperty(e, t);
        }),
        (t.prototype.getProperty = function (e, t) {
          return this.privProperties.getProperty(e, t);
        }),
        (t.prototype.setProxy = function (e, t, r, n) {
          this.setProperty(
            a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyHostName],
            e
          ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPort],
              t
            ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyUserName],
              r
            ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPassword],
              n
            );
        }),
        (t.prototype.setServiceProperty = function (e, t, r) {
          var n = JSON.parse(
            this.privProperties.getProperty(
              o.ServicePropertiesPropertyName,
              "{}"
            )
          );
          (n[e] = t),
            this.privProperties.setProperty(
              o.ServicePropertiesPropertyName,
              JSON.stringify(n)
            );
        }),
        (t.prototype.setProfanity = function (e) {
          this.privProperties.setProperty(
            a.PropertyId.SpeechServiceResponse_ProfanityOption,
            a.ProfanityOption[e]
          );
        }),
        (t.prototype.enableAudioLogging = function () {
          this.privProperties.setProperty(
            a.PropertyId.SpeechServiceConnection_EnableAudioLogging,
            "true"
          );
        }),
        (t.prototype.requestWordLevelTimestamps = function () {
          this.privProperties.setProperty(
            a.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps,
            "true"
          );
        }),
        (t.prototype.enableDictation = function () {
          this.privProperties.setProperty(o.ForceDictationPropertyName, "true");
        }),
        (t.prototype.clone = function () {
          var e = new t();
          return (e.privProperties = this.privProperties.clone()), e;
        }),
        Object.defineProperty(t.prototype, "speechSynthesisLanguage", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_SynthLanguage
            );
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthLanguage,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechSynthesisVoiceName", {
          get: function () {
            return this.privProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_SynthVoice
            );
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthVoice,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechSynthesisOutputFormat", {
          get: function () {
            return a.SpeechSynthesisOutputFormat[
              this.privProperties.getProperty(
                a.PropertyId.SpeechServiceConnection_SynthOutputFormat,
                void 0
              )
            ];
          },
          set: function (e) {
            this.privProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthOutputFormat,
              a.SpeechSynthesisOutputFormat[e]
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(c);
    t.SpeechConfigImpl = p;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(31),
      a = r(29),
      c = (function (e) {
        function t() {
          return e.call(this) || this;
        }
        return (
          i(t, e),
          (t.fromSubscription = function (e, t) {
            s.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"),
              s.Contracts.throwIfNullOrWhitespace(t, "region");
            var r = new p();
            return (
              r.properties.setProperty(
                a.PropertyId.SpeechServiceConnection_Key,
                e
              ),
              r.properties.setProperty(
                a.PropertyId.SpeechServiceConnection_Region,
                t
              ),
              r
            );
          }),
          (t.fromAuthorizationToken = function (e, t) {
            s.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"),
              s.Contracts.throwIfNullOrWhitespace(t, "region");
            var r = new p();
            return (
              r.properties.setProperty(
                a.PropertyId.SpeechServiceAuthorization_Token,
                e
              ),
              r.properties.setProperty(
                a.PropertyId.SpeechServiceConnection_Region,
                t
              ),
              r
            );
          }),
          (t.fromHost = function (e, t) {
            s.Contracts.throwIfNull(e, "hostName");
            var r = new p();
            return (
              r.setProperty(
                a.PropertyId.SpeechServiceConnection_Host,
                e.protocol +
                  "//" +
                  e.hostname +
                  ("" === e.port ? "" : ":" + e.port)
              ),
              void 0 !== t &&
                r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t),
              r
            );
          }),
          (t.fromEndpoint = function (e, t) {
            s.Contracts.throwIfNull(e, "endpoint"),
              s.Contracts.throwIfNull(t, "subscriptionKey");
            var r = new p();
            return (
              r.properties.setProperty(
                a.PropertyId.SpeechServiceConnection_Endpoint,
                e.href
              ),
              r.properties.setProperty(
                a.PropertyId.SpeechServiceConnection_Key,
                t
              ),
              r
            );
          }),
          t
        );
      })(a.SpeechConfig);
    t.SpeechTranslationConfig = c;
    var p = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (
          (t.privSpeechProperties = new a.PropertyCollection()),
          (t.outputFormat = a.OutputFormat.Simple),
          t
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "authorizationToken", {
          set: function (e) {
            s.Contracts.throwIfNullOrWhitespace(e, "value"),
              this.privSpeechProperties.setProperty(
                a.PropertyId.SpeechServiceAuthorization_Token,
                e
              );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
          set: function (e) {
            s.Contracts.throwIfNullOrWhitespace(e, "value"),
              this.privSpeechProperties.setProperty(
                a.PropertyId.SpeechServiceConnection_RecoLanguage,
                e
              );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "subscriptionKey", {
          get: function () {
            return this.privSpeechProperties.getProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_Key]
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "outputFormat", {
          get: function () {
            return a.OutputFormat[
              this.privSpeechProperties.getProperty(
                o.OutputFormatPropertyName,
                void 0
              )
            ];
          },
          set: function (e) {
            this.privSpeechProperties.setProperty(
              o.OutputFormatPropertyName,
              a.OutputFormat[e]
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "endpointId", {
          get: function () {
            return this.privSpeechProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_EndpointId
            );
          },
          set: function (e) {
            this.privSpeechProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_EndpointId,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.addTargetLanguage = function (e) {
          s.Contracts.throwIfNullOrWhitespace(e, "value");
          var t = this.targetLanguages;
          t.push(e),
            this.privSpeechProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_TranslationToLanguages,
              t.join(",")
            );
        }),
        Object.defineProperty(t.prototype, "targetLanguages", {
          get: function () {
            return void 0 !==
              this.privSpeechProperties.getProperty(
                a.PropertyId.SpeechServiceConnection_TranslationToLanguages,
                void 0
              )
              ? this.privSpeechProperties
                  .getProperty(
                    a.PropertyId.SpeechServiceConnection_TranslationToLanguages
                  )
                  .split(",")
              : [];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "voiceName", {
          get: function () {
            return this.getProperty(
              a.PropertyId[
                a.PropertyId.SpeechServiceConnection_TranslationVoice
              ]
            );
          },
          set: function (e) {
            s.Contracts.throwIfNullOrWhitespace(e, "value"),
              this.privSpeechProperties.setProperty(
                a.PropertyId.SpeechServiceConnection_TranslationVoice,
                e
              );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "region", {
          get: function () {
            return this.privSpeechProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_Region
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.setProxy = function (e, t, r, n) {
          this.setProperty(
            a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyHostName],
            e
          ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPort],
              t
            ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyUserName],
              r
            ),
            this.setProperty(
              a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPassword],
              n
            );
        }),
        (t.prototype.getProperty = function (e, t) {
          return this.privSpeechProperties.getProperty(e, t);
        }),
        (t.prototype.setProperty = function (e, t) {
          this.privSpeechProperties.setProperty(e, t);
        }),
        Object.defineProperty(t.prototype, "properties", {
          get: function () {
            return this.privSpeechProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.close = function () {}),
        (t.prototype.setServiceProperty = function (e, t, r) {
          var n = JSON.parse(
            this.privSpeechProperties.getProperty(
              o.ServicePropertiesPropertyName,
              "{}"
            )
          );
          (n[e] = t),
            this.privSpeechProperties.setProperty(
              o.ServicePropertiesPropertyName,
              JSON.stringify(n)
            );
        }),
        (t.prototype.setProfanity = function (e) {
          this.privSpeechProperties.setProperty(
            a.PropertyId.SpeechServiceResponse_ProfanityOption,
            a.ProfanityOption[e]
          );
        }),
        (t.prototype.enableAudioLogging = function () {
          this.privSpeechProperties.setProperty(
            a.PropertyId.SpeechServiceConnection_EnableAudioLogging,
            "true"
          );
        }),
        (t.prototype.requestWordLevelTimestamps = function () {
          this.privSpeechProperties.setProperty(
            a.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps,
            "true"
          );
        }),
        (t.prototype.enableDictation = function () {
          this.privSpeechProperties.setProperty(
            o.ForceDictationPropertyName,
            "true"
          );
        }),
        Object.defineProperty(t.prototype, "speechSynthesisLanguage", {
          get: function () {
            return this.privSpeechProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_SynthLanguage
            );
          },
          set: function (e) {
            this.privSpeechProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthLanguage,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechSynthesisVoiceName", {
          get: function () {
            return this.privSpeechProperties.getProperty(
              a.PropertyId.SpeechServiceConnection_SynthVoice
            );
          },
          set: function (e) {
            this.privSpeechProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthVoice,
              e
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechSynthesisOutputFormat", {
          get: function () {
            return a.SpeechSynthesisOutputFormat[
              this.privSpeechProperties.getProperty(
                a.PropertyId.SpeechServiceConnection_SynthOutputFormat,
                void 0
              )
            ];
          },
          set: function (e) {
            this.privSpeechProperties.setProperty(
              a.PropertyId.SpeechServiceConnection_SynthOutputFormat,
              a.SpeechSynthesisOutputFormat[e]
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(c);
    t.SpeechTranslationConfigImpl = p;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(29),
      i = (function () {
        function e() {
          (this.privKeys = []), (this.privValues = []);
        }
        return (
          (e.prototype.getProperty = function (e, t) {
            var r;
            r = "string" == typeof e ? e : n.PropertyId[e];
            for (var i = 0; i < this.privKeys.length; i++)
              if (this.privKeys[i] === r) return this.privValues[i];
            return t;
          }),
          (e.prototype.setProperty = function (e, t) {
            var r;
            r = "string" == typeof e ? e : n.PropertyId[e];
            for (var i = 0; i < this.privKeys.length; i++)
              if (this.privKeys[i] === r) return void (this.privValues[i] = t);
            this.privKeys.push(r), this.privValues.push(t);
          }),
          (e.prototype.clone = function () {
            for (var t = new e(), r = 0; r < this.privKeys.length; r++)
              t.privKeys.push(this.privKeys[r]),
                t.privValues.push(this.privValues[r]);
            return t;
          }),
          e
        );
      })();
    t.PropertyCollection = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.SpeechServiceConnection_Key = 0)] =
          "SpeechServiceConnection_Key"),
          (e[(e.SpeechServiceConnection_Endpoint = 1)] =
            "SpeechServiceConnection_Endpoint"),
          (e[(e.SpeechServiceConnection_Region = 2)] =
            "SpeechServiceConnection_Region"),
          (e[(e.SpeechServiceAuthorization_Token = 3)] =
            "SpeechServiceAuthorization_Token"),
          (e[(e.SpeechServiceAuthorization_Type = 4)] =
            "SpeechServiceAuthorization_Type"),
          (e[(e.SpeechServiceConnection_EndpointId = 5)] =
            "SpeechServiceConnection_EndpointId"),
          (e[(e.SpeechServiceConnection_TranslationToLanguages = 6)] =
            "SpeechServiceConnection_TranslationToLanguages"),
          (e[(e.SpeechServiceConnection_TranslationVoice = 7)] =
            "SpeechServiceConnection_TranslationVoice"),
          (e[(e.SpeechServiceConnection_TranslationFeatures = 8)] =
            "SpeechServiceConnection_TranslationFeatures"),
          (e[(e.SpeechServiceConnection_IntentRegion = 9)] =
            "SpeechServiceConnection_IntentRegion"),
          (e[(e.SpeechServiceConnection_ProxyHostName = 10)] =
            "SpeechServiceConnection_ProxyHostName"),
          (e[(e.SpeechServiceConnection_ProxyPort = 11)] =
            "SpeechServiceConnection_ProxyPort"),
          (e[(e.SpeechServiceConnection_ProxyUserName = 12)] =
            "SpeechServiceConnection_ProxyUserName"),
          (e[(e.SpeechServiceConnection_ProxyPassword = 13)] =
            "SpeechServiceConnection_ProxyPassword"),
          (e[(e.SpeechServiceConnection_RecoMode = 14)] =
            "SpeechServiceConnection_RecoMode"),
          (e[(e.SpeechServiceConnection_RecoLanguage = 15)] =
            "SpeechServiceConnection_RecoLanguage"),
          (e[(e.Speech_SessionId = 16)] = "Speech_SessionId"),
          (e[(e.SpeechServiceConnection_SynthLanguage = 17)] =
            "SpeechServiceConnection_SynthLanguage"),
          (e[(e.SpeechServiceConnection_SynthVoice = 18)] =
            "SpeechServiceConnection_SynthVoice"),
          (e[(e.SpeechServiceConnection_SynthOutputFormat = 19)] =
            "SpeechServiceConnection_SynthOutputFormat"),
          (e[(e.SpeechServiceResponse_RequestDetailedResultTrueFalse = 20)] =
            "SpeechServiceResponse_RequestDetailedResultTrueFalse"),
          (e[(e.SpeechServiceResponse_RequestProfanityFilterTrueFalse = 21)] =
            "SpeechServiceResponse_RequestProfanityFilterTrueFalse"),
          (e[(e.SpeechServiceResponse_JsonResult = 22)] =
            "SpeechServiceResponse_JsonResult"),
          (e[(e.SpeechServiceResponse_JsonErrorDetails = 23)] =
            "SpeechServiceResponse_JsonErrorDetails"),
          (e[(e.CancellationDetails_Reason = 24)] =
            "CancellationDetails_Reason"),
          (e[(e.CancellationDetails_ReasonText = 25)] =
            "CancellationDetails_ReasonText"),
          (e[(e.CancellationDetails_ReasonDetailedText = 26)] =
            "CancellationDetails_ReasonDetailedText"),
          (e[(e.LanguageUnderstandingServiceResponse_JsonResult = 27)] =
            "LanguageUnderstandingServiceResponse_JsonResult"),
          (e[(e.SpeechServiceConnection_Url = 28)] =
            "SpeechServiceConnection_Url"),
          (e[(e.SpeechServiceConnection_InitialSilenceTimeoutMs = 29)] =
            "SpeechServiceConnection_InitialSilenceTimeoutMs"),
          (e[(e.SpeechServiceConnection_EndSilenceTimeoutMs = 30)] =
            "SpeechServiceConnection_EndSilenceTimeoutMs"),
          (e[(e.SpeechServiceConnection_EnableAudioLogging = 31)] =
            "SpeechServiceConnection_EnableAudioLogging"),
          (e[(e.SpeechServiceResponse_ProfanityOption = 32)] =
            "SpeechServiceResponse_ProfanityOption"),
          (e[(e.SpeechServiceResponse_PostProcessingOption = 33)] =
            "SpeechServiceResponse_PostProcessingOption"),
          (e[(e.SpeechServiceResponse_RequestWordLevelTimestamps = 34)] =
            "SpeechServiceResponse_RequestWordLevelTimestamps"),
          (e[(e.SpeechServiceResponse_StablePartialResultThreshold = 35)] =
            "SpeechServiceResponse_StablePartialResultThreshold"),
          (e[(e.SpeechServiceResponse_OutputFormatOption = 36)] =
            "SpeechServiceResponse_OutputFormatOption"),
          (e[
            (e.SpeechServiceResponse_TranslationRequestStablePartialResult = 37)
          ] = "SpeechServiceResponse_TranslationRequestStablePartialResult"),
          (e[(e.Conversation_ApplicationId = 38)] =
            "Conversation_ApplicationId"),
          (e[(e.Conversation_DialogType = 39)] = "Conversation_DialogType"),
          (e[(e.Conversation_Initial_Silence_Timeout = 40)] =
            "Conversation_Initial_Silence_Timeout"),
          (e[(e.Conversation_From_Id = 41)] = "Conversation_From_Id"),
          (e[(e.Conversation_Conversation_Id = 42)] =
            "Conversation_Conversation_Id"),
          (e[(e.Conversation_Custom_Voice_Deployment_Ids = 43)] =
            "Conversation_Custom_Voice_Deployment_Ids"),
          (e[(e.Conversation_Speech_Activity_Template = 44)] =
            "Conversation_Speech_Activity_Template"),
          (e[(e.SpeechServiceConnection_Host = 45)] =
            "SpeechServiceConnection_Host"),
          (e[(e.ConversationTranslator_Host = 46)] =
            "ConversationTranslator_Host"),
          (e[(e.ConversationTranslator_Name = 47)] =
            "ConversationTranslator_Name"),
          (e[(e.ConversationTranslator_CorrelationId = 48)] =
            "ConversationTranslator_CorrelationId"),
          (e[(e.ConversationTranslator_Token = 49)] =
            "ConversationTranslator_Token");
      })(t.PropertyId || (t.PropertyId = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(4),
      o = r(31),
      s = r(29),
      a = (function () {
        function e(e, t, r) {
          (this.audioConfig =
            void 0 !== e ? e : s.AudioConfig.fromDefaultMicrophoneInput()),
            (this.privDisposed = !1),
            (this.privProperties = t.clone()),
            (this.privConnectionFactory = r),
            this.implCommonRecognizerSetup();
        }
        return (
          (e.prototype.close = function () {
            o.Contracts.throwIfDisposed(this.privDisposed), this.dispose(!0);
          }),
          Object.defineProperty(e.prototype, "internalData", {
            get: function () {
              return this.privReco;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.dispose = function (e) {
            this.privDisposed ||
              (e &&
                this.privReco &&
                (this.privReco.audioSource.turnOff(), this.privReco.dispose()),
              (this.privDisposed = !0));
          }),
          Object.defineProperty(e, "telemetryEnabled", {
            get: function () {
              return n.ServiceRecognizerBase.telemetryDataEnabled;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.enableTelemetry = function (e) {
            n.ServiceRecognizerBase.telemetryDataEnabled = e;
          }),
          (e.prototype.implCommonRecognizerSetup = function () {
            var e = this,
              t = "undefined" != typeof window ? "Browser" : "Node",
              r = "unknown",
              o = "unknown";
            "undefined" != typeof navigator &&
              ((t = t + "/" + navigator.platform),
              (r = navigator.userAgent),
              (o = navigator.appVersion));
            var a = this.createRecognizerConfig(
                new n.SpeechServiceConfig(new n.Context(new n.OS(t, r, o)))
              ),
              c = this.privProperties.getProperty(
                s.PropertyId.SpeechServiceConnection_Key,
                void 0
              ),
              p =
                c && "" !== c
                  ? new n.CognitiveSubscriptionKeyAuthentication(c)
                  : new n.CognitiveTokenAuthentication(
                      function (t) {
                        var r = e.privProperties.getProperty(
                          s.PropertyId.SpeechServiceAuthorization_Token,
                          void 0
                        );
                        return i.PromiseHelper.fromResult(r);
                      },
                      function (t) {
                        var r = e.privProperties.getProperty(
                          s.PropertyId.SpeechServiceAuthorization_Token,
                          void 0
                        );
                        return i.PromiseHelper.fromResult(r);
                      }
                    );
            this.privReco = this.createServiceRecognizer(
              p,
              this.privConnectionFactory,
              this.audioConfig,
              a
            );
          }),
          (e.prototype.recognizeOnceAsyncImpl = function (e, t, r) {
            var n = this;
            try {
              o.Contracts.throwIfDisposed(this.privDisposed),
                this.implRecognizerStop().on(
                  function (i) {
                    try {
                      n.privReco
                        .recognize(
                          e,
                          function (e) {
                            n.implRecognizerStop().on(
                              function (r) {
                                t && t(e);
                              },
                              function (e) {
                                r && r(e);
                              }
                            );
                          },
                          function (e) {
                            n.implRecognizerStop(), r && r(e);
                          }
                        )
                        .on(
                          function (e) {},
                          function (e) {
                            r && r(e);
                          }
                        );
                    } catch (e) {
                      if (r)
                        if (e instanceof Error) {
                          var o = e;
                          r(o.name + ": " + o.message);
                        } else r(e);
                      n.dispose(!0);
                    }
                  },
                  function (e) {
                    r && r(e);
                  }
                );
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (e.prototype.startContinuousRecognitionAsyncImpl = function (
            e,
            t,
            r
          ) {
            var n = this;
            try {
              o.Contracts.throwIfDisposed(this.privDisposed),
                this.implRecognizerStop().on(
                  function (i) {
                    n.privReco.recognize(e, void 0, void 0).on(
                      function (e) {
                        if (t) {
                          try {
                            t();
                          } catch (e) {
                            r && r(e);
                          }
                          t = void 0;
                        }
                      },
                      function (e) {
                        r && r(e), n.dispose(!0);
                      }
                    );
                  },
                  function (e) {
                    r && r(e), n.dispose(!0);
                  }
                );
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (e.prototype.stopContinuousRecognitionAsyncImpl = function (e, t) {
            try {
              o.Contracts.throwIfDisposed(this.privDisposed),
                this.implRecognizerStop().on(
                  function (r) {
                    if (e)
                      try {
                        e();
                      } catch (e) {
                        t && t(e);
                      }
                  },
                  function (e) {
                    t && t(e);
                  }
                );
            } catch (e) {
              if (t)
                if (e instanceof Error) {
                  var r = e;
                  t(r.name + ": " + r.message);
                } else t(e);
              this.dispose(!0);
            }
          }),
          (e.prototype.implRecognizerStop = function () {
            return this.privReco
              ? this.privReco.stopRecognizing()
              : i.PromiseHelper.fromResult(!0);
          }),
          e
        );
      })();
    t.Recognizer = a;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(64),
      a = r(31),
      c = r(29),
      p = (function (e) {
        function t(t, r) {
          var n = this,
            i = t;
          return (
            a.Contracts.throwIfNull(i, "speechConfig"),
            a.Contracts.throwIfNullOrWhitespace(
              i.properties.getProperty(
                c.PropertyId.SpeechServiceConnection_RecoLanguage
              ),
              c.PropertyId[c.PropertyId.SpeechServiceConnection_RecoLanguage]
            ),
            ((n =
              e.call(this, r, i.properties, new s.SpeechConnectionFactory()) ||
              this).privDisposedSpeechRecognizer = !1),
            n
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "endpointId", {
            get: function () {
              return (
                a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer),
                this.properties.getProperty(
                  c.PropertyId.SpeechServiceConnection_EndpointId,
                  "00000000-0000-0000-0000-000000000000"
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "authorizationToken", {
            get: function () {
              return this.properties.getProperty(
                c.PropertyId.SpeechServiceAuthorization_Token
              );
            },
            set: function (e) {
              a.Contracts.throwIfNullOrWhitespace(e, "token"),
                this.properties.setProperty(
                  c.PropertyId.SpeechServiceAuthorization_Token,
                  e
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
              return (
                a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer),
                this.properties.getProperty(
                  c.PropertyId.SpeechServiceConnection_RecoLanguage
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "outputFormat", {
            get: function () {
              return (
                a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer),
                this.properties.getProperty(
                  o.OutputFormatPropertyName,
                  c.OutputFormat[c.OutputFormat.Simple]
                ) === c.OutputFormat[c.OutputFormat.Simple]
                  ? c.OutputFormat.Simple
                  : c.OutputFormat.Detailed
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.recognizeOnceAsync = function (e, t) {
            this.recognizeOnceAsyncImpl(o.RecognitionMode.Interactive, e, t);
          }),
          (t.prototype.startContinuousRecognitionAsync = function (e, t) {
            this.startContinuousRecognitionAsyncImpl(
              o.RecognitionMode.Conversation,
              e,
              t
            );
          }),
          (t.prototype.stopContinuousRecognitionAsync = function (e, t) {
            this.stopContinuousRecognitionAsyncImpl(e, t);
          }),
          (t.prototype.startKeywordRecognitionAsync = function (e, t, r) {
            a.Contracts.throwIfNull(e, "model"), r && r("Not yet implemented.");
          }),
          (t.prototype.stopKeywordRecognitionAsync = function (e, t) {
            e && e();
          }),
          (t.prototype.close = function () {
            a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer),
              this.dispose(!0);
          }),
          (t.prototype.dispose = function (t) {
            this.privDisposedSpeechRecognizer ||
              (t &&
                (this.implRecognizerStop(),
                (this.privDisposedSpeechRecognizer = !0)),
              e.prototype.dispose.call(this, t));
          }),
          (t.prototype.createRecognizerConfig = function (e) {
            return new o.RecognizerConfig(e, this.properties);
          }),
          (t.prototype.createServiceRecognizer = function (e, t, r, n) {
            var i = r;
            return new o.SpeechServiceRecognizer(e, t, i, n, this);
          }),
          t
        );
      })(c.Recognizer);
    t.SpeechRecognizer = p;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(24),
      a = r(29),
      c = r(65),
      p = r(24),
      u = r(66),
      v = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.interactiveRelativeUri =
              "/speech/recognition/interactive/cognitiveservices/v1"),
            (t.conversationRelativeUri =
              "/speech/recognition/conversation/cognitiveservices/v1"),
            (t.dictationRelativeUri =
              "/speech/recognition/dictation/cognitiveservices/v1"),
            (t.create = function (e, r, n) {
              var i = e.parameters.getProperty(
                  a.PropertyId.SpeechServiceConnection_Endpoint,
                  void 0
                ),
                c = e.parameters.getProperty(
                  a.PropertyId.SpeechServiceConnection_Region,
                  void 0
                ),
                v =
                  c && c.toLowerCase().startsWith("china")
                    ? ".azure.cn"
                    : ".microsoft.com",
                f = e.parameters.getProperty(
                  a.PropertyId.SpeechServiceConnection_Host,
                  "wss://" + c + ".stt.speech" + v
                ),
                h = {},
                l = e.parameters.getProperty(
                  a.PropertyId.SpeechServiceConnection_EndpointId,
                  void 0
                ),
                d = e.parameters.getProperty(
                  a.PropertyId.SpeechServiceConnection_RecoLanguage,
                  void 0
                );
              if (
                (l
                  ? (i &&
                      -1 !==
                        i.search(
                          u.QueryParameterNames.DeploymentIdParamName
                        )) ||
                    (h[u.QueryParameterNames.DeploymentIdParamName] = l)
                  : d &&
                    ((i &&
                      -1 !==
                        i.search(u.QueryParameterNames.LanguageParamName)) ||
                      (h[u.QueryParameterNames.LanguageParamName] = d)),
                (i && -1 !== i.search(u.QueryParameterNames.FormatParamName)) ||
                  (h[u.QueryParameterNames.FormatParamName] = e.parameters
                    .getProperty(
                      s.OutputFormatPropertyName,
                      a.OutputFormat[a.OutputFormat.Simple]
                    )
                    .toLowerCase()),
                t.setCommonUrlParams(e, h, i),
                !i)
              )
                switch (e.recognitionMode) {
                  case p.RecognitionMode.Conversation:
                    i =
                      "true" ===
                      e.parameters.getProperty(
                        s.ForceDictationPropertyName,
                        "false"
                      )
                        ? f + t.dictationRelativeUri
                        : f + t.conversationRelativeUri;
                    break;
                  case p.RecognitionMode.Dictation:
                    i = f + t.dictationRelativeUri;
                    break;
                  default:
                    i = f + t.interactiveRelativeUri;
                }
              var g = {};
              return (
                void 0 !== r.token &&
                  "" !== r.token &&
                  (g[r.headerName] = r.token),
                (g[u.QueryParameterNames.ConnectionIdHeader] = n),
                e.parameters.setProperty(
                  a.PropertyId.SpeechServiceConnection_Url,
                  i
                ),
                new o.WebsocketConnection(
                  i,
                  h,
                  g,
                  new p.WebsocketMessageFormatter(),
                  o.ProxyInfo.fromRecognizerConfig(e),
                  n
                )
              );
            }),
            t
          );
        }
        return i(t, e), t;
      })(c.ConnectionFactoryBase);
    t.SpeechConnectionFactory = v;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(29),
      o = r(66),
      s = (function () {
        function e() {}
        return (
          (e.prototype.setCommonUrlParams = function (e, t, r) {
            this.setUrlParameter(
              i.PropertyId.SpeechServiceConnection_EnableAudioLogging,
              o.QueryParameterNames.EnableAudioLogging,
              e,
              t,
              r
            ),
              this.setUrlParameter(
                i.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps,
                o.QueryParameterNames.EnableWordLevelTimestamps,
                e,
                t,
                r
              ),
              this.setUrlParameter(
                i.PropertyId.SpeechServiceResponse_ProfanityOption,
                o.QueryParameterNames.Profanify,
                e,
                t,
                r
              ),
              this.setUrlParameter(
                i.PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs,
                o.QueryParameterNames.InitialSilenceTimeoutMs,
                e,
                t,
                r
              ),
              this.setUrlParameter(
                i.PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs,
                o.QueryParameterNames.EndSilenceTimeoutMs,
                e,
                t,
                r
              ),
              this.setUrlParameter(
                i.PropertyId.SpeechServiceResponse_StablePartialResultThreshold,
                o.QueryParameterNames.StableIntermediateThreshold,
                e,
                t,
                r
              );
            var s = JSON.parse(
              e.parameters.getProperty(n.ServicePropertiesPropertyName, "{}")
            );
            Object.keys(s).forEach(function (e, r, n) {
              t[e] = s[e];
            });
          }),
          (e.prototype.setUrlParameter = function (e, t, r, n, i) {
            var o = r.parameters.getProperty(e, void 0);
            !o || (i && -1 !== i.search(t)) || (n[t] = o.toLocaleLowerCase());
          }),
          e
        );
      })();
    t.ConnectionFactoryBase = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        Object.defineProperty(e, "TestHooksParamName", {
          get: function () {
            return "testhooks";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "ConnectionIdHeader", {
          get: function () {
            return "X-ConnectionId";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "DeploymentIdParamName", {
          get: function () {
            return "cid";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "FormatParamName", {
          get: function () {
            return "format";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "LanguageParamName", {
          get: function () {
            return "language";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "TranslationFromParamName", {
          get: function () {
            return "from";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "TranslationToParamName", {
          get: function () {
            return "to";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "Profanify", {
          get: function () {
            return "profanity";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "EnableAudioLogging", {
          get: function () {
            return "storeAudio";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "EnableWordLevelTimestamps", {
          get: function () {
            return "wordLevelTimestamps";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "InitialSilenceTimeoutMs", {
          get: function () {
            return "initialSilenceTimeoutMs";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "EndSilenceTimeoutMs", {
          get: function () {
            return "endSilenceTimeoutMs";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "StableIntermediateThreshold", {
          get: function () {
            return "stableIntermediateThreshold";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "StableTranslation", {
          get: function () {
            return "stableTranslation";
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.QueryParameterNames = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(31),
      a = r(29),
      c = (function (e) {
        function t(t, r) {
          var n = this;
          s.Contracts.throwIfNullOrUndefined(t, "speechConfig");
          var i = t;
          return (
            s.Contracts.throwIfNullOrUndefined(i, "speechConfig"),
            ((n =
              e.call(this, r, i.properties, new o.IntentConnectionFactory()) ||
              this).privAddedIntents = []),
            (n.privAddedLmIntents = {}),
            (n.privDisposedIntentRecognizer = !1),
            (n.privProperties = i.properties),
            s.Contracts.throwIfNullOrWhitespace(
              n.properties.getProperty(
                a.PropertyId.SpeechServiceConnection_RecoLanguage
              ),
              a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]
            ),
            n
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
              return (
                s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer),
                this.properties.getProperty(
                  a.PropertyId.SpeechServiceConnection_RecoLanguage
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "authorizationToken", {
            get: function () {
              return this.properties.getProperty(
                a.PropertyId.SpeechServiceAuthorization_Token
              );
            },
            set: function (e) {
              this.properties.setProperty(
                a.PropertyId.SpeechServiceAuthorization_Token,
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.recognizeOnceAsync = function (e, t) {
            if (
              (s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer),
              0 !== Object.keys(this.privAddedLmIntents).length ||
                void 0 !== this.privUmbrellaIntent)
            ) {
              var r = this.buildSpeechContext();
              this.privReco.speechContext.setSection("intent", r.Intent),
                this.privReco.dynamicGrammar.addReferenceGrammar(
                  r.ReferenceGrammars
                ),
                this.privReco.setIntents(
                  this.privAddedLmIntents,
                  this.privUmbrellaIntent
                );
            }
            this.recognizeOnceAsyncImpl(o.RecognitionMode.Interactive, e, t);
          }),
          (t.prototype.startContinuousRecognitionAsync = function (e, t) {
            if (0 !== Object.keys(this.privAddedLmIntents).length) {
              var r = this.buildSpeechContext();
              this.privReco.speechContext.setSection("intent", r.Intent),
                this.privReco.dynamicGrammar.addReferenceGrammar(
                  r.ReferenceGrammars
                ),
                this.privReco.setIntents(
                  this.privAddedLmIntents,
                  this.privUmbrellaIntent
                );
            }
            this.startContinuousRecognitionAsyncImpl(
              o.RecognitionMode.Conversation,
              e,
              t
            );
          }),
          (t.prototype.stopContinuousRecognitionAsync = function (e, t) {
            this.stopContinuousRecognitionAsyncImpl(e, t);
          }),
          (t.prototype.startKeywordRecognitionAsync = function (e, t, r) {
            s.Contracts.throwIfNull(e, "model"), r && r("Not yet implemented.");
          }),
          (t.prototype.stopKeywordRecognitionAsync = function (e, t) {
            e && e();
          }),
          (t.prototype.addIntent = function (e, t) {
            s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer),
              s.Contracts.throwIfNullOrWhitespace(t, "intentId"),
              s.Contracts.throwIfNullOrWhitespace(e, "simplePhrase"),
              this.privAddedIntents.push([t, e]);
          }),
          (t.prototype.addIntentWithLanguageModel = function (e, t, r) {
            s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer),
              s.Contracts.throwIfNullOrWhitespace(e, "intentId"),
              s.Contracts.throwIfNull(t, "model");
            var n = t;
            s.Contracts.throwIfNullOrWhitespace(n.appId, "model.appId"),
              (this.privAddedLmIntents[e] = new o.AddedLmIntent(n, r));
          }),
          (t.prototype.addAllIntents = function (e, t) {
            s.Contracts.throwIfNull(e, "model");
            var r = e;
            s.Contracts.throwIfNullOrWhitespace(r.appId, "model.appId"),
              (this.privUmbrellaIntent = new o.AddedLmIntent(r, t));
          }),
          (t.prototype.close = function () {
            s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer),
              this.dispose(!0);
          }),
          (t.prototype.createRecognizerConfig = function (e) {
            return new o.RecognizerConfig(e, this.properties);
          }),
          (t.prototype.createServiceRecognizer = function (e, t, r, n) {
            var i = r;
            return new o.IntentServiceRecognizer(e, t, i, n, this);
          }),
          (t.prototype.dispose = function (t) {
            this.privDisposedIntentRecognizer ||
              (t &&
                ((this.privDisposedIntentRecognizer = !0),
                e.prototype.dispose.call(this, t)));
          }),
          (t.prototype.buildSpeechContext = function () {
            var e,
              t,
              r,
              n = [];
            void 0 !== this.privUmbrellaIntent &&
              ((e = this.privUmbrellaIntent.modelImpl.appId),
              (t = this.privUmbrellaIntent.modelImpl.region),
              (r = this.privUmbrellaIntent.modelImpl.subscriptionKey));
            for (
              var i = 0, o = Object.keys(this.privAddedLmIntents);
              i < o.length;
              i++
            ) {
              var s = o[i],
                c = this.privAddedLmIntents[s];
              if (void 0 === e) e = c.modelImpl.appId;
              else if (e !== c.modelImpl.appId)
                throw new Error("Intents must all be from the same LUIS model");
              if (void 0 === t) t = c.modelImpl.region;
              else if (t !== c.modelImpl.region)
                throw new Error(
                  "Intents must all be from the same LUIS model in a single region"
                );
              if (void 0 === r) r = c.modelImpl.subscriptionKey;
              else if (r !== c.modelImpl.subscriptionKey)
                throw new Error(
                  "Intents must all use the same subscription key"
                );
              var p = "luis/" + e + "-PRODUCTION#" + s;
              n.push(p);
            }
            return {
              Intent: {
                id: e,
                key:
                  void 0 === r
                    ? this.privProperties.getProperty(
                        a.PropertyId[a.PropertyId.SpeechServiceConnection_Key]
                      )
                    : r,
                provider: "LUIS",
              },
              ReferenceGrammars:
                void 0 === this.privUmbrellaIntent
                  ? n
                  : ["luis/" + e + "-PRODUCTION"],
            };
          }),
          t
        );
      })(a.Recognizer);
    t.IntentRecognizer = c;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(31),
      a = r(29),
      c = (function (e) {
        function t(t, r) {
          var n = this,
            i = t;
          return (
            s.Contracts.throwIfNull(i, "speechConfig"),
            ((n =
              e.call(
                this,
                r,
                i.properties,
                new o.TranslationConnectionFactory()
              ) || this).privDisposedTranslationRecognizer = !1),
            (n.privProperties = i.properties.clone()),
            void 0 !==
              n.properties.getProperty(
                a.PropertyId.SpeechServiceConnection_TranslationVoice,
                void 0
              ) &&
              s.Contracts.throwIfNullOrWhitespace(
                n.properties.getProperty(
                  a.PropertyId.SpeechServiceConnection_TranslationVoice
                ),
                a.PropertyId[
                  a.PropertyId.SpeechServiceConnection_TranslationVoice
                ]
              ),
            s.Contracts.throwIfNullOrWhitespace(
              n.properties.getProperty(
                a.PropertyId.SpeechServiceConnection_TranslationToLanguages
              ),
              a.PropertyId[
                a.PropertyId.SpeechServiceConnection_TranslationToLanguages
              ]
            ),
            s.Contracts.throwIfNullOrWhitespace(
              n.properties.getProperty(
                a.PropertyId.SpeechServiceConnection_RecoLanguage
              ),
              a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]
            ),
            n
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
              return (
                s.Contracts.throwIfDisposed(
                  this.privDisposedTranslationRecognizer
                ),
                this.properties.getProperty(
                  a.PropertyId.SpeechServiceConnection_RecoLanguage
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "targetLanguages", {
            get: function () {
              return (
                s.Contracts.throwIfDisposed(
                  this.privDisposedTranslationRecognizer
                ),
                this.properties
                  .getProperty(
                    a.PropertyId.SpeechServiceConnection_TranslationToLanguages
                  )
                  .split(",")
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "voiceName", {
            get: function () {
              return (
                s.Contracts.throwIfDisposed(
                  this.privDisposedTranslationRecognizer
                ),
                this.properties.getProperty(
                  a.PropertyId.SpeechServiceConnection_TranslationVoice,
                  void 0
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "authorizationToken", {
            get: function () {
              return this.properties.getProperty(
                a.PropertyId.SpeechServiceAuthorization_Token
              );
            },
            set: function (e) {
              this.properties.setProperty(
                a.PropertyId.SpeechServiceAuthorization_Token,
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.recognizeOnceAsync = function (e, t) {
            s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer),
              this.recognizeOnceAsyncImpl(o.RecognitionMode.Conversation, e, t);
          }),
          (t.prototype.startContinuousRecognitionAsync = function (e, t) {
            this.startContinuousRecognitionAsyncImpl(
              o.RecognitionMode.Conversation,
              e,
              t
            );
          }),
          (t.prototype.stopContinuousRecognitionAsync = function (e, t) {
            this.stopContinuousRecognitionAsyncImpl(e, t);
          }),
          (t.prototype.close = function () {
            s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer),
              this.dispose(!0);
          }),
          (t.prototype.dispose = function (t) {
            this.privDisposedTranslationRecognizer ||
              (t &&
                (this.implRecognizerStop(),
                (this.privDisposedTranslationRecognizer = !0),
                e.prototype.dispose.call(this, t)));
          }),
          (t.prototype.createRecognizerConfig = function (e) {
            return new o.RecognizerConfig(e, this.properties);
          }),
          (t.prototype.createServiceRecognizer = function (e, t, r, n) {
            var i = r;
            return new o.TranslationServiceRecognizer(e, t, i, n, this);
          }),
          t
        );
      })(a.Recognizer);
    t.TranslationRecognizer = c;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(29),
      i = (function () {
        function e() {
          this.privMap = new n.PropertyCollection();
        }
        return (
          (e.prototype.get = function (e, t) {
            return this.privMap.getProperty(e, t);
          }),
          (e.prototype.set = function (e, t) {
            this.privMap.setProperty(e, t);
          }),
          e
        );
      })();
    t.Translations = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.NotRecognized = 0)] = "NotRecognized"),
          (e[(e.InitialSilenceTimeout = 1)] = "InitialSilenceTimeout"),
          (e[(e.InitialBabbleTimeout = 2)] = "InitialBabbleTimeout");
      })(t.NoMatchReason || (t.NoMatchReason = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(29),
      o = (function () {
        function e(e) {
          this.privReason = e;
        }
        return (
          (e.fromResult = function (t) {
            var r = n.SimpleSpeechPhrase.fromJSON(t.json),
              o = i.NoMatchReason.NotRecognized;
            switch (r.RecognitionStatus) {
              case n.RecognitionStatus.BabbleTimeout:
                o = i.NoMatchReason.InitialBabbleTimeout;
                break;
              case n.RecognitionStatus.InitialSilenceTimeout:
                o = i.NoMatchReason.InitialSilenceTimeout;
                break;
              default:
                o = i.NoMatchReason.NotRecognized;
            }
            return new e(o);
          }),
          Object.defineProperty(e.prototype, "reason", {
            get: function () {
              return this.privReason;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.NoMatchDetails = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t, r, n, i) {
        (this.privCancelReason = t),
          (this.privErrorDetails = r),
          (this.privResult = i),
          (this.privSessionId = e),
          (this.privErrorCode = n);
      }
      return (
        Object.defineProperty(e.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "sessionId", {
          get: function () {
            return this.privSessionId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "reason", {
          get: function () {
            return this.privCancelReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "errorCode", {
          get: function () {
            return this.privErrorCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.TranslationRecognitionCanceledEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o, s) {
        var a = e.call(this, i, o, s) || this;
        return (
          (a.privReason = t), (a.privErrorDetails = r), (a.privErrorCode = n), a
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorCode", {
          get: function () {
            return this.privErrorCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).IntentRecognitionEventArgs);
    t.IntentRecognitionCanceledEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(29),
      o = (function () {
        function e(e, t, r) {
          (this.privReason = e),
            (this.privErrorDetails = t),
            (this.privErrorCode = r);
        }
        return (
          (e.fromResult = function (t) {
            var r = i.CancellationReason.Error,
              o = i.CancellationErrorCode.NoError;
            if (t instanceof i.RecognitionResult && t.json) {
              var s = n.SimpleSpeechPhrase.fromJSON(t.json);
              r = n.EnumTranslation.implTranslateCancelResult(
                s.RecognitionStatus
              );
            }
            return (
              t.properties &&
                (o =
                  i.CancellationErrorCode[
                    t.properties.getProperty(
                      n.CancellationErrorCodePropertyName,
                      i.CancellationErrorCode[i.CancellationErrorCode.NoError]
                    )
                  ]),
              new e(r, t.errorDetails, o)
            );
          }),
          Object.defineProperty(e.prototype, "reason", {
            get: function () {
              return this.privReason;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "errorDetails", {
            get: function () {
              return this.privErrorDetails;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "ErrorCode", {
            get: function () {
              return this.privErrorCode;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.CancellationDetails = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.NoError = 0)] = "NoError"),
          (e[(e.AuthenticationFailure = 1)] = "AuthenticationFailure"),
          (e[(e.BadRequestParameters = 2)] = "BadRequestParameters"),
          (e[(e.TooManyRequests = 3)] = "TooManyRequests"),
          (e[(e.ConnectionFailure = 4)] = "ConnectionFailure"),
          (e[(e.ServiceTimeout = 5)] = "ServiceTimeout"),
          (e[(e.ServiceError = 6)] = "ServiceError"),
          (e[(e.RuntimeError = 7)] = "RuntimeError");
      })(t.CancellationErrorCode || (t.CancellationErrorCode = {}));
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return i(t, e), t;
    })(r(29).SessionEventArgs);
    t.ConnectionEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, n) || this;
        return (i.privJsonResult = t), (i.privEventName = r), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "jsonString", {
          get: function () {
            return this.privJsonResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "eventName", {
          get: function () {
            return this.privEventName;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SessionEventArgs);
    t.ServiceEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(79),
      i = r(29),
      o = (function () {
        function e() {}
        return (
          (e.fromRecognizer = function (t) {
            var r = t.internalData,
              o = new e();
            return (
              (o.privServiceRecognizer = r),
              (o.privEventListener =
                o.privServiceRecognizer.connectionEvents.attach(function (e) {
                  "ConnectionEstablishedEvent" === e.name
                    ? o.connected &&
                      o.connected(new i.ConnectionEventArgs(e.connectionId))
                    : "ConnectionClosedEvent" === e.name
                    ? o.disconnected &&
                      o.disconnected(new i.ConnectionEventArgs(e.connectionId))
                    : "ConnectionMessageSentEvent" === e.name
                    ? o.messageSent &&
                      o.messageSent(
                        new i.ConnectionMessageEventArgs(
                          new n.ConnectionMessageImpl(e.message)
                        )
                      )
                    : "ConnectionMessageReceivedEvent" === e.name &&
                      o.messageReceived &&
                      o.messageReceived(
                        new i.ConnectionMessageEventArgs(
                          new n.ConnectionMessageImpl(e.message)
                        )
                      );
                })),
              (o.privServiceEventListener =
                o.privServiceRecognizer.serviceEvents.attach(function (e) {
                  o.receivedServiceMessage &&
                    o.receivedServiceMessage(
                      new i.ServiceEventArgs(e.jsonString, e.name)
                    );
                })),
              o
            );
          }),
          (e.prototype.openConnection = function () {
            this.privServiceRecognizer.connect();
          }),
          (e.prototype.closeConnection = function () {
            this.privServiceRecognizer.disconnect();
          }),
          (e.prototype.close = function () {}),
          e
        );
      })();
    t.Connection = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(60),
      o = function () {};
    t.ConnectionMessage = o;
    var s = (function () {
      function e(e) {
        (this.privConnectionMessage = e),
          (this.privProperties = new i.PropertyCollection());
      }
      return (
        Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this.privConnectionMessage.headers[
              Object.keys(this.privConnectionMessage.headers).find(function (
                e
              ) {
                return e.toLowerCase() === "path".toLowerCase();
              })
            ];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isTextMessage", {
          get: function () {
            return (
              this.privConnectionMessage.messageType === n.MessageType.Text
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isBinaryMessage", {
          get: function () {
            return (
              this.privConnectionMessage.messageType === n.MessageType.Binary
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "TextMessage", {
          get: function () {
            return this.privConnectionMessage.textBody;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "binaryMessage", {
          get: function () {
            return this.privConnectionMessage.binaryBody;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.toString = function () {
          return "";
        }),
        e
      );
    })();
    t.ConnectionMessageImpl = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privGrammerBuilder = e.dynamicGrammar;
      }
      return (
        (e.fromRecognizer = function (t) {
          return new e(t.internalData);
        }),
        (e.prototype.addPhrase = function (e) {
          this.privGrammerBuilder.addPhrase(e);
        }),
        (e.prototype.addPhrases = function (e) {
          this.privGrammerBuilder.addPhrase(e);
        }),
        (e.prototype.clear = function () {
          this.privGrammerBuilder.clearPhrases();
        }),
        e
      );
    })();
    t.PhraseListGrammar = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(31),
      s = r(29),
      a = function () {};
    t.DialogServiceConfig = a;
    var c = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return (t.privSpeechConfig = new s.SpeechConfigImpl()), t;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "properties", {
          get: function () {
            return this.privSpeechConfig.properties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
          get: function () {
            return this.privSpeechConfig.speechRecognitionLanguage;
          },
          set: function (e) {
            o.Contracts.throwIfNullOrWhitespace(e, "value"),
              (this.privSpeechConfig.speechRecognitionLanguage = e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.setProperty = function (e, t) {
          this.privSpeechConfig.setProperty(e, t);
        }),
        (t.prototype.getProperty = function (e, t) {
          return this.privSpeechConfig.getProperty(e);
        }),
        (t.prototype.setProxy = function (e, t, r, n) {
          this.setProperty(
            s.PropertyId.SpeechServiceConnection_ProxyHostName,
            e
          ),
            this.setProperty(
              s.PropertyId.SpeechServiceConnection_ProxyPort,
              "" + t
            ),
            r &&
              this.setProperty(
                s.PropertyId.SpeechServiceConnection_ProxyUserName,
                r
              ),
            n &&
              this.setProperty(
                s.PropertyId.SpeechServiceConnection_ProxyPassword,
                n
              );
        }),
        (t.prototype.setServiceProperty = function (e, t, r) {
          this.privSpeechConfig.setServiceProperty(e, t, r);
        }),
        (t.prototype.close = function () {}),
        t
      );
    })(a);
    t.DialogServiceConfigImpl = c;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(31),
      s = r(81),
      a = r(29),
      c = (function (e) {
        function t() {
          return e.call(this) || this;
        }
        return (
          i(t, e),
          (t.fromSubscription = function (e, t, r) {
            o.Contracts.throwIfNullOrWhitespace(e, "subscription"),
              o.Contracts.throwIfNullOrWhitespace(t, "region");
            var n = new s.DialogServiceConfigImpl();
            return (
              n.setProperty(
                a.PropertyId.Conversation_DialogType,
                "bot_framework"
              ),
              n.setProperty(a.PropertyId.SpeechServiceConnection_Key, e),
              n.setProperty(a.PropertyId.SpeechServiceConnection_Region, t),
              r && n.setProperty(a.PropertyId.Conversation_ApplicationId, r),
              n
            );
          }),
          (t.fromAuthorizationToken = function (e, t) {
            o.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"),
              o.Contracts.throwIfNullOrWhitespace(t, "region");
            var r = new s.DialogServiceConfigImpl();
            return (
              r.setProperty(
                a.PropertyId.Conversation_DialogType,
                "bot_framework"
              ),
              r.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e),
              r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t),
              r
            );
          }),
          t
        );
      })(s.DialogServiceConfigImpl);
    t.BotFrameworkConfig = c;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(31),
      s = r(81),
      a = r(29),
      c = (function (e) {
        function t() {
          return e.call(this) || this;
        }
        return (
          i(t, e),
          (t.fromSubscription = function (e, t, r) {
            o.Contracts.throwIfNullOrWhitespace(e, "applicationId"),
              o.Contracts.throwIfNullOrWhitespace(t, "subscription"),
              o.Contracts.throwIfNullOrWhitespace(r, "region");
            var n = new s.DialogServiceConfigImpl();
            return (
              n.setProperty(
                a.PropertyId.Conversation_DialogType,
                "custom_commands"
              ),
              n.setProperty(a.PropertyId.Conversation_ApplicationId, e),
              n.setProperty(a.PropertyId.SpeechServiceConnection_Key, t),
              n.setProperty(a.PropertyId.SpeechServiceConnection_Region, r),
              n
            );
          }),
          (t.fromAuthorizationToken = function (e, t, r) {
            o.Contracts.throwIfNullOrWhitespace(e, "applicationId"),
              o.Contracts.throwIfNullOrWhitespace(t, "authorizationToken"),
              o.Contracts.throwIfNullOrWhitespace(r, "region");
            var n = new s.DialogServiceConfigImpl();
            return (
              n.setProperty(
                a.PropertyId.Conversation_DialogType,
                "custom_commands"
              ),
              n.setProperty(a.PropertyId.Conversation_ApplicationId, e),
              n.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, t),
              n.setProperty(a.PropertyId.SpeechServiceConnection_Region, r),
              n
            );
          }),
          Object.defineProperty(t.prototype, "applicationId", {
            get: function () {
              return this.getProperty(a.PropertyId.Conversation_ApplicationId);
            },
            set: function (e) {
              o.Contracts.throwIfNullOrWhitespace(e, "value"),
                this.setProperty(a.PropertyId.Conversation_ApplicationId, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(s.DialogServiceConfigImpl);
    t.CustomCommandsConfig = c;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(85),
      s = r(24),
      a = r(31),
      c = r(29),
      p = r(61),
      u = (function (e) {
        function t(t, r) {
          var n = this,
            i = t;
          a.Contracts.throwIfNull(t, "dialogConfig"),
            ((n =
              e.call(this, r, i.properties, new o.DialogConnectionFactory()) ||
              this).isTurnComplete = !0),
            (n.privIsDisposed = !1),
            (n.privProperties = i.properties.clone());
          var s = n.buildAgentConfig();
          return n.privReco.agentConfig.set(s), n;
        }
        return (
          i(t, e),
          (t.prototype.connect = function () {
            this.privReco.connect();
          }),
          (t.prototype.disconnect = function () {
            this.privReco.disconnect();
          }),
          Object.defineProperty(t.prototype, "authorizationToken", {
            get: function () {
              return this.properties.getProperty(
                p.PropertyId.SpeechServiceAuthorization_Token
              );
            },
            set: function (e) {
              a.Contracts.throwIfNullOrWhitespace(e, "token"),
                this.properties.setProperty(
                  p.PropertyId.SpeechServiceAuthorization_Token,
                  e
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "speechActivityTemplate", {
            get: function () {
              return this.properties.getProperty(
                p.PropertyId.Conversation_Speech_Activity_Template
              );
            },
            set: function (e) {
              this.properties.setProperty(
                p.PropertyId.Conversation_Speech_Activity_Template,
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.listenOnceAsync = function (e, t) {
            var r = this;
            if (this.isTurnComplete)
              try {
                a.Contracts.throwIfDisposed(this.privIsDisposed),
                  this.connect(),
                  this.implRecognizerStop(),
                  (this.isTurnComplete = !1),
                  this.privReco
                    .recognize(
                      s.RecognitionMode.Conversation,
                      function (t) {
                        r.implRecognizerStop(),
                          (r.isTurnComplete = !0),
                          e && e(t);
                      },
                      function (e) {
                        r.implRecognizerStop(),
                          (r.isTurnComplete = !0),
                          t && t(e);
                      }
                    )
                    .on(
                      function (e) {},
                      function (e) {
                        t && t(e);
                      }
                    );
              } catch (e) {
                if (t)
                  if (e instanceof Error) {
                    var n = e;
                    t(n.name + ": " + n.message);
                  } else t(e);
                this.dispose(!0);
              }
          }),
          (t.prototype.sendActivityAsync = function (e) {
            this.privReco.sendMessage(e);
          }),
          (t.prototype.close = function () {
            a.Contracts.throwIfDisposed(this.privIsDisposed), this.dispose(!0);
          }),
          (t.prototype.dispose = function (t) {
            this.privIsDisposed ||
              (t &&
                (this.implRecognizerStop(),
                (this.privIsDisposed = !0),
                e.prototype.dispose.call(this, t)));
          }),
          (t.prototype.createRecognizerConfig = function (e) {
            return new s.RecognizerConfig(e, this.privProperties);
          }),
          (t.prototype.createServiceRecognizer = function (e, t, r, n) {
            var i = r;
            return new s.DialogServiceAdapter(e, t, i, n, this);
          }),
          (t.prototype.buildAgentConfig = function () {
            return {
              botInfo: {
                commType: this.properties.getProperty(
                  "Conversation_Communication_Type",
                  "Default"
                ),
                commandsCulture: void 0,
                connectionId: this.properties.getProperty(
                  p.PropertyId.Conversation_ApplicationId
                ),
                conversationId: void 0,
                fromId: this.properties.getProperty(
                  p.PropertyId.Conversation_From_Id,
                  void 0
                ),
              },
              version: 0.2,
            };
          }),
          t
        );
      })(c.Recognizer);
    t.DialogServiceConnector = u;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(29),
      a = r(65),
      c = r(24),
      p = r(66),
      u = "convai.speech",
      v = { authHeader: "X-DLS-Secret", resourcePath: "", version: "v3" },
      f = {
        authHeader: "X-CommandsAppId",
        resourcePath: "commands",
        version: "v1",
      },
      h = "api";
    var l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.create = function (e, r, n) {
            var i = e.parameters.getProperty(
                s.PropertyId.Conversation_ApplicationId,
                ""
              ),
              a = e.parameters.getProperty(
                s.PropertyId.Conversation_DialogType
              ),
              l = e.parameters.getProperty(
                s.PropertyId.SpeechServiceConnection_Region
              ),
              d = e.parameters.getProperty(
                s.PropertyId.SpeechServiceConnection_RecoLanguage,
                "en-US"
              ),
              g = {};
            (g[p.QueryParameterNames.LanguageParamName] = d),
              (g[p.QueryParameterNames.FormatParamName] = e.parameters
                .getProperty(
                  s.PropertyId.SpeechServiceResponse_OutputFormatOption,
                  s.OutputFormat[s.OutputFormat.Simple]
                )
                .toLowerCase());
            var y = (function (e) {
                switch (e) {
                  case "custom_commands":
                    return f;
                  case "bot_framework":
                    return v;
                }
                throw new Error("Invalid dialog type '" + e + "'");
              })(a),
              m = y.resourcePath,
              S = y.version,
              C = y.authHeader,
              b = {};
            null != r.token && "" !== r.token && (b[r.headerName] = r.token),
              (b[p.QueryParameterNames.ConnectionIdHeader] = n),
              "" !== i && (b[C] = i);
            var P = e.parameters.getProperty(
              s.PropertyId.SpeechServiceConnection_Endpoint,
              ""
            );
            if ("" === P) {
              var R =
                l && l.toLowerCase().startsWith("china")
                  ? ".azure.cn"
                  : ".microsoft.com";
              P =
                "" === i
                  ? "wss://" + l + "." + u + R + "/" + h + "/" + S
                  : "wss://" + l + "." + u + R + "/" + m + "/" + h + "/" + S;
            }
            return (
              t.setCommonUrlParams(e, g, P),
              new o.WebsocketConnection(
                P,
                g,
                b,
                new c.WebsocketMessageFormatter(),
                o.ProxyInfo.fromRecognizerConfig(e),
                n
              )
            );
          }),
          t
        );
      }
      return i(t, e), t;
    })(a.ConnectionFactoryBase);
    t.DialogConnectionFactory = l;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t) {
        (this.privActivity = e), (this.privAudioStream = t);
      }
      return (
        Object.defineProperty(e.prototype, "activity", {
          get: function () {
            return this.privActivity;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "audioStream", {
          get: function () {
            return this.privAudioStream;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ActivityReceivedEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        e[(e.UriQueryParameter = 0)] = "UriQueryParameter";
      })(t.ServicePropertyChannel || (t.ServicePropertyChannel = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Masked = 0)] = "Masked"),
          (e[(e.Removed = 1)] = "Removed"),
          (e[(e.Raw = 2)] = "Raw");
      })(t.ProfanityOption || (t.ProfanityOption = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = (function () {
        function e(e) {
          (this.audioContext = null),
            (this.gainNode = null),
            (this.autoUpdateBufferTimer = 0),
            this.init(e);
        }
        return (
          (e.prototype.playAudioSample = function (e) {
            this.ensureInitializedContext();
            var t = this.formatAudioData(e),
              r = new Float32Array(this.samples.length + t.length);
            r.set(this.samples, 0),
              r.set(t, this.samples.length),
              (this.samples = r);
          }),
          (e.prototype.stopAudio = function () {
            null !== this.audioContext &&
              ((this.samples = new Float32Array()),
              clearInterval(this.autoUpdateBufferTimer),
              this.audioContext.close(),
              (this.audioContext = null));
          }),
          (e.prototype.init = function (e) {
            (this.audioFormat = e), (this.samples = new Float32Array());
          }),
          (e.prototype.ensureInitializedContext = function () {
            var e = this;
            if (null === this.audioContext) {
              this.createAudioContext();
              this.autoUpdateBufferTimer = setInterval(function () {
                e.updateAudioBuffer();
              }, 200);
            }
          }),
          (e.prototype.createAudioContext = function () {
            (this.audioContext = new AudioContext()),
              (this.gainNode = this.audioContext.createGain()),
              (this.gainNode.gain.value = 1),
              this.gainNode.connect(this.audioContext.destination),
              (this.startTime = this.audioContext.currentTime);
          }),
          (e.prototype.formatAudioData = function (e) {
            switch (this.audioFormat.bitsPerSample) {
              case 8:
                return this.formatArrayBuffer(new Int8Array(e), 128);
              case 16:
                return this.formatArrayBuffer(new Int16Array(e), 32768);
              case 32:
                return this.formatArrayBuffer(new Int32Array(e), 2147483648);
              default:
                throw new n.InvalidOperationError(
                  "Only WAVE_FORMAT_PCM (8/16/32 bps) format supported at this time"
                );
            }
          }),
          (e.prototype.formatArrayBuffer = function (e, t) {
            for (var r = new Float32Array(e.length), n = 0; n < e.length; n++)
              r[n] = e[n] / t;
            return r;
          }),
          (e.prototype.updateAudioBuffer = function () {
            if (0 !== this.samples.length) {
              for (
                var e = this.audioFormat.channels,
                  t = this.audioContext.createBufferSource(),
                  r = this.samples.length / e,
                  n = this.audioContext.createBuffer(
                    e,
                    r,
                    this.audioFormat.samplesPerSec
                  ),
                  i = 0;
                i < e;
                i++
              )
                for (
                  var o = i, s = n.getChannelData(i), a = 0;
                  a < this.samples.length;
                  a++, o += e
                )
                  s[a] = this.samples[o];
              this.startTime < this.audioContext.currentTime &&
                (this.startTime = this.audioContext.currentTime),
                (t.buffer = n),
                t.connect(this.gainNode),
                t.start(this.startTime),
                (this.startTime += n.duration),
                (this.samples = new Float32Array());
            }
          }),
          e
        );
      })();
    t.BaseAudioPlayer = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privConnectionMessage = e;
      }
      return (
        Object.defineProperty(e.prototype, "message", {
          get: function () {
            return this.privConnectionMessage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.toString = function () {
          return "Message: " + this.privConnectionMessage.toString();
        }),
        e
      );
    })();
    t.ConnectionMessageEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(92);
    t.Conversation = n.Conversation;
    var i = r(93);
    t.ConversationExpirationEventArgs = i.ConversationExpirationEventArgs;
    var o = r(94);
    t.ConversationParticipantsChangedEventArgs =
      o.ConversationParticipantsChangedEventArgs;
    var s = r(95);
    t.ConversationTranslationCanceledEventArgs =
      s.ConversationTranslationCanceledEventArgs;
    var a = r(96);
    t.ConversationTranslationEventArgs = a.ConversationTranslationEventArgs;
    var c = r(97);
    t.ConversationTranslationResult = c.ConversationTranslationResult;
    var p = r(98);
    t.ConversationTranslator = p.ConversationTranslator;
    var u = r(99);
    (t.Participant = u.Participant), (t.User = u.User);
    var v = r(100);
    t.ParticipantChangedReason = v.ParticipantChangedReason;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        }),
      o =
        (this && this.__spreadArrays) ||
        function () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++)
            e += arguments[t].length;
          var n = Array(e),
            i = 0;
          for (t = 0; t < r; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              n[i] = o[s];
          return n;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = r(24),
      a = r(31),
      c = r(29),
      p = (function () {
        function e() {}
        return (
          (e.createConversationAsync = function (e, t, r) {
            a.Contracts.throwIfNullOrUndefined(
              e,
              s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                "{arg}",
                "config"
              )
            ),
              a.Contracts.throwIfNullOrUndefined(
                e.region,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "SpeechServiceConnection_Region"
                )
              ),
              e.subscriptionKey ||
                e.getProperty(
                  c.PropertyId[c.PropertyId.SpeechServiceAuthorization_Token]
                ) ||
                a.Contracts.throwIfNullOrUndefined(
                  e.subscriptionKey,
                  s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                    "{arg}",
                    "SpeechServiceConnection_Key"
                  )
                );
            var n = new u(e);
            return (
              n.createConversationAsync(
                function () {
                  t && t();
                },
                function (e) {
                  r && r(e);
                }
              ),
              n
            );
          }),
          e
        );
      })();
    t.Conversation = p;
    var u = (function (e) {
      function t(t) {
        var r = e.call(this) || this;
        (r.privIsDisposed = !1),
          (r.privIsConnected = !1),
          (r.onConnected = function (e) {
            r.privIsConnected = !0;
            try {
              r.privConversationTranslator.sessionStarted &&
                r.privConversationTranslator.sessionStarted(
                  r.privConversationTranslator,
                  e
                );
            } catch (e) {}
          }),
          (r.onDisconnected = function (e) {
            r.close(!1);
            try {
              r.privConversationTranslator.sessionStopped &&
                r.privConversationTranslator.sessionStopped(
                  r.privConversationTranslator,
                  e
                );
            } catch (e) {}
          }),
          (r.onCanceled = function (e, t) {
            r.close(!1);
            try {
              r.privConversationTranslator.canceled &&
                r.privConversationTranslator.canceled(
                  r.privConversationTranslator,
                  t
                );
            } catch (t) {}
          }),
          (r.onParticipantUpdateCommandReceived = function (e, t) {
            var n, i;
            try {
              var o = r.privParticipants.getParticipant(t.id);
              if (void 0 !== o) {
                switch (t.key) {
                  case s.ConversationTranslatorCommandTypes.changeNickname:
                    o.displayName = t.value;
                    break;
                  case s.ConversationTranslatorCommandTypes.setUseTTS:
                    o.useTts = t.value;
                    break;
                  case s.ConversationTranslatorCommandTypes
                    .setProfanityFiltering:
                    o.profanity = t.value;
                    break;
                  case s.ConversationTranslatorCommandTypes.setMute:
                    o.isMuted = t.value;
                    break;
                  case s.ConversationTranslatorCommandTypes
                    .setTranslateToLanguages:
                    o.translateToLanguages = t.value;
                }
                r.privParticipants.addOrUpdateParticipant(o),
                  (null === (n = r.privConversationTranslator) || void 0 === n
                    ? void 0
                    : n.participantsChanged) &&
                    (null === (i = r.privConversationTranslator) ||
                      void 0 === i ||
                      i.participantsChanged(
                        r.privConversationTranslator,
                        new c.ConversationParticipantsChangedEventArgs(
                          c.ParticipantChangedReason.Updated,
                          [r.toParticipant(o)],
                          t.sessionId
                        )
                      ));
              }
            } catch (t) {}
          }),
          (r.onLockRoomCommandReceived = function (e, t) {}),
          (r.onMuteAllCommandReceived = function (e, t) {
            var n, i;
            try {
              r.privParticipants.participants.forEach(function (e) {
                return (e.isMuted = !e.isHost && t.isMuted);
              }),
                (null === (n = r.privConversationTranslator) || void 0 === n
                  ? void 0
                  : n.participantsChanged) &&
                  (null === (i = r.privConversationTranslator) ||
                    void 0 === i ||
                    i.participantsChanged(
                      r.privConversationTranslator,
                      new c.ConversationParticipantsChangedEventArgs(
                        c.ParticipantChangedReason.Updated,
                        r.toParticipants(!1),
                        t.sessionId
                      )
                    ));
            } catch (t) {}
          }),
          (r.onParticipantJoinCommandReceived = function (e, t) {
            var n, i;
            try {
              var o = r.privParticipants.addOrUpdateParticipant(t.participant);
              void 0 !== o &&
                (null === (n = r.privConversationTranslator) || void 0 === n
                  ? void 0
                  : n.participantsChanged) &&
                (null === (i = r.privConversationTranslator) ||
                  void 0 === i ||
                  i.participantsChanged(
                    r.privConversationTranslator,
                    new c.ConversationParticipantsChangedEventArgs(
                      c.ParticipantChangedReason.JoinedConversation,
                      [r.toParticipant(o)],
                      t.sessionId
                    )
                  ));
            } catch (t) {}
          }),
          (r.onParticipantLeaveCommandReceived = function (e, t) {
            var n, i;
            try {
              var o = r.privParticipants.getParticipant(t.participant.id);
              void 0 !== o &&
                (r.privParticipants.deleteParticipant(t.participant.id),
                (null === (n = r.privConversationTranslator) || void 0 === n
                  ? void 0
                  : n.participantsChanged) &&
                  (null === (i = r.privConversationTranslator) ||
                    void 0 === i ||
                    i.participantsChanged(
                      r.privConversationTranslator,
                      new c.ConversationParticipantsChangedEventArgs(
                        c.ParticipantChangedReason.LeftConversation,
                        [r.toParticipant(o)],
                        t.sessionId
                      )
                    )));
            } catch (t) {}
          }),
          (r.onTranslationReceived = function (e, t) {
            var n, i, o, a, p, u;
            try {
              switch (t.command) {
                case s.ConversationTranslatorMessageTypes.final:
                  (null === (n = r.privConversationTranslator) || void 0 === n
                    ? void 0
                    : n.transcribed) &&
                    (null === (i = r.privConversationTranslator) ||
                      void 0 === i ||
                      i.transcribed(
                        r.privConversationTranslator,
                        new c.ConversationTranslationEventArgs(
                          t.payload,
                          void 0,
                          t.sessionId
                        )
                      ));
                  break;
                case s.ConversationTranslatorMessageTypes.partial:
                  (null === (o = r.privConversationTranslator) || void 0 === o
                    ? void 0
                    : o.transcribing) &&
                    (null === (a = r.privConversationTranslator) ||
                      void 0 === a ||
                      a.transcribing(
                        r.privConversationTranslator,
                        new c.ConversationTranslationEventArgs(
                          t.payload,
                          void 0,
                          t.sessionId
                        )
                      ));
                  break;
                case s.ConversationTranslatorMessageTypes.instantMessage:
                  (null === (p = r.privConversationTranslator) || void 0 === p
                    ? void 0
                    : p.textMessageReceived) &&
                    (null === (u = r.privConversationTranslator) ||
                      void 0 === u ||
                      u.textMessageReceived(
                        r.privConversationTranslator,
                        new c.ConversationTranslationEventArgs(
                          t.payload,
                          void 0,
                          t.sessionId
                        )
                      ));
              }
            } catch (t) {}
          }),
          (r.onParticipantsListReceived = function (e, t) {
            var n, i;
            try {
              if (
                (void 0 !== t.sessionToken &&
                  null !== t.sessionToken &&
                  (r.privRoom.token = t.sessionToken),
                (r.privParticipants.participants = o(t.participants)),
                void 0 !== r.privParticipants.me && (r.privIsReady = !0),
                (null === (n = r.privConversationTranslator) || void 0 === n
                  ? void 0
                  : n.participantsChanged) &&
                  (null === (i = r.privConversationTranslator) ||
                    void 0 === i ||
                    i.participantsChanged(
                      r.privConversationTranslator,
                      new c.ConversationParticipantsChangedEventArgs(
                        c.ParticipantChangedReason.JoinedConversation,
                        r.toParticipants(!0),
                        t.sessionId
                      )
                    )),
                r.me.isHost)
              ) {
                var s = r.privConversationTranslator.properties.getProperty(
                  c.PropertyId.ConversationTranslator_Name
                );
                void 0 !== s &&
                  s.length > 0 &&
                  s !== r.me.displayName &&
                  r.changeNicknameAsync(s);
              }
            } catch (t) {}
          }),
          (r.onConversationExpiration = function (e, t) {
            var n, i;
            try {
              (null === (n = r.privConversationTranslator) || void 0 === n
                ? void 0
                : n.conversationExpiration) &&
                (null === (i = r.privConversationTranslator) ||
                  void 0 === i ||
                  i.conversationExpiration(r.privConversationTranslator, t));
            } catch (t) {}
          }),
          (r.privProperties = new c.PropertyCollection()),
          (r.privManager = new s.ConversationManager()),
          t.getProperty(
            c.PropertyId[c.PropertyId.SpeechServiceConnection_RecoLanguage]
          ) ||
            t.setProperty(
              c.PropertyId[c.PropertyId.SpeechServiceConnection_RecoLanguage],
              s.ConversationTranslatorConfig.defaultLanguageCode
            ),
          (r.privLanguage = t.getProperty(
            c.PropertyId[c.PropertyId.SpeechServiceConnection_RecoLanguage]
          )),
          0 === t.targetLanguages.length && t.addTargetLanguage(r.privLanguage),
          t.getProperty(
            c.PropertyId[c.PropertyId.SpeechServiceResponse_ProfanityOption]
          ) || t.setProfanity(c.ProfanityOption.Masked);
        var n = t.getProperty(
          c.PropertyId[c.PropertyId.ConversationTranslator_Name]
        );
        (null == n || n.length <= 1 || n.length > 50) && (n = "Host"),
          t.setProperty(
            c.PropertyId[c.PropertyId.ConversationTranslator_Name],
            n
          ),
          (r.privConfig = t);
        var i = t;
        return (
          a.Contracts.throwIfNull(i, "speechConfig"),
          (r.privProperties = i.properties.clone()),
          (r.privIsConnected = !1),
          (r.privParticipants = new s.InternalParticipants()),
          (r.privIsReady = !1),
          r
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "conversationTranslator", {
          set: function (e) {
            this.privConversationTranslator = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "room", {
          get: function () {
            return this.privRoom;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "connection", {
          get: function () {
            return this.privConversationRecognizer;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "authorizationToken", {
          get: function () {
            return this.privToken;
          },
          set: function (e) {
            a.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"),
              (this.privToken = e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "config", {
          get: function () {
            return this.privConfig;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "conversationId", {
          get: function () {
            return this.privRoom ? this.privRoom.roomId : "";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
          get: function () {
            return this.privLanguage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isMutedByHost", {
          get: function () {
            var e, t;
            return (
              (null === (e = this.privParticipants.me) ||
                void 0 === e ||
                !e.isHost) &&
              (null === (t = this.privParticipants.me) || void 0 === t
                ? void 0
                : t.isMuted)
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isConnected", {
          get: function () {
            return this.privIsConnected && this.privIsReady;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "participants", {
          get: function () {
            return this.toParticipants(!0);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "me", {
          get: function () {
            return this.toParticipant(this.privParticipants.me);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "host", {
          get: function () {
            return this.toParticipant(this.privParticipants.host);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.createConversationAsync = function (e, t) {
          var r = this;
          try {
            this.privConversationRecognizer &&
              this.handleError(
                new Error(
                  s.ConversationTranslatorConfig.strings.permissionDeniedStart
                ),
                t
              ),
              this.privManager.createOrJoin(
                this.privProperties,
                void 0,
                function (n) {
                  n ||
                    r.handleError(
                      new Error(
                        s.ConversationTranslatorConfig.strings.permissionDeniedConnect
                      ),
                      t
                    ),
                    (r.privRoom = n),
                    r.handleCallback(e, t);
                },
                function (e) {
                  r.handleError(e, t);
                }
              );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.startConversationAsync = function (e, t) {
          var r = this;
          try {
            this.privConversationRecognizer &&
              this.handleError(
                new Error(
                  s.ConversationTranslatorConfig.strings.permissionDeniedStart
                ),
                t
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedConnect
              ),
              (this.privParticipants.meId = this.privRoom.participantId),
              (this.privConversationRecognizer =
                new s.ConversationTranslatorRecognizer(this.privConfig)),
              (this.privConversationRecognizer.conversation = this.privRoom),
              (this.privConversationRecognizerConnection =
                c.Connection.fromRecognizer(this.privConversationRecognizer)),
              (this.privConversationRecognizerConnection.connected =
                this.onConnected),
              (this.privConversationRecognizerConnection.disconnected =
                this.onDisconnected),
              (this.privConversationRecognizer.canceled = this.onCanceled),
              (this.privConversationRecognizer.participantUpdateCommandReceived =
                this.onParticipantUpdateCommandReceived),
              (this.privConversationRecognizer.lockRoomCommandReceived =
                this.onLockRoomCommandReceived),
              (this.privConversationRecognizer.muteAllCommandReceived =
                this.onMuteAllCommandReceived),
              (this.privConversationRecognizer.participantJoinCommandReceived =
                this.onParticipantJoinCommandReceived),
              (this.privConversationRecognizer.participantLeaveCommandReceived =
                this.onParticipantLeaveCommandReceived),
              (this.privConversationRecognizer.translationReceived =
                this.onTranslationReceived),
              (this.privConversationRecognizer.participantsListReceived =
                this.onParticipantsListReceived),
              (this.privConversationRecognizer.conversationExpiration =
                this.onConversationExpiration),
              this.privConversationRecognizer.connect(
                this.privRoom.token,
                function () {
                  r.handleCallback(e, t);
                },
                function (e) {
                  r.handleError(e, t);
                }
              );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.joinConversationAsync = function (e, t, r, n, i) {
          var o = this;
          try {
            a.Contracts.throwIfNullOrWhitespace(
              e,
              s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                "{arg}",
                "conversationId"
              )
            ),
              a.Contracts.throwIfNullOrWhitespace(
                t,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "nickname"
                )
              ),
              a.Contracts.throwIfNullOrWhitespace(
                r,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "language"
                )
              ),
              this.privManager.createOrJoin(
                this.privProperties,
                e,
                function (e) {
                  a.Contracts.throwIfNullOrUndefined(
                    e,
                    s.ConversationTranslatorConfig.strings
                      .permissionDeniedConnect
                  ),
                    (o.privRoom = e),
                    (o.privConfig.authorizationToken =
                      e.cognitiveSpeechAuthToken),
                    n && n(e.cognitiveSpeechAuthToken);
                },
                function (e) {
                  o.handleError(e, i);
                }
              );
          } catch (e) {
            this.handleError(e, i);
          }
        }),
        (t.prototype.deleteConversationAsync = function (e, t) {
          var r = this;
          try {
            a.Contracts.throwIfNullOrUndefined(
              this.privProperties,
              s.ConversationTranslatorConfig.strings.permissionDeniedConnect
            ),
              a.Contracts.throwIfNullOrWhitespace(
                this.privRoom.token,
                s.ConversationTranslatorConfig.strings.permissionDeniedConnect
              ),
              this.privManager.leave(
                this.privProperties,
                this.privRoom.token,
                function () {
                  r.handleCallback(e, t);
                },
                function (e) {
                  r.handleError(e, t);
                }
              ),
              this.dispose();
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.endConversationAsync = function (e, t) {
          try {
            this.close(!0), this.handleCallback(e, t);
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.lockConversationAsync = function (e, t) {
          var r,
            n = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSendAsHost ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace(
                      "{command}",
                      "lock"
                    )
                  ),
                  t
                ),
              null === (r = this.privConversationRecognizer) ||
                void 0 === r ||
                r.sendLockRequest(
                  !0,
                  function () {
                    n.handleCallback(e, t);
                  },
                  function (e) {
                    n.handleError(e, t);
                  }
                );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.muteAllParticipantsAsync = function (e, t) {
          var r,
            n = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privConversationRecognizer,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSendAsHost ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace(
                      "{command}",
                      "mute"
                    )
                  ),
                  t
                ),
              null === (r = this.privConversationRecognizer) ||
                void 0 === r ||
                r.sendMuteAllRequest(
                  !0,
                  function () {
                    n.handleCallback(e, t);
                  },
                  function (e) {
                    n.handleError(e, t);
                  }
                );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.muteParticipantAsync = function (e, t, r) {
          var n,
            i = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrWhitespace(
                e,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "userId"
                )
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSend ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedSend
                  ),
                  r
                ),
              this.me.isHost ||
                this.me.id === e ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace(
                      "{command}",
                      "mute"
                    )
                  ),
                  r
                ),
              -1 === this.privParticipants.getParticipantIndex(e) &&
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.invalidParticipantRequest
                  ),
                  r
                ),
              null === (n = this.privConversationRecognizer) ||
                void 0 === n ||
                n.sendMuteRequest(
                  e,
                  !0,
                  function () {
                    i.handleCallback(t, r);
                  },
                  function (e) {
                    i.handleError(e, r);
                  }
                );
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (t.prototype.removeParticipantAsync = function (e, t, r) {
          var n,
            i = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSendAsHost ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace(
                      "{command}",
                      "remove"
                    )
                  ),
                  r
                );
            var o = "";
            if ("string" == typeof e) o = e;
            else if (e.hasOwnProperty("id")) {
              o = e.id;
            } else if (e.hasOwnProperty("userId")) {
              o = e.userId;
            }
            a.Contracts.throwIfNullOrWhitespace(
              o,
              s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                "{arg}",
                "userId"
              )
            ),
              -1 ===
                this.participants.findIndex(function (e) {
                  return e.id === o;
                }) &&
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.invalidParticipantRequest
                  ),
                  r
                ),
              null === (n = this.privConversationRecognizer) ||
                void 0 === n ||
                n.sendEjectRequest(
                  o,
                  function () {
                    i.handleCallback(t, r);
                  },
                  function (e) {
                    i.handleError(e, r);
                  }
                );
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (t.prototype.unlockConversationAsync = function (e, t) {
          var r,
            n = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSendAsHost ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace(
                      "{command}",
                      "unlock"
                    )
                  ),
                  t
                ),
              null === (r = this.privConversationRecognizer) ||
                void 0 === r ||
                r.sendLockRequest(
                  !1,
                  function () {
                    n.handleCallback(e, t);
                  },
                  function (e) {
                    n.handleError(e, t);
                  }
                );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.unmuteAllParticipantsAsync = function (e, t) {
          var r,
            n = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSendAsHost ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace(
                      "{command}",
                      "unmute all"
                    )
                  ),
                  t
                ),
              null === (r = this.privConversationRecognizer) ||
                void 0 === r ||
                r.sendMuteAllRequest(
                  !1,
                  function () {
                    n.handleCallback(e, t);
                  },
                  function (e) {
                    n.handleError(e, t);
                  }
                );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (t.prototype.unmuteParticipantAsync = function (e, t, r) {
          var n,
            i = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrWhitespace(
                e,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "userId"
                )
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSend ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedSend
                  ),
                  r
                ),
              this.me.isHost ||
                this.me.id === e ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace(
                      "{command}",
                      "mute"
                    )
                  ),
                  r
                ),
              -1 === this.privParticipants.getParticipantIndex(e) &&
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.invalidParticipantRequest
                  ),
                  r
                ),
              null === (n = this.privConversationRecognizer) ||
                void 0 === n ||
                n.sendMuteRequest(
                  e,
                  !1,
                  function () {
                    i.handleCallback(t, r);
                  },
                  function (e) {
                    i.handleError(e, r);
                  }
                );
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (t.prototype.sendTextMessageAsync = function (e, t, r) {
          var n,
            i = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrWhitespace(
                e,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "message"
                )
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSend ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedSend
                  ),
                  r
                ),
              e.length > s.ConversationTranslatorConfig.textMessageMaxLength &&
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                      "{arg}",
                      "message length"
                    )
                  ),
                  r
                ),
              null === (n = this.privConversationRecognizer) ||
                void 0 === n ||
                n.sendMessageRequest(
                  e,
                  function () {
                    i.handleCallback(t, r);
                  },
                  function (e) {
                    i.handleError(e, r);
                  }
                );
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (t.prototype.changeNicknameAsync = function (e, t, r) {
          var n,
            i = this;
          try {
            a.Contracts.throwIfDisposed(this.privIsDisposed),
              a.Contracts.throwIfDisposed(
                this.privConversationRecognizer.isDisposed()
              ),
              a.Contracts.throwIfNullOrWhitespace(
                e,
                s.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "nickname"
                )
              ),
              a.Contracts.throwIfNullOrUndefined(
                this.privRoom,
                s.ConversationTranslatorConfig.strings.permissionDeniedSend
              ),
              this.canSend ||
                this.handleError(
                  new Error(
                    s.ConversationTranslatorConfig.strings.permissionDeniedSend
                  ),
                  r
                ),
              null === (n = this.privConversationRecognizer) ||
                void 0 === n ||
                n.sendChangeNicknameRequest(
                  e,
                  function () {
                    i.handleCallback(t, r);
                  },
                  function (e) {
                    i.handleError(e, r);
                  }
                );
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (t.prototype.isDisposed = function () {
          return this.privIsDisposed;
        }),
        (t.prototype.dispose = function (e) {
          var t;
          this.isDisposed ||
            ((this.privIsDisposed = !0),
            null === (t = this.config) || void 0 === t || t.close(),
            this.privConversationRecognizerConnection &&
              (this.privConversationRecognizerConnection.closeConnection(),
              this.privConversationRecognizerConnection.close(),
              (this.privConversationRecognizerConnection = void 0)),
            (this.privConfig = void 0),
            (this.privLanguage = void 0),
            (this.privProperties = void 0),
            (this.privRoom = void 0),
            (this.privToken = void 0),
            (this.privManager = void 0),
            (this.privConversationRecognizer = void 0),
            (this.privIsConnected = !1),
            (this.privIsReady = !1),
            (this.privParticipants = void 0),
            (this.privRoom = void 0));
        }),
        (t.prototype.close = function (e) {
          var t, r, n;
          try {
            (this.privIsConnected = !1),
              null === (t = this.privConversationRecognizerConnection) ||
                void 0 === t ||
                t.closeConnection(),
              null === (r = this.privConversationRecognizerConnection) ||
                void 0 === r ||
                r.close(),
              this.privConversationRecognizer.close(),
              (this.privConversationRecognizerConnection = void 0),
              (this.privConversationRecognizer = void 0),
              null === (n = this.privConversationTranslator) ||
                void 0 === n ||
                n.dispose();
          } catch (e) {}
          e && this.dispose();
        }),
        Object.defineProperty(t.prototype, "canSend", {
          get: function () {
            var e;
            return (
              this.privIsConnected &&
              !(null === (e = this.privParticipants.me) || void 0 === e
                ? void 0
                : e.isMuted)
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "canSendAsHost", {
          get: function () {
            var e;
            return (
              this.privIsConnected &&
              (null === (e = this.privParticipants.me) || void 0 === e
                ? void 0
                : e.isHost)
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.handleCallback = function (e, t) {
          if (e) {
            try {
              e();
            } catch (e) {
              t && t(e);
            }
            e = void 0;
          }
        }),
        (t.prototype.handleError = function (e, t) {
          if (t)
            if (e instanceof Error) {
              var r = e;
              t(r.name + ": " + r.message);
            } else t(e);
        }),
        (t.prototype.toParticipants = function (e) {
          var t = this,
            r = this.privParticipants.participants.map(function (e) {
              return t.toParticipant(e);
            });
          return e
            ? r
            : r.filter(function (e) {
                return !1 === e.isHost;
              });
        }),
        (t.prototype.toParticipant = function (e) {
          return new c.Participant(
            e.id,
            e.avatar,
            e.displayName,
            e.isHost,
            e.isMuted,
            e.isUsingTts,
            e.preferredLanguage
          );
        }),
        t
      );
    })(p);
    t.ConversationImpl = u;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privExpirationTime = t), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "expirationTime", {
          get: function () {
            return this.privExpirationTime;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SessionEventArgs);
    t.ConversationExpirationEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, n) || this;
        return (i.privReason = t), (i.privParticipant = r), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "participants", {
          get: function () {
            return this.privParticipant;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).SessionEventArgs);
    t.ConversationParticipantsChangedEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o) {
        var s = e.call(this, i, o) || this;
        return (
          (s.privReason = t), (s.privErrorDetails = r), (s.privErrorCode = n), s
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorCode", {
          get: function () {
            return this.privErrorCode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.ConversationTranslationCanceledEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, r, n) || this;
        return (i.privResult = t), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(29).RecognitionEventArgs);
    t.ConversationTranslationEventArgs = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i, o, s, a, c, p, u, v) {
        var f = e.call(this, r, i, o, s, a, c, p, u, v) || this;
        return (f.privId = t), (f.privOrigLang = n), f;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "participantId", {
          get: function () {
            return this.privId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "originalLang", {
          get: function () {
            return this.privOrigLang;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(55).TranslationRecognitionResult);
    t.ConversationTranslationResult = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      i = r(24),
      o = r(31),
      s = r(29),
      a = r(92),
      c = r(91);
    !(function (e) {
      (e[(e.Inactive = 0)] = "Inactive"),
        (e[(e.Connecting = 1)] = "Connecting"),
        (e[(e.Connected = 2)] = "Connected");
    })((n = t.SpeechState || (t.SpeechState = {})));
    var p = (function () {
      function e(e) {
        var t = this;
        (this.privIsDisposed = !1),
          (this.privIsSpeaking = !1),
          (this.privSpeechState = n.Inactive),
          (this.onSpeechConnected = function (e) {
            t.privSpeechState = n.Connected;
          }),
          (this.onSpeechDisconnected = function (e) {
            (t.privSpeechState = n.Inactive), t.cancelSpeech();
          }),
          (this.onSpeechRecognized = function (e, r) {
            var n;
            (null === (n = r.result) || void 0 === n
              ? void 0
              : n.errorDetails) &&
              (t.cancelSpeech(), t.fireCancelEvent(r.result.errorDetails));
          }),
          (this.onSpeechRecognizing = function (e, t) {}),
          (this.onSpeechCanceled = function (e, r) {
            if (t.privSpeechState !== n.Inactive)
              try {
                t.cancelSpeech();
              } catch (e) {
                t.privSpeechState = n.Inactive;
              }
          }),
          (this.onSpeechSessionStarted = function (e, r) {
            t.privSpeechState = n.Connected;
          }),
          (this.onSpeechSessionStopped = function (e, r) {
            t.privSpeechState = n.Inactive;
          }),
          (this.privProperties = new s.PropertyCollection()),
          (this.privAudioConfig = e);
      }
      return (
        Object.defineProperty(e.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "speechRecognitionLanguage", {
          get: function () {
            return this.privSpeechRecognitionLanguage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participants", {
          get: function () {
            var e;
            return null === (e = this.privConversation) || void 0 === e
              ? void 0
              : e.participants;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.joinConversationAsync = function (e, t, r, n, c) {
          var p = this;
          try {
            if ("string" == typeof e) {
              o.Contracts.throwIfNullOrUndefined(
                e,
                i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "conversation id"
                )
              ),
                o.Contracts.throwIfNullOrWhitespace(
                  t,
                  i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                    "{arg}",
                    "nickname"
                  )
                ),
                this.privConversation &&
                  this.handleError(
                    new Error(
                      i.ConversationTranslatorConfig.strings.permissionDeniedStart
                    ),
                    c
                  );
              var u = r;
              (null != u && "" !== u) ||
                (u = i.ConversationTranslatorConfig.defaultLanguageCode),
                (this.privSpeechTranslationConfig =
                  s.SpeechTranslationConfig.fromSubscription(
                    i.ConversationTranslatorConfig.auth
                      .placeholderSubscriptionKey,
                    i.ConversationTranslatorConfig.auth.placeholderRegion
                  )),
                this.privSpeechTranslationConfig.setProfanity(
                  s.ProfanityOption.Masked
                ),
                this.privSpeechTranslationConfig.addTargetLanguage(u),
                this.privSpeechTranslationConfig.setProperty(
                  s.PropertyId[
                    s.PropertyId.SpeechServiceConnection_RecoLanguage
                  ],
                  u
                ),
                this.privSpeechTranslationConfig.setProperty(
                  s.PropertyId[s.PropertyId.ConversationTranslator_Name],
                  t
                );
              var v = this.privProperties.getProperty(
                s.PropertyId.ConversationTranslator_Host
              );
              v &&
                this.privSpeechTranslationConfig.setProperty(
                  s.PropertyId[s.PropertyId.ConversationTranslator_Host],
                  v
                );
              var f = this.privProperties.getProperty(
                s.PropertyId.SpeechServiceConnection_Host
              );
              f &&
                this.privSpeechTranslationConfig.setProperty(
                  s.PropertyId[s.PropertyId.SpeechServiceConnection_Host],
                  f
                ),
                (this.privConversation = new a.ConversationImpl(
                  this.privSpeechTranslationConfig
                )),
                (this.privConversation.conversationTranslator = this),
                this.privConversation.joinConversationAsync(
                  e,
                  t,
                  u,
                  function (e) {
                    e ||
                      p.handleError(
                        new Error(
                          i.ConversationTranslatorConfig.strings.permissionDeniedConnect
                        ),
                        c
                      ),
                      (p.privSpeechTranslationConfig.authorizationToken = e),
                      p.privConversation.startConversationAsync(
                        function () {
                          p.handleCallback(n, c);
                        },
                        function (e) {
                          p.handleError(e, c);
                        }
                      );
                  },
                  function (e) {
                    p.handleError(e, c);
                  }
                );
            } else
              "object" == typeof e
                ? (o.Contracts.throwIfNullOrUndefined(
                    e,
                    i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                      "{arg}",
                      "conversation id"
                    )
                  ),
                  o.Contracts.throwIfNullOrWhitespace(
                    t,
                    i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                      "{arg}",
                      "nickname"
                    )
                  ),
                  this.privProperties.setProperty(
                    s.PropertyId.ConversationTranslator_Name,
                    t
                  ),
                  (this.privConversation = e),
                  (this.privConversation.conversationTranslator = this),
                  o.Contracts.throwIfNullOrUndefined(
                    this.privConversation,
                    i.ConversationTranslatorConfig.strings
                      .permissionDeniedConnect
                  ),
                  o.Contracts.throwIfNullOrUndefined(
                    this.privConversation.room.token,
                    i.ConversationTranslatorConfig.strings
                      .permissionDeniedConnect
                  ),
                  (this.privSpeechTranslationConfig = e.config),
                  this.handleCallback(r, n))
                : this.handleError(
                    new Error(
                      i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                        "{arg}",
                        "invalid conversation type"
                      )
                    ),
                    n
                  );
          } catch (e) {
            this.handleError(e, "string" == typeof r ? c : n);
          }
        }),
        (e.prototype.leaveConversationAsync = function (e, t) {
          var r = this;
          try {
            this.cancelSpeech(),
              this.privConversation.endConversationAsync(
                function () {
                  r.privConversation.deleteConversationAsync(
                    function () {
                      r.handleCallback(e, t), r.dispose();
                    },
                    function (e) {
                      r.handleError(e, t);
                    }
                  );
                },
                function (e) {
                  r.handleError(e, t);
                }
              );
          } catch (e) {
            this.handleError(e, t);
          }
        }),
        (e.prototype.sendTextMessageAsync = function (e, t, r) {
          var n;
          try {
            o.Contracts.throwIfNullOrUndefined(
              this.privConversation,
              i.ConversationTranslatorConfig.strings.permissionDeniedSend
            ),
              o.Contracts.throwIfNullOrWhitespace(
                e,
                i.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  e
                )
              ),
              null === (n = this.privConversation) ||
                void 0 === n ||
                n.sendTextMessageAsync(e, t, r);
          } catch (e) {
            this.handleError(e, r);
          }
        }),
        (e.prototype.startTranscribingAsync = function (e, t) {
          var r = this;
          try {
            o.Contracts.throwIfNullOrUndefined(
              this.privConversation,
              i.ConversationTranslatorConfig.strings.permissionDeniedSend
            ),
              o.Contracts.throwIfNullOrUndefined(
                this.privConversation.room.token,
                i.ConversationTranslatorConfig.strings.permissionDeniedConnect
              ),
              this.canSpeak ||
                this.handleError(
                  new Error(
                    i.ConversationTranslatorConfig.strings.permissionDeniedSend
                  ),
                  t
                ),
              void 0 === this.privTranslationRecognizer
                ? this.connectTranslatorRecognizer(
                    function () {
                      r.startContinuousRecognition(
                        function () {
                          (r.privIsSpeaking = !0), r.handleCallback(e, t);
                        },
                        function (e) {
                          (r.privIsSpeaking = !1),
                            r.cancelSpeech(),
                            r.handleError(e, t);
                        }
                      );
                    },
                    function (e) {
                      r.handleError(e, t);
                    }
                  )
                : this.startContinuousRecognition(
                    function () {
                      (r.privIsSpeaking = !0), r.handleCallback(e, t);
                    },
                    function (e) {
                      (r.privIsSpeaking = !1),
                        r.cancelSpeech(),
                        r.handleError(e, t);
                    }
                  );
          } catch (e) {
            this.handleError(e, t), this.cancelSpeech();
          }
        }),
        (e.prototype.stopTranscribingAsync = function (e, t) {
          var r,
            n = this;
          try {
            if (!this.privIsSpeaking)
              return this.cancelSpeech(), void this.handleCallback(e, t);
            (this.privIsSpeaking = !1),
              null === (r = this.privTranslationRecognizer) ||
                void 0 === r ||
                r.stopContinuousRecognitionAsync(
                  function () {
                    n.handleCallback(e, t);
                  },
                  function (e) {
                    n.handleError(e, t), n.cancelSpeech();
                  }
                );
          } catch (e) {
            this.handleError(e, t), this.cancelSpeech();
          }
        }),
        (e.prototype.isDisposed = function () {
          return this.privIsDisposed;
        }),
        (e.prototype.dispose = function (e) {
          var t, r;
          (this.isDisposed && !this.privIsSpeaking) ||
            (this.cancelSpeech(),
            (this.privIsDisposed = !0),
            null === (t = this.privSpeechTranslationConfig) ||
              void 0 === t ||
              t.close(),
            (this.privSpeechRecognitionLanguage = void 0),
            (this.privProperties = void 0),
            (this.privAudioConfig = void 0),
            (this.privSpeechTranslationConfig = void 0),
            null === (r = this.privConversation) || void 0 === r || r.dispose(),
            (this.privConversation = void 0));
        }),
        (e.prototype.connectTranslatorRecognizer = function (e, t) {
          try {
            void 0 === this.privAudioConfig &&
              (this.privAudioConfig =
                s.AudioConfig.fromDefaultMicrophoneInput()),
              this.privSpeechTranslationConfig.getProperty(
                s.PropertyId[s.PropertyId.SpeechServiceConnection_Key]
              ) ===
                i.ConversationTranslatorConfig.auth
                  .placeholderSubscriptionKey &&
                this.privSpeechTranslationConfig.setProperty(
                  s.PropertyId[s.PropertyId.SpeechServiceConnection_Key],
                  ""
                );
            var r = encodeURIComponent(this.privConversation.room.token),
              n = this.privSpeechTranslationConfig.getProperty(
                s.PropertyId[s.PropertyId.SpeechServiceConnection_Host],
                i.ConversationTranslatorConfig.speechHost
              ),
              o =
                "wss://" +
                (n = n.replace(
                  "{region}",
                  this.privConversation.room.cognitiveSpeechRegion
                )) +
                i.ConversationTranslatorConfig.speechPath +
                "?" +
                i.ConversationTranslatorConfig.params.token +
                "=" +
                r;
            this.privSpeechTranslationConfig.setProperty(
              s.PropertyId[s.PropertyId.SpeechServiceConnection_Endpoint],
              o
            ),
              (this.privTranslationRecognizer = new s.TranslationRecognizer(
                this.privSpeechTranslationConfig,
                this.privAudioConfig
              )),
              (this.privTranslationRecognizerConnection =
                s.Connection.fromRecognizer(this.privTranslationRecognizer)),
              (this.privTranslationRecognizerConnection.connected =
                this.onSpeechConnected),
              (this.privTranslationRecognizerConnection.disconnected =
                this.onSpeechDisconnected),
              (this.privTranslationRecognizer.recognized =
                this.onSpeechRecognized),
              (this.privTranslationRecognizer.recognizing =
                this.onSpeechRecognizing),
              (this.privTranslationRecognizer.canceled = this.onSpeechCanceled),
              (this.privTranslationRecognizer.sessionStarted =
                this.onSpeechSessionStarted),
              (this.privTranslationRecognizer.sessionStopped =
                this.onSpeechSessionStopped),
              this.handleCallback(e, t);
          } catch (e) {
            this.handleError(e, t), this.cancelSpeech();
          }
        }),
        (e.prototype.startContinuousRecognition = function (e, t) {
          this.privTranslationRecognizer.startContinuousRecognitionAsync(e, t);
        }),
        (e.prototype.fireCancelEvent = function (e) {
          var t, r, n, i, o, a, p;
          try {
            if (this.canceled) {
              var u = new c.ConversationTranslationCanceledEventArgs(
                null !=
                (r = null === (t = e) || void 0 === t ? void 0 : t.reason)
                  ? r
                  : s.CancellationReason.Error,
                null !=
                (i = null === (n = e) || void 0 === n ? void 0 : n.errorDetails)
                  ? i
                  : e,
                null !=
                (a = null === (o = e) || void 0 === o ? void 0 : o.errorCode)
                  ? a
                  : s.CancellationErrorCode.RuntimeError,
                void 0,
                null === (p = e) || void 0 === p ? void 0 : p.sessionId
              );
              this.canceled(this, u);
            }
          } catch (e) {}
        }),
        (e.prototype.cancelSpeech = function () {
          var e, t;
          try {
            (this.privIsSpeaking = !1),
              null === (e = this.privTranslationRecognizer) ||
                void 0 === e ||
                e.stopContinuousRecognitionAsync(),
              null === (t = this.privTranslationRecognizerConnection) ||
                void 0 === t ||
                t.closeConnection(),
              (this.privTranslationRecognizerConnection = void 0),
              (this.privTranslationRecognizer = void 0),
              (this.privSpeechState = n.Inactive);
          } catch (e) {}
        }),
        Object.defineProperty(e.prototype, "canSpeak", {
          get: function () {
            return (
              !!this.privConversation.isConnected &&
              !this.privIsSpeaking &&
              this.privSpeechState !== n.Connected &&
              this.privSpeechState !== n.Connecting &&
              !this.privConversation.isMutedByHost
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.handleCallback = function (e, t) {
          if (e) {
            try {
              e();
            } catch (e) {
              t && t(e);
            }
            e = void 0;
          }
        }),
        (e.prototype.handleError = function (e, t) {
          if (t)
            if (e instanceof Error) {
              var r = e;
              t(r.name + ": " + r.message);
            } else t(e);
        }),
        e
      );
    })();
    t.ConversationTranslator = p;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(29),
      i = (function () {
        function e(e) {
          this.privUserId = e;
        }
        return (
          Object.defineProperty(e.prototype, "userId", {
            get: function () {
              return this.privUserId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.User = i;
    var o = (function () {
      function e(e, t, r, i, o, s, a) {
        (this.privId = e),
          (this.privAvatar = t),
          (this.privDisplayName = r),
          (this.privIsHost = i),
          (this.privIsMuted = o),
          (this.privIsUsingTts = s),
          (this.privPreferredLanguage = a),
          (this.privPoperties = new n.PropertyCollection());
      }
      return (
        Object.defineProperty(e.prototype, "avatar", {
          get: function () {
            return this.privAvatar;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "displayName", {
          get: function () {
            return this.privDisplayName;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "preferredLanguage", {
          get: function () {
            return this.privPreferredLanguage;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isHost", {
          get: function () {
            return this.privIsHost;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isMuted", {
          get: function () {
            return this.privIsMuted;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isUsingTts", {
          get: function () {
            return this.privIsUsingTts;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "properties", {
          get: function () {
            return this.privPoperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.Participant = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.JoinedConversation = 0)] = "JoinedConversation"),
          (e[(e.LeftConversation = 1)] = "LeftConversation"),
          (e[(e.Updated = 2)] = "Updated");
      })(t.ParticipantChangedReason || (t.ParticipantChangedReason = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(4),
      o = r(32),
      s = r(37),
      a = r(36),
      c = r(31),
      p = r(29),
      u = (function () {
        function e(e, t) {
          var r = e;
          c.Contracts.throwIfNull(r, "speechConfig"),
            null !== t &&
              (this.audioConfig =
                void 0 !== t ? t : p.AudioConfig.fromDefaultSpeakerOutput()),
            (this.privProperties = r.properties.clone()),
            (this.privDisposed = !1),
            (this.privSynthesizing = !1),
            (this.privConnectionFactory =
              new n.SpeechSynthesisConnectionFactory()),
            (this.synthesisRequestQueue = new i.Queue()),
            this.implCommonRSynthesizeSetup();
        }
        return (
          Object.defineProperty(e.prototype, "authorizationToken", {
            get: function () {
              return this.properties.getProperty(
                p.PropertyId.SpeechServiceAuthorization_Token
              );
            },
            set: function (e) {
              c.Contracts.throwIfNullOrWhitespace(e, "token"),
                this.properties.setProperty(
                  p.PropertyId.SpeechServiceAuthorization_Token,
                  e
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.buildSsml = function (e, t) {
            var r,
              n =
                (((r = {})["ar-EG"] =
                  "Microsoft Server Speech Text to Speech Voice (ar-EG, Hoda)"),
                (r["ar-SA"] =
                  "Microsoft Server Speech Text to Speech Voice (ar-SA, Naayf)"),
                (r["bg-BG"] =
                  "Microsoft Server Speech Text to Speech Voice (bg-BG, Ivan)"),
                (r["ca-ES"] =
                  "Microsoft Server Speech Text to Speech Voice (ca-ES, HerenaRUS)"),
                (r["cs-CZ"] =
                  "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)"),
                (r["da-DK"] =
                  "Microsoft Server Speech Text to Speech Voice (da-DK, HelleRUS)"),
                (r["de-AT"] =
                  "Microsoft Server Speech Text to Speech Voice (de-AT, Michael)"),
                (r["de-CH"] =
                  "Microsoft Server Speech Text to Speech Voice (de-CH, Karsten)"),
                (r["de-DE"] =
                  "Microsoft Server Speech Text to Speech Voice (de-DE, HeddaRUS)"),
                (r["el-GR"] =
                  "Microsoft Server Speech Text to Speech Voice (el-GR, Stefanos)"),
                (r["en-AU"] =
                  "Microsoft Server Speech Text to Speech Voice (en-AU, HayleyRUS)"),
                (r["en-CA"] =
                  "Microsoft Server Speech Text to Speech Voice (en-CA, HeatherRUS)"),
                (r["en-GB"] =
                  "Microsoft Server Speech Text to Speech Voice (en-GB, HazelRUS)"),
                (r["en-IE"] =
                  "Microsoft Server Speech Text to Speech Voice (en-IE, Sean)"),
                (r["en-IN"] =
                  "Microsoft Server Speech Text to Speech Voice (en-IN, PriyaRUS)"),
                (r["en-US"] =
                  "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)"),
                (r["es-ES"] =
                  "Microsoft Server Speech Text to Speech Voice (es-ES, HelenaRUS)"),
                (r["es-MX"] =
                  "Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)"),
                (r["fi-FI"] =
                  "Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)"),
                (r["fr-CA"] =
                  "Microsoft Server Speech Text to Speech Voice (fr-CA, HarmonieRUS)"),
                (r["fr-CH"] =
                  "Microsoft Server Speech Text to Speech Voice (fr-CH, Guillaume)"),
                (r["fr-FR"] =
                  "Microsoft Server Speech Text to Speech Voice (fr-FR, HortenseRUS)"),
                (r["he-IL"] =
                  "Microsoft Server Speech Text to Speech Voice (he-IL, Asaf)"),
                (r["hi-IN"] =
                  "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana)"),
                (r["hr-HR"] =
                  "Microsoft Server Speech Text to Speech Voice (hr-HR, Matej)"),
                (r["hu-HU"] =
                  "Microsoft Server Speech Text to Speech Voice (hu-HU, Szabolcs)"),
                (r["id-ID"] =
                  "Microsoft Server Speech Text to Speech Voice (id-ID, Andika)"),
                (r["it-IT"] =
                  "Microsoft Server Speech Text to Speech Voice (it-IT, LuciaRUS)"),
                (r["ja-JP"] =
                  "Microsoft Server Speech Text to Speech Voice (ja-JP, HarukaRUS)"),
                (r["ko-KR"] =
                  "Microsoft Server Speech Text to Speech Voice (ko-KR, HeamiRUS)"),
                (r["ms-MY"] =
                  "Microsoft Server Speech Text to Speech Voice (ms-MY, Rizwan)"),
                (r["nb-NO"] =
                  "Microsoft Server Speech Text to Speech Voice (nb-NO, HuldaRUS)"),
                (r["nl-NL"] =
                  "Microsoft Server Speech Text to Speech Voice (nl-NL, HannaRUS)"),
                (r["pl-PL"] =
                  "Microsoft Server Speech Text to Speech Voice (pl-PL, PaulinaRUS)"),
                (r["pt-BR"] =
                  "Microsoft Server Speech Text to Speech Voice (pt-BR, HeloisaRUS)"),
                (r["pt-PT"] =
                  "Microsoft Server Speech Text to Speech Voice (pt-PT, HeliaRUS)"),
                (r["ro-RO"] =
                  "Microsoft Server Speech Text to Speech Voice (ro-RO, Andrei)"),
                (r["ru-RU"] =
                  "Microsoft Server Speech Text to Speech Voice (ru-RU, EkaterinaRUS)"),
                (r["sk-SK"] =
                  "Microsoft Server Speech Text to Speech Voice (sk-SK, Filip)"),
                (r["sl-SI"] =
                  "Microsoft Server Speech Text to Speech Voice (sl-SI, Lado)"),
                (r["sv-SE"] =
                  "Microsoft Server Speech Text to Speech Voice (sv-SE, HedvigRUS)"),
                (r["ta-IN"] =
                  "Microsoft Server Speech Text to Speech Voice (ta-IN, Valluvar)"),
                (r["te-IN"] =
                  "Microsoft Server Speech Text to Speech Voice (te-IN, Chitra)"),
                (r["th-TH"] =
                  "Microsoft Server Speech Text to Speech Voice (th-TH, Pattara)"),
                (r["tr-TR"] =
                  "Microsoft Server Speech Text to Speech Voice (tr-TR, SedaRUS)"),
                (r["vi-VN"] =
                  "Microsoft Server Speech Text to Speech Voice (vi-VN, An)"),
                (r["zh-CN"] =
                  "Microsoft Server Speech Text to Speech Voice (zh-CN, HuihuiRUS)"),
                (r["zh-HK"] =
                  "Microsoft Server Speech Text to Speech Voice (zh-HK, TracyRUS)"),
                (r["zh-TW"] =
                  "Microsoft Server Speech Text to Speech Voice (zh-TW, HanHanRUS)"),
                r),
              i = t.getProperty(
                p.PropertyId.SpeechServiceConnection_SynthLanguage,
                "en-US"
              );
            return (
              "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts' xmlns:emo='http://www.w3.org/2009/10/emotionml' xml:lang='" +
              i +
              "'><voice name='" +
              t.getProperty(
                p.PropertyId.SpeechServiceConnection_SynthVoice,
                n[i]
              ) +
              "'>" +
              this.XMLEncode(e) +
              "</voice></speak>"
            );
          }),
          (e.prototype.speakTextAsync = function (e, t, r, n) {
            this.speakImpl(e, !1, t, r, n);
          }),
          (e.prototype.speakSsmlAsync = function (e, t, r, n) {
            this.speakImpl(e, !0, t, r, n);
          }),
          (e.prototype.close = function () {
            c.Contracts.throwIfDisposed(this.privDisposed), this.dispose(!0);
          }),
          Object.defineProperty(e.prototype, "internalData", {
            get: function () {
              return this.privAdapter;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.dispose = function (e) {
            this.privDisposed ||
              (e && this.privAdapter && this.privAdapter.dispose(),
              (this.privDisposed = !0));
          }),
          (e.prototype.createSynthesizerConfig = function (e) {
            return new n.SynthesizerConfig(e, this.privProperties);
          }),
          (e.prototype.createSynthesisAdapter = function (e, t, r, i) {
            return new n.SynthesisAdapterBase(e, t, i, this, this.audioConfig);
          }),
          (e.prototype.implCommonRSynthesizeSetup = function () {
            var e = this,
              t = "undefined" != typeof window ? "Browser" : "Node",
              r = "unknown",
              o = "unknown";
            "undefined" != typeof navigator &&
              ((t = t + "/" + navigator.platform),
              (r = navigator.userAgent),
              (o = navigator.appVersion));
            var a = this.createSynthesizerConfig(
                new n.SpeechServiceConfig(new n.Context(new n.OS(t, r, o)))
              ),
              c = this.privProperties.getProperty(
                p.PropertyId.SpeechServiceConnection_Key,
                void 0
              ),
              u =
                c && "" !== c
                  ? new n.CognitiveSubscriptionKeyAuthentication(c)
                  : new n.CognitiveTokenAuthentication(
                      function (t) {
                        var r = e.privProperties.getProperty(
                          p.PropertyId.SpeechServiceAuthorization_Token,
                          void 0
                        );
                        return i.PromiseHelper.fromResult(r);
                      },
                      function (t) {
                        var r = e.privProperties.getProperty(
                          p.PropertyId.SpeechServiceAuthorization_Token,
                          void 0
                        );
                        return i.PromiseHelper.fromResult(r);
                      }
                    );
            (this.privAdapter = this.createSynthesisAdapter(
              u,
              this.privConnectionFactory,
              this.audioConfig,
              a
            )),
              (this.privAdapter.audioOutputFormat =
                s.AudioOutputFormatImpl.fromSpeechSynthesisOutputFormat(
                  p.SpeechSynthesisOutputFormat[
                    this.properties.getProperty(
                      p.PropertyId.SpeechServiceConnection_SynthOutputFormat,
                      void 0
                    )
                  ]
                ));
          }),
          (e.prototype.speakImpl = function (e, t, r, n, s) {
            var u = this;
            try {
              c.Contracts.throwIfDisposed(this.privDisposed);
              var f = i.createNoDashGuid(),
                h = void 0;
              (h =
                s instanceof p.PushAudioOutputStreamCallback
                  ? new a.PushAudioOutputStreamImpl(s)
                  : s instanceof p.PullAudioOutputStream
                  ? s
                  : void 0 !== s
                  ? new o.AudioFileWriter(s)
                  : void 0),
                this.synthesisRequestQueue.enqueue(
                  new v(
                    f,
                    e,
                    t,
                    function (e) {
                      if (((u.privSynthesizing = !1), r))
                        try {
                          r(e);
                        } catch (e) {
                          n && n(e);
                        }
                      (r = void 0), u.adapterSpeak();
                    },
                    function (e) {
                      n && n(e);
                    },
                    h
                  )
                ),
                this.adapterSpeak();
            } catch (e) {
              if (n)
                if (e instanceof Error) {
                  var l = e;
                  n(l.name + ": " + l.message);
                } else n(e);
              this.dispose(!0);
            }
          }),
          (e.prototype.adapterSpeak = function () {
            var e = this;
            return this.privDisposed || this.privSynthesizing
              ? i.PromiseHelper.fromResult(!0)
              : ((this.privSynthesizing = !0),
                this.synthesisRequestQueue
                  .dequeue()
                  .onSuccessContinueWithPromise(function (t) {
                    return e.privAdapter.Speak(
                      t.text,
                      t.isSSML,
                      t.requestId,
                      t.cb,
                      t.err,
                      t.dataStream
                    );
                  }));
          }),
          (e.XMLEncode = function (e) {
            return e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;");
          }),
          e
        );
      })();
    t.SpeechSynthesizer = u;
    var v = function (e, t, r, n, i, o) {
      (this.requestId = e),
        (this.text = t),
        (this.isSSML = r),
        (this.cb = n),
        (this.err = i),
        (this.dataStream = o);
    };
    t.SynthesisRequest = v;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t, r, n, i) {
        (this.privResultId = e),
          (this.privReason = t),
          (this.privAudioData = r),
          (this.privErrorDetails = n),
          (this.privProperties = i);
      }
      return (
        Object.defineProperty(e.prototype, "resultId", {
          get: function () {
            return this.privResultId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "reason", {
          get: function () {
            return this.privReason;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "audioData", {
          get: function () {
            return this.privAudioData;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "errorDetails", {
          get: function () {
            return this.privErrorDetails;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "properties", {
          get: function () {
            return this.privProperties;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechSynthesisResult = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privResult = e;
      }
      return (
        Object.defineProperty(e.prototype, "result", {
          get: function () {
            return this.privResult;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechSynthesisEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t, r, n) {
        (this.privAduioOffset = e),
          (this.privText = t),
          (this.privWordLength = r),
          (this.privTextOffset = n);
      }
      return (
        Object.defineProperty(e.prototype, "audioOffset", {
          get: function () {
            return this.privAduioOffset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "text", {
          get: function () {
            return this.privText;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "wordLength", {
          get: function () {
            return this.privWordLength;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "textOffset", {
          get: function () {
            return this.privTextOffset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechSynthesisWordBoundaryEventArgs = n;
  },
  function (e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(4),
      o = r(37),
      s =
        (((n = {})[o.AudioFormatTag.PCM] = "audio/wav"),
        (n[o.AudioFormatTag.MP3] = "audio/mpeg"),
        n),
      a = (function () {
        function e(e) {
          (this.privPlaybackStarted = !1),
            (this.privAppendingToBuffer = !1),
            (this.privMediaSourceOpened = !1),
            (this.privId = e || i.createNoDashGuid()),
            (this.privIsPaused = !1),
            (this.privIsClosed = !1);
        }
        return (
          (e.prototype.id = function () {
            return this.privId;
          }),
          (e.prototype.write = function (e) {
            void 0 !== this.privAudioBuffer &&
              (this.privAudioBuffer.push(e), this.updateSourceBuffer());
          }),
          (e.prototype.close = function () {
            (this.privIsClosed = !0),
              void 0 !== this.privSourceBuffer &&
                this.handleSourceBufferUpdateEnd();
          }),
          Object.defineProperty(e.prototype, "format", {
            set: function (e) {
              var t = this;
              if ("undefined" != typeof AudioContext) {
                this.privFormat = e;
                var r = s[this.privFormat.formatTag];
                void 0 !== r &&
                "undefined" != typeof MediaSource &&
                MediaSource.isTypeSupported(r)
                  ? ((this.privAudio = new Audio()),
                    (this.privAudioBuffer = []),
                    (this.privMediaSource = new MediaSource()),
                    (this.privAudio.src = URL.createObjectURL(
                      this.privMediaSource
                    )),
                    this.privAudio.load(),
                    (this.privMediaSource.onsourceopen = function (e) {
                      (t.privMediaSourceOpened = !0),
                        (t.privMediaSource.duration = 1800),
                        (t.privSourceBuffer =
                          t.privMediaSource.addSourceBuffer("audio/mpeg")),
                        (t.privSourceBuffer.onupdate = function (e) {
                          t.updateSourceBuffer();
                        }),
                        (t.privSourceBuffer.onupdateend = function (e) {
                          t.handleSourceBufferUpdateEnd();
                        }),
                        (t.privSourceBuffer.onupdatestart = function (e) {
                          t.privAppendingToBuffer = !1;
                        });
                    }),
                    this.updateSourceBuffer())
                  : console.warn(
                      "Format " +
                        o.AudioFormatTag[this.privFormat.formatTag] +
                        " is not supported for playback."
                    );
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "isClosed", {
            get: function () {
              return this.privIsClosed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "currentTime", {
            get: function () {
              return void 0 !== this.privAudio
                ? this.privAudio.currentTime
                : -1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.pause = function () {
            this.privIsPaused ||
              void 0 === this.privAudio ||
              (this.privAudio.pause(), (this.privIsPaused = !0));
          }),
          (e.prototype.resume = function () {
            this.privIsPaused &&
              void 0 !== this.privAudio &&
              (this.privAudio.play(), (this.privIsPaused = !1));
          }),
          Object.defineProperty(e.prototype, "internalAudio", {
            get: function () {
              return this.privAudio;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.updateSourceBuffer = function () {
            if (
              void 0 !== this.privAudioBuffer &&
              this.privAudioBuffer.length > 0 &&
              this.sourceBufferAvailable()
            ) {
              this.privAppendingToBuffer = !0;
              var e = this.privAudioBuffer.shift();
              try {
                this.privSourceBuffer.appendBuffer(e);
              } catch (t) {
                return (
                  this.privAudioBuffer.unshift(e),
                  void console.log(
                    "buffer filled, pausing addition of binaries until space is made"
                  )
                );
              }
              this.notifyPlayback();
            } else this.canEndStream() && this.handleSourceBufferUpdateEnd();
          }),
          (e.prototype.handleSourceBufferUpdateEnd = function () {
            this.canEndStream() &&
              this.sourceBufferAvailable() &&
              (this.privMediaSource.endOfStream(), this.notifyPlayback());
          }),
          (e.prototype.notifyPlayback = function () {
            var e = this;
            this.privPlaybackStarted ||
              void 0 === this.privAudio ||
              ((this.privAudio.onended = function () {
                e.onAudioEnd && e.onAudioEnd(e);
              }),
              this.privIsPaused || this.privAudio.play(),
              (this.privPlaybackStarted = !0));
          }),
          (e.prototype.canEndStream = function () {
            return (
              this.isClosed &&
              void 0 !== this.privSourceBuffer &&
              0 === this.privAudioBuffer.length &&
              this.privMediaSourceOpened &&
              !this.privAppendingToBuffer &&
              "open" === this.privMediaSource.readyState
            );
          }),
          (e.prototype.sourceBufferAvailable = function () {
            return (
              void 0 !== this.privSourceBuffer &&
              !this.privSourceBuffer.updating
            );
          }),
          e
        );
      })();
    t.SpeakerAudioDestination = a;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = (function (e) {
        function t(t, r, n, i) {
          void 0 === i && (i = o.EventType.Info);
          var s = e.call(this, t, i) || this;
          return (s.privRequestId = r), (s.privSessionId = n), s;
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "sessionId", {
            get: function () {
              return this.privSessionId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(o.PlatformEvent);
    t.SpeechRecognitionEvent = s;
    var a = (function (e) {
      function t(t, r, n, i) {
        var o = e.call(this, "RecognitionTriggeredEvent", t, r) || this;
        return (o.privAudioSourceId = n), (o.privAudioNodeId = i), o;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "audioSourceId", {
          get: function () {
            return this.privAudioSourceId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "audioNodeId", {
          get: function () {
            return this.privAudioNodeId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.RecognitionTriggeredEvent = a;
    var c = (function (e) {
      function t(t, r, n, i) {
        var o = e.call(this, "ListeningStartedEvent", t, r) || this;
        return (o.privAudioSourceId = n), (o.privAudioNodeId = i), o;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "audioSourceId", {
          get: function () {
            return this.privAudioSourceId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "audioNodeId", {
          get: function () {
            return this.privAudioNodeId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.ListeningStartedEvent = c;
    var p = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "ConnectingToServiceEvent", t, n) || this;
        return (i.privAuthFetchEventid = r), i;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "authFetchEventid", {
          get: function () {
            return this.privAuthFetchEventid;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.ConnectingToServiceEvent = p;
    var u,
      v = (function (e) {
        function t(t, r, n, i, o) {
          var s = e.call(this, "RecognitionStartedEvent", t, o) || this;
          return (
            (s.privAudioSourceId = r),
            (s.privAudioNodeId = n),
            (s.privAuthFetchEventId = i),
            s
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
              return this.privAudioSourceId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
              return this.privAudioNodeId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "authFetchEventId", {
            get: function () {
              return this.privAuthFetchEventId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(s);
    (t.RecognitionStartedEvent = v),
      (function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.AudioSourceError = 1)] = "AudioSourceError"),
          (e[(e.AudioSourceTimeout = 2)] = "AudioSourceTimeout"),
          (e[(e.AuthTokenFetchError = 3)] = "AuthTokenFetchError"),
          (e[(e.AuthTokenFetchTimeout = 4)] = "AuthTokenFetchTimeout"),
          (e[(e.UnAuthorized = 5)] = "UnAuthorized"),
          (e[(e.ConnectTimeout = 6)] = "ConnectTimeout"),
          (e[(e.ConnectError = 7)] = "ConnectError"),
          (e[(e.ClientRecognitionActivityTimeout = 8)] =
            "ClientRecognitionActivityTimeout"),
          (e[(e.UnknownError = 9)] = "UnknownError");
      })(
        (u =
          t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}))
      );
    var f = (function (e) {
      function t(t, r, n, i, s, a, c, p) {
        var v =
          e.call(
            this,
            "RecognitionEndedEvent",
            t,
            s,
            c === u.Success ? o.EventType.Info : o.EventType.Error
          ) || this;
        return (
          (v.privAudioSourceId = r),
          (v.privAudioNodeId = n),
          (v.privAuthFetchEventId = i),
          (v.privStatus = c),
          (v.privError = p),
          (v.privServiceTag = a),
          v
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "audioSourceId", {
          get: function () {
            return this.privAudioSourceId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "audioNodeId", {
          get: function () {
            return this.privAudioNodeId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "authFetchEventId", {
          get: function () {
            return this.privAuthFetchEventId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "serviceTag", {
          get: function () {
            return this.privServiceTag;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "status", {
          get: function () {
            return this.privStatus;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "error", {
          get: function () {
            return this.privError;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.RecognitionEndedEvent = f;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(2),
      i = r(4),
      o = r(29),
      s = r(24),
      a = r(108),
      c = (function () {
        function e(t, r, n, c, p) {
          var u = this;
          if (
            ((this.recognizeOverride = void 0),
            (this.disconnectOverride = void 0),
            (this.sendTelemetryData = function () {
              var t = u.privRequestSession.getTelemetry();
              if (
                !0 !== e.telemetryDataEnabled ||
                u.privIsDisposed ||
                null === t
              )
                return i.PromiseHelper.fromResult(!0);
              if (e.telemetryData)
                try {
                  e.telemetryData(t);
                } catch (e) {}
              return u.fetchConnection().onSuccessContinueWith(function (e) {
                return e.send(
                  new a.SpeechConnectionMessage(
                    i.MessageType.Text,
                    "telemetry",
                    u.privRequestSession.requestId,
                    "application/json",
                    t
                  )
                );
              });
            }),
            (this.receiveMessageOverride = void 0),
            (this.receiveMessage = function () {
              return u.fetchConnection().on(
                function (e) {
                  return e.read().onSuccessContinueWithPromise(function (e) {
                    if (void 0 !== u.receiveMessageOverride)
                      return u.receiveMessageOverride();
                    if (u.privIsDisposed)
                      return i.PromiseHelper.fromResult(void 0);
                    if (!e)
                      return u.privRequestSession.isRecognizing
                        ? u.receiveMessage()
                        : i.PromiseHelper.fromResult(!0);
                    u.privServiceHasSentMessage = !0;
                    var t = a.SpeechConnectionMessage.fromConnectionMessage(e);
                    if (
                      t.requestId.toLowerCase() ===
                      u.privRequestSession.requestId.toLowerCase()
                    )
                      switch (t.path.toLowerCase()) {
                        case "turn.start":
                          (u.privMustReportEndOfStream = !0),
                            u.privRequestSession.onServiceTurnStartResponse();
                          break;
                        case "speech.startdetected":
                          var r = s.SpeechDetected.fromJSON(t.textBody),
                            n = new o.RecognitionEventArgs(
                              r.Offset,
                              u.privRequestSession.sessionId
                            );
                          u.privRecognizer.speechStartDetected &&
                            u.privRecognizer.speechStartDetected(
                              u.privRecognizer,
                              n
                            );
                          break;
                        case "speech.enddetected":
                          var c = void 0;
                          c =
                            t.textBody.length > 0
                              ? t.textBody
                              : "{ Offset: 0 }";
                          var p = s.SpeechDetected.fromJSON(c);
                          u.privRecognizerConfig.isContinuousRecognition &&
                            u.privRequestSession.onServiceRecognized(
                              p.Offset +
                                u.privRequestSession.currentTurnAudioOffset
                            );
                          var v = new o.RecognitionEventArgs(
                            p.Offset +
                              u.privRequestSession.currentTurnAudioOffset,
                            u.privRequestSession.sessionId
                          );
                          u.privRecognizer.speechEndDetected &&
                            u.privRecognizer.speechEndDetected(
                              u.privRecognizer,
                              v
                            );
                          break;
                        case "turn.end":
                          u.sendTelemetryData(),
                            u.privRequestSession.isSpeechEnded &&
                              u.privMustReportEndOfStream &&
                              ((u.privMustReportEndOfStream = !1),
                              u.cancelRecognitionLocal(
                                o.CancellationReason.EndOfStream,
                                o.CancellationErrorCode.NoError,
                                void 0
                              ));
                          var f = new o.SessionEventArgs(
                            u.privRequestSession.sessionId
                          );
                          if (
                            (u.privRequestSession.onServiceTurnEndResponse(
                              u.privRecognizerConfig.isContinuousRecognition
                            ),
                            !u.privRecognizerConfig.isContinuousRecognition ||
                              u.privRequestSession.isSpeechEnded ||
                              !u.privRequestSession.isRecognizing)
                          )
                            return (
                              u.privRecognizer.sessionStopped &&
                                u.privRecognizer.sessionStopped(
                                  u.privRecognizer,
                                  f
                                ),
                              i.PromiseHelper.fromResult(!0)
                            );
                          u.fetchConnection().onSuccessContinueWith(function (
                            e
                          ) {
                            u.sendSpeechContext(e), u.sendWaveHeader(e);
                          });
                          break;
                        default:
                          u.processTypeSpecificMessages(t) ||
                            (u.privServiceEvents &&
                              u.serviceEvents.onEvent(
                                new i.ServiceEvent(
                                  t.path.toLowerCase(),
                                  t.textBody
                                )
                              ));
                      }
                    return u.receiveMessage();
                  });
                },
                function (e) {}
              );
            }),
            (this.sendSpeechContext = function (e) {
              var t = u.speechContext.toJSON();
              return t
                ? e.send(
                    new a.SpeechConnectionMessage(
                      i.MessageType.Text,
                      "speech.context",
                      u.privRequestSession.requestId,
                      "application/json",
                      t
                    )
                  )
                : i.PromiseHelper.fromResult(!0);
            }),
            (this.connectImplOverride = void 0),
            (this.configConnectionOverride = void 0),
            (this.fetchConnectionOverride = void 0),
            (this.sendSpeechServiceConfig = function (t, r, n) {
              if (!0 !== e.telemetryDataEnabled) {
                var o = { context: { system: JSON.parse(n).context.system } };
                n = JSON.stringify(o);
              }
              return n
                ? t.send(
                    new a.SpeechConnectionMessage(
                      i.MessageType.Text,
                      "speech.config",
                      r.requestId,
                      "application/json",
                      n
                    )
                  )
                : i.PromiseHelper.fromResult(!0);
            }),
            (this.sendAudio = function (e) {
              return u.audioSource.format.onSuccessContinueWithPromise(
                function (t) {
                  var r = new i.Deferred(),
                    n = Date.now(),
                    o = u.privRecognizerConfig.parameters.getProperty(
                      "SPEECH-TransmitLengthBeforThrottleMs",
                      "5000"
                    ),
                    s = (t.avgBytesPerSec / 1e3) * parseInt(o, 10),
                    c = u.privRequestSession.recogNumber,
                    p = function () {
                      u.privIsDisposed ||
                        u.privRequestSession.isSpeechEnded ||
                        !u.privRequestSession.isRecognizing ||
                        u.privRequestSession.recogNumber !== c ||
                        u.fetchConnection().on(
                          function (o) {
                            e.read().on(
                              function (e) {
                                var c, v;
                                u.privRequestSession.isSpeechEnded
                                  ? r.resolve(!0)
                                  : (!e || e.isEnd
                                      ? ((c = null), (v = 0))
                                      : ((c = e.buffer),
                                        u.privRequestSession.onAudioSent(
                                          c.byteLength
                                        ),
                                        (v =
                                          s >= u.privRequestSession.bytesSent
                                            ? 0
                                            : Math.max(0, n - Date.now()))),
                                    setTimeout(function () {
                                      var s;
                                      null !== c &&
                                        (n =
                                          Date.now() +
                                          (1e3 * c.byteLength) /
                                            (2 * t.avgBytesPerSec));
                                      var v = o.send(
                                        new a.SpeechConnectionMessage(
                                          i.MessageType.Binary,
                                          "audio",
                                          u.privRequestSession.requestId,
                                          null,
                                          c
                                        )
                                      );
                                      (
                                        null === (s = e) || void 0 === s
                                          ? void 0
                                          : s.isEnd
                                      )
                                        ? (u.privRequestSession.onSpeechEnded(),
                                          r.resolve(!0))
                                        : v.continueWith(function (e) {
                                            p();
                                          });
                                    }, v));
                              },
                              function (e) {
                                u.privRequestSession.isSpeechEnded
                                  ? r.resolve(!0)
                                  : r.reject(e);
                              }
                            );
                          },
                          function (e) {
                            r.reject(e);
                          }
                        );
                    };
                  return p(), r.promise();
                }
              );
            }),
            (this.fetchConnection = function () {
              return void 0 !== u.fetchConnectionOverride
                ? u.fetchConnectionOverride()
                : u.configureConnection();
            }),
            !t)
          )
            throw new i.ArgumentNullError("authentication");
          if (!r) throw new i.ArgumentNullError("connectionFactory");
          if (!n) throw new i.ArgumentNullError("audioSource");
          if (!c) throw new i.ArgumentNullError("recognizerConfig");
          (this.privMustReportEndOfStream = !1),
            (this.privAuthentication = t),
            (this.privConnectionFactory = r),
            (this.privAudioSource = n),
            (this.privRecognizerConfig = c),
            (this.privIsDisposed = !1),
            (this.privRecognizer = p),
            (this.privRequestSession = new s.RequestSession(
              this.privAudioSource.id()
            )),
            (this.privConnectionEvents = new i.EventSource()),
            (this.privServiceEvents = new i.EventSource()),
            (this.privDynamicGrammar = new s.DynamicGrammarBuilder()),
            (this.privSpeechContext = new s.SpeechContext(
              this.privDynamicGrammar
            )),
            (this.privAgentConfig = new s.AgentConfig());
        }
        return (
          Object.defineProperty(e.prototype, "audioSource", {
            get: function () {
              return this.privAudioSource;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "speechContext", {
            get: function () {
              return this.privSpeechContext;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "dynamicGrammar", {
            get: function () {
              return this.privDynamicGrammar;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "agentConfig", {
            get: function () {
              return this.privAgentConfig;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "conversationTranslatorToken", {
            set: function (e) {
              this.privRecognizerConfig.parameters.setProperty(
                o.PropertyId.ConversationTranslator_Token,
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.isDisposed = function () {
            return this.privIsDisposed;
          }),
          (e.prototype.dispose = function (e) {
            (this.privIsDisposed = !0),
              this.privConnectionConfigurationPromise &&
                this.privConnectionConfigurationPromise.onSuccessContinueWith(
                  function (t) {
                    t.dispose(e);
                  }
                );
          }),
          Object.defineProperty(e.prototype, "connectionEvents", {
            get: function () {
              return this.privConnectionEvents;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "serviceEvents", {
            get: function () {
              return this.privServiceEvents;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "recognitionMode", {
            get: function () {
              return this.privRecognizerConfig.recognitionMode;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.recognize = function (e, t, r) {
            var s = this;
            return void 0 !== this.recognizeOverride
              ? this.recognizeOverride(e, t, r)
              : ((this.privConnectionConfigurationPromise = null),
                (this.privRecognizerConfig.recognitionMode = e),
                (this.privSuccessCallback = t),
                (this.privErrorCallback = r),
                this.privRequestSession.startNewRecognition(),
                this.privRequestSession.listenForServiceTelemetry(
                  this.privAudioSource.events
                ),
                this.connectImpl(),
                this.audioSource
                  .attach(this.privRequestSession.audioNodeId)
                  .onSuccessContinueWithPromise(function (e) {
                    var t;
                    return s.audioSource.format.onSuccessContinueWithPromise(
                      function (r) {
                        return (
                          (t = new n.ReplayableAudioNode(e, r.avgBytesPerSec)),
                          s.privRequestSession.onAudioSourceAttachCompleted(
                            t,
                            !1
                          ),
                          s.audioSource.deviceInfo.onSuccessContinueWithPromise(
                            function (e) {
                              return (
                                (s.privRecognizerConfig.SpeechServiceConfig.Context.audio =
                                  { source: e }),
                                s
                                  .configureConnection()
                                  .continueWithPromise(function (e) {
                                    if (e.isError)
                                      return (
                                        s.cancelRecognitionLocal(
                                          o.CancellationReason.Error,
                                          o.CancellationErrorCode
                                            .ConnectionFailure,
                                          e.error
                                        ),
                                        i.PromiseHelper.fromError(e.error)
                                      );
                                    var r = new o.SessionEventArgs(
                                      s.privRequestSession.sessionId
                                    );
                                    s.privRecognizer.sessionStarted &&
                                      s.privRecognizer.sessionStarted(
                                        s.privRecognizer,
                                        r
                                      );
                                    s.receiveMessage();
                                    return (
                                      s.sendAudio(t).on(
                                        function (e) {},
                                        function (e) {
                                          s.cancelRecognitionLocal(
                                            o.CancellationReason.Error,
                                            o.CancellationErrorCode
                                              .RuntimeError,
                                            e
                                          );
                                        }
                                      ),
                                      i.PromiseHelper.fromResult(!0)
                                    );
                                  })
                              );
                            }
                          )
                        );
                      }
                    );
                  }));
          }),
          (e.prototype.stopRecognizing = function () {
            var e = this;
            return this.privRequestSession.isRecognizing
              ? (this.audioSource.turnOff(),
                this.sendFinalAudio().onSuccessContinueWithPromise(function (
                  t
                ) {
                  return (
                    e.privRequestSession.onStopRecognizing(),
                    e.privRequestSession.turnCompletionPromise.onSuccessContinueWith(
                      function (t) {
                        return (
                          e.privRequestSession.onStopRecognizing(),
                          e.privRequestSession.dispose(),
                          !0
                        );
                      }
                    )
                  );
                }))
              : i.PromiseHelper.fromResult(!0);
          }),
          (e.prototype.connect = function () {
            this.connectImpl().result();
          }),
          (e.prototype.connectAsync = function (e, t) {
            this.connectImpl().continueWith(function (r) {
              try {
                r.isError ? t && t(r.error) : r.isCompleted && e && e();
              } catch (e) {
                t && t(e);
              }
            });
          }),
          (e.prototype.disconnect = function () {
            void 0 === this.disconnectOverride
              ? (this.cancelRecognitionLocal(
                  o.CancellationReason.Error,
                  o.CancellationErrorCode.NoError,
                  "Disconnecting"
                ),
                this.privConnectionPromise.result().isCompleted
                  ? this.privConnectionPromise.result().isError ||
                    (this.privConnectionPromise.result().result.dispose(),
                    (this.privConnectionPromise = null))
                  : this.privConnectionPromise.onSuccessContinueWith(function (
                      e
                    ) {
                      e.dispose();
                    }))
              : this.disconnectOverride();
          }),
          (e.prototype.disconnectAsync = function (e, t) {
            try {
              if (void 0 !== this.disconnectOverride)
                return this.disconnectOverride(), void (e && e());
              this.cancelRecognitionLocal(
                o.CancellationReason.Error,
                o.CancellationErrorCode.NoError,
                "Disconnecting"
              ),
                this.privConnectionPromise.continueWith(function (r) {
                  try {
                    r.isError
                      ? t && t(r.error)
                      : r.isCompleted && (r.result.dispose(), e && e());
                  } catch (e) {
                    t && t(e);
                  }
                });
            } catch (e) {
              t && t(e);
            }
          }),
          (e.prototype.sendMessage = function (e) {}),
          Object.defineProperty(e.prototype, "activityTemplate", {
            get: function () {
              return this.privActivityTemplate;
            },
            set: function (e) {
              this.privActivityTemplate = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.cancelRecognitionLocal = function (e, t, r) {
            this.privRequestSession.isRecognizing &&
              (this.privRequestSession.onStopRecognizing(),
              this.cancelRecognition(
                this.privRequestSession.sessionId,
                this.privRequestSession.requestId,
                e,
                t,
                r
              ));
          }),
          (e.prototype.sendWaveHeader = function (e) {
            var t = this;
            return this.audioSource.format.onSuccessContinueWithPromise(
              function (r) {
                return e.send(
                  new a.SpeechConnectionMessage(
                    i.MessageType.Binary,
                    "audio",
                    t.privRequestSession.requestId,
                    "audio/x-wav",
                    r.header
                  )
                );
              }
            );
          }),
          (e.prototype.connectImpl = function (e) {
            var t = this;
            if ((void 0 === e && (e = !1), void 0 !== this.connectImplOverride))
              return this.connectImplOverride(e);
            if (this.privConnectionPromise)
              return this.privConnectionPromise.result().isCompleted &&
                (this.privConnectionPromise.result().isError ||
                  this.privConnectionPromise.result().result.state() ===
                    i.ConnectionState.Disconnected) &&
                !0 === this.privServiceHasSentMessage
                ? ((this.privConnectionId = null),
                  (this.privConnectionPromise = null),
                  (this.privServiceHasSentMessage = !1),
                  this.connectImpl())
                : this.privConnectionPromise;
            (this.privAuthFetchEventId = i.createNoDashGuid()),
              (this.privConnectionId = i.createNoDashGuid()),
              this.privRequestSession.onPreConnectionStart(
                this.privAuthFetchEventId,
                this.privConnectionId
              );
            var r = e
              ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId)
              : this.privAuthentication.fetch(this.privAuthFetchEventId);
            return (
              (this.privConnectionPromise = r.continueWithPromise(function (r) {
                if (r.isError)
                  throw (
                    (t.privRequestSession.onAuthCompleted(!0, r.error),
                    new Error(r.error))
                  );
                t.privRequestSession.onAuthCompleted(!1);
                var n = t.privConnectionFactory.create(
                  t.privRecognizerConfig,
                  r.result,
                  t.privConnectionId
                );
                return (
                  t.privRequestSession.listenForServiceTelemetry(n.events),
                  n.events.attach(function (e) {
                    t.connectionEvents.onEvent(e);
                  }),
                  n.open().onSuccessContinueWithPromise(function (r) {
                    return 200 === r.statusCode
                      ? (t.privRequestSession.onPreConnectionStart(
                          t.privAuthFetchEventId,
                          t.privConnectionId
                        ),
                        t.privRequestSession.onConnectionEstablishCompleted(
                          r.statusCode
                        ),
                        i.PromiseHelper.fromResult(n))
                      : 403 !== r.statusCode || e
                      ? (t.privRequestSession.onConnectionEstablishCompleted(
                          r.statusCode,
                          r.reason
                        ),
                        i.PromiseHelper.fromError(
                          "Unable to contact server. StatusCode: " +
                            r.statusCode +
                            ", " +
                            t.privRecognizerConfig.parameters.getProperty(
                              o.PropertyId.SpeechServiceConnection_Endpoint
                            ) +
                            " Reason: " +
                            r.reason
                        ))
                      : t.connectImpl(!0);
                  })
                );
              })),
              this.privConnectionPromise
            );
          }),
          (e.prototype.writeBufferToConsole = function (e) {
            var t = "Buffer Size: ";
            if (null === e) t += "null";
            else {
              var r = new Uint8Array(e);
              t += e.byteLength + "\r\n";
              for (var n = 0; n < e.byteLength; n++)
                t += r[n].toString(16).padStart(2, "0") + " ";
            }
            console.info(t);
          }),
          (e.prototype.sendFinalAudio = function () {
            var e = this,
              t = new i.Deferred();
            return (
              this.fetchConnection().on(
                function (r) {
                  r.send(
                    new a.SpeechConnectionMessage(
                      i.MessageType.Binary,
                      "audio",
                      e.privRequestSession.requestId,
                      null,
                      null
                    )
                  ).on(
                    function (e) {
                      t.resolve(!0);
                    },
                    function (e) {
                      t.reject(e);
                    }
                  );
                },
                function (e) {
                  t.reject(e);
                }
              ),
              t.promise()
            );
          }),
          (e.prototype.configureConnection = function () {
            var e = this;
            return void 0 !== this.configConnectionOverride
              ? this.configConnectionOverride()
              : this.privConnectionConfigurationPromise
              ? this.privConnectionConfigurationPromise.result().isCompleted &&
                (this.privConnectionConfigurationPromise.result().isError ||
                  this.privConnectionConfigurationPromise
                    .result()
                    .result.state() === i.ConnectionState.Disconnected)
                ? ((this.privConnectionConfigurationPromise = null),
                  this.configureConnection())
                : this.privConnectionConfigurationPromise
              : ((this.privConnectionConfigurationPromise =
                  this.connectImpl().onSuccessContinueWithPromise(function (t) {
                    return e
                      .sendSpeechServiceConfig(
                        t,
                        e.privRequestSession,
                        e.privRecognizerConfig.SpeechServiceConfig.serialize()
                      )
                      .onSuccessContinueWithPromise(function (r) {
                        return e
                          .sendSpeechContext(t)
                          .onSuccessContinueWithPromise(function (r) {
                            return e
                              .sendWaveHeader(t)
                              .onSuccessContinueWith(function (e) {
                                return t;
                              });
                          });
                      });
                  })),
                this.privConnectionConfigurationPromise);
          }),
          (e.telemetryDataEnabled = !0),
          e
        );
      })();
    t.ServiceRecognizerBase = c;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = "Path",
      a = "Content-Type",
      c = "X-RequestId",
      p = "X-Timestamp",
      u = "x-streamid",
      v = (function (e) {
        function t(t, r, n, i, v, f, h, l) {
          var d = this;
          if (!r) throw new o.ArgumentNullError("path");
          if (!n) throw new o.ArgumentNullError("requestId");
          var g = {};
          if (
            ((g[s] = r),
            (g[c] = n),
            (g[p] = new Date().toISOString()),
            i && (g[a] = i),
            f && (g[u] = f),
            h)
          )
            for (var y in h) y && (g[y] = h[y]);
          return (
            ((d = l
              ? e.call(this, t, v, g, l) || this
              : e.call(this, t, v, g) || this).privPath = r),
            (d.privRequestId = n),
            (d.privContentType = i),
            (d.privStreamId = f),
            (d.privAdditionalHeaders = h),
            d
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "path", {
            get: function () {
              return this.privPath;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "contentType", {
            get: function () {
              return this.privContentType;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "streamId", {
            get: function () {
              return this.privStreamId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "additionalHeaders", {
            get: function () {
              return this.privAdditionalHeaders;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.fromConnectionMessage = function (e) {
            var r = null,
              n = null,
              i = null,
              o = null,
              v = {};
            if (e.headers)
              for (var f in e.headers)
                f &&
                  (f.toLowerCase() === s.toLowerCase()
                    ? (r = e.headers[f])
                    : f.toLowerCase() === c.toLowerCase()
                    ? (n = e.headers[f])
                    : f.toLowerCase() === p.toLowerCase()
                    ? e.headers[f]
                    : f.toLowerCase() === a.toLowerCase()
                    ? (i = e.headers[f])
                    : f.toLowerCase() === u.toLowerCase()
                    ? (o = e.headers[f])
                    : (v[f] = e.headers[f]));
            return new t(e.messageType, r, n, i, e.body, o, v, e.id);
          }),
          t
        );
      })(o.ConnectionMessage);
    t.SpeechConnectionMessage = v;
  },
  function (e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Interactive = 0)] = "Interactive"),
          (e[(e.Conversation = 1)] = "Conversation"),
          (e[(e.Dictation = 2)] = "Dictation");
      })((n = t.RecognitionMode || (t.RecognitionMode = {}))),
      (function (e) {
        (e[(e.Simple = 0)] = "Simple"), (e[(e.Detailed = 1)] = "Detailed");
      })(t.SpeechResultFormat || (t.SpeechResultFormat = {}));
    var i = (function () {
      function e(e, t) {
        (this.privRecognitionMode = n.Interactive),
          (this.privSpeechServiceConfig = e || new o(new s(null))),
          (this.privParameters = t);
      }
      return (
        Object.defineProperty(e.prototype, "parameters", {
          get: function () {
            return this.privParameters;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "recognitionMode", {
          get: function () {
            return this.privRecognitionMode;
          },
          set: function (e) {
            (this.privRecognitionMode = e),
              (this.privRecognitionActivityTimeout =
                e === n.Interactive ? 8e3 : 25e3),
              (this.privSpeechServiceConfig.Recognition = n[e]);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "SpeechServiceConfig", {
          get: function () {
            return this.privSpeechServiceConfig;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "recognitionActivityTimeout", {
          get: function () {
            return this.privRecognitionActivityTimeout;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isContinuousRecognition", {
          get: function () {
            return this.privRecognitionMode !== n.Interactive;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.RecognizerConfig = i;
    var o = (function () {
      function e(e) {
        var t = this;
        (this.serialize = function () {
          return JSON.stringify(t, function (e, t) {
            if (t && "object" == typeof t) {
              var r = {};
              for (var n in t)
                Object.hasOwnProperty.call(t, n) &&
                  (r[n && n.charAt(0).toLowerCase() + n.substring(1)] = t[n]);
              return r;
            }
            return t;
          });
        }),
          (this.context = e);
      }
      return (
        Object.defineProperty(e.prototype, "Context", {
          get: function () {
            return this.context;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "Recognition", {
          get: function () {
            return this.recognition;
          },
          set: function (e) {
            this.recognition = e.toLowerCase();
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechServiceConfig = o;
    var s = function (e) {
      (this.system = new a()), (this.os = e);
    };
    t.Context = s;
    var a = function () {
      (this.name = "SpeechSDK"),
        (this.version = "1.12.0"),
        (this.build = "JavaScript"),
        (this.lang = "JavaScript");
    };
    t.System = a;
    var c = function (e, t, r) {
      (this.platform = e), (this.name = t), (this.version = r);
    };
    t.OS = c;
    var p = function (e, t, r) {
      (this.manufacturer = e), (this.model = t), (this.version = r);
    };
    (t.Device = p),
      (function (e) {
        (e.Bluetooth = "Bluetooth"),
          (e.Wired = "Wired"),
          (e.WiFi = "WiFi"),
          (e.Cellular = "Cellular"),
          (e.InBuilt = "InBuilt"),
          (e.Unknown = "Unknown");
      })(t.connectivity || (t.connectivity = {})),
      (function (e) {
        (e.Phone = "Phone"),
          (e.Speaker = "Speaker"),
          (e.Car = "Car"),
          (e.Headset = "Headset"),
          (e.Thermostat = "Thermostat"),
          (e.Microphones = "Microphones"),
          (e.Deskphone = "Deskphone"),
          (e.RemoteControl = "RemoteControl"),
          (e.Unknown = "Unknown"),
          (e.File = "File"),
          (e.Stream = "Stream");
      })(t.type || (t.type = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = "\r\n",
      o = function () {
        var e = this;
        (this.toConnectionMessage = function (t) {
          var r = new n.Deferred();
          try {
            if (t.messageType === n.MessageType.Text) {
              var i = t.textContent,
                o = {},
                s = null;
              if (i) {
                var a = i.split("\r\n\r\n");
                a &&
                  a.length > 0 &&
                  ((o = e.parseHeaders(a[0])), a.length > 1 && (s = a[1]));
              }
              r.resolve(new n.ConnectionMessage(t.messageType, s, o, t.id));
            } else if (t.messageType === n.MessageType.Binary) {
              var c = t.binaryContent;
              if (((o = {}), (s = null), !c || c.byteLength < 2))
                throw new Error(
                  "Invalid binary message format. Header length missing."
                );
              var p = new DataView(c),
                u = p.getInt16(0);
              if (c.byteLength < u + 2)
                throw new Error(
                  "Invalid binary message format. Header content missing."
                );
              for (var v = "", f = 0; f < u; f++)
                v += String.fromCharCode(p.getInt8(f + 2));
              (o = e.parseHeaders(v)),
                c.byteLength > u + 2 && (s = c.slice(2 + u)),
                r.resolve(new n.ConnectionMessage(t.messageType, s, o, t.id));
            }
          } catch (e) {
            r.reject("Error formatting the message. Error: " + e);
          }
          return r.promise();
        }),
          (this.fromConnectionMessage = function (t) {
            var r = new n.Deferred();
            try {
              if (t.messageType === n.MessageType.Text) {
                var o =
                  "" + e.makeHeaders(t) + i + (t.textBody ? t.textBody : "");
                r.resolve(
                  new n.RawWebsocketMessage(n.MessageType.Text, o, t.id)
                );
              } else if (t.messageType === n.MessageType.Binary) {
                var s = e.makeHeaders(t),
                  a = t.binaryBody,
                  c = new Int8Array(e.stringToArrayBuffer(s)),
                  p =
                    ((o = new ArrayBuffer(
                      2 + c.byteLength + (a ? a.byteLength : 0)
                    )),
                    new DataView(o));
                p.setInt16(0, c.length);
                for (var u = 0; u < c.byteLength; u++) p.setInt8(2 + u, c[u]);
                if (a) {
                  var v = new Int8Array(a);
                  for (u = 0; u < v.byteLength; u++)
                    p.setInt8(2 + c.byteLength + u, v[u]);
                }
                r.resolve(
                  new n.RawWebsocketMessage(n.MessageType.Binary, o, t.id)
                );
              }
            } catch (e) {
              r.reject("Error formatting the message. " + e);
            }
            return r.promise();
          }),
          (this.makeHeaders = function (e) {
            var t = "";
            if (e.headers)
              for (var r in e.headers) r && (t += r + ": " + e.headers[r] + i);
            return t;
          }),
          (this.parseHeaders = function (e) {
            var t = {};
            if (e) {
              var r = e.match(/[^\r\n]+/g);
              if (t)
                for (var n = 0, i = r; n < i.length; n++) {
                  var o = i[n];
                  if (o) {
                    var s = o.indexOf(":"),
                      a = s > 0 ? o.substr(0, s).trim().toLowerCase() : o,
                      c =
                        s > 0 && o.length > s + 1 ? o.substr(s + 1).trim() : "";
                    t[a] = c;
                  }
                }
            }
            return t;
          }),
          (this.stringToArrayBuffer = function (e) {
            for (
              var t = new ArrayBuffer(e.length), r = new DataView(t), n = 0;
              n < e.length;
              n++
            )
              r.setUint8(n, e.charCodeAt(n));
            return t;
          });
      };
    t.WebsocketMessageFormatter = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(29),
      a = r(65),
      c = r(24),
      p = r(66),
      u = "X-ConnectionId",
      v = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.create = function (e, r, n) {
              var i = e.parameters.getProperty(
                s.PropertyId.SpeechServiceConnection_Endpoint,
                void 0
              );
              if (!i) {
                var a = e.parameters.getProperty(
                    s.PropertyId.SpeechServiceConnection_Region,
                    void 0
                  ),
                  v =
                    a && a.toLowerCase().startsWith("china")
                      ? ".azure.cn"
                      : ".microsoft.com";
                i =
                  e.parameters.getProperty(
                    s.PropertyId.SpeechServiceConnection_Host,
                    "wss://" + a + ".s2s.speech" + v
                  ) + "/speech/translation/cognitiveservices/v1";
              }
              var f = {
                from: e.parameters.getProperty(
                  s.PropertyId.SpeechServiceConnection_RecoLanguage
                ),
                to: e.parameters.getProperty(
                  s.PropertyId.SpeechServiceConnection_TranslationToLanguages
                ),
              };
              t.setCommonUrlParams(e, f, i),
                t.setUrlParameter(
                  s.PropertyId
                    .SpeechServiceResponse_TranslationRequestStablePartialResult,
                  p.QueryParameterNames.StableTranslation,
                  e,
                  f,
                  i
                );
              void 0 !==
                e.parameters.getProperty(
                  s.PropertyId.SpeechServiceConnection_TranslationVoice,
                  void 0
                ) &&
                ((f.voice = e.parameters.getProperty(
                  s.PropertyId.SpeechServiceConnection_TranslationVoice
                )),
                (f.features = "texttospeech"));
              var h = {};
              return (
                void 0 !== r.token &&
                  "" !== r.token &&
                  (h[r.headerName] = r.token),
                (h[u] = n),
                e.parameters.setProperty(
                  s.PropertyId.SpeechServiceConnection_Url,
                  i
                ),
                new o.WebsocketConnection(
                  i,
                  f,
                  h,
                  new c.WebsocketMessageFormatter(),
                  o.ProxyInfo.fromRecognizerConfig(e),
                  n
                )
              );
            }),
            t
          );
        }
        return i(t, e), t;
      })(a.ConnectionFactoryBase);
    t.TranslationConnectionFactory = v;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(2),
      i = r(29),
      o = r(24),
      s = r(66),
      a = function () {
        var e = this;
        (this.synthesisUri = "/cognitiveservices/websocket/v1"),
          (this.create = function (t, r, a) {
            var c = t.parameters.getProperty(
                i.PropertyId.SpeechServiceConnection_Endpoint,
                void 0
              ),
              p = t.parameters.getProperty(
                i.PropertyId.SpeechServiceConnection_Region,
                void 0
              ),
              u =
                p && p.toLowerCase().startsWith("china")
                  ? ".azure.cn"
                  : ".microsoft.com",
              v = t.parameters.getProperty(
                i.PropertyId.SpeechServiceConnection_Host,
                "wss://" + p + ".tts.speech" + u
              );
            c || (c = v + e.synthesisUri);
            var f = {};
            return (
              void 0 !== r.token &&
                "" !== r.token &&
                (f[r.headerName] = r.token),
              (f[s.QueryParameterNames.ConnectionIdHeader] = a),
              t.parameters.setProperty(
                i.PropertyId.SpeechServiceConnection_Url,
                c
              ),
              new n.WebsocketConnection(
                c,
                {},
                f,
                new o.WebsocketMessageFormatter(),
                n.ProxyInfo.fromParameters(t.parameters),
                a
              )
            );
          });
      };
    t.SpeechSynthesisConnectionFactory = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(29),
      i = r(24),
      o = (function () {
        function e() {}
        return (
          (e.implTranslateRecognitionResult = function (e) {
            var t = n.ResultReason.Canceled;
            switch (e) {
              case i.RecognitionStatus.Success:
                t = n.ResultReason.RecognizedSpeech;
                break;
              case i.RecognitionStatus.NoMatch:
              case i.RecognitionStatus.InitialSilenceTimeout:
              case i.RecognitionStatus.BabbleTimeout:
              case i.RecognitionStatus.EndOfDictation:
                t = n.ResultReason.NoMatch;
                break;
              case i.RecognitionStatus.Error:
              default:
                t = n.ResultReason.Canceled;
            }
            return t;
          }),
          (e.implTranslateCancelResult = function (e) {
            var t = n.CancellationReason.EndOfStream;
            switch (e) {
              case i.RecognitionStatus.Success:
              case i.RecognitionStatus.EndOfDictation:
              case i.RecognitionStatus.NoMatch:
                t = n.CancellationReason.EndOfStream;
                break;
              case i.RecognitionStatus.InitialSilenceTimeout:
              case i.RecognitionStatus.BabbleTimeout:
              case i.RecognitionStatus.Error:
              default:
                t = n.CancellationReason.Error;
            }
            return t;
          }),
          (e.implTranslateCancelErrorCode = function (e) {
            var t = n.CancellationErrorCode.NoError;
            switch (e) {
              case i.RecognitionStatus.Error:
                t = n.CancellationErrorCode.ServiceError;
                break;
              case i.RecognitionStatus.TooManyRequests:
                t = n.CancellationErrorCode.TooManyRequests;
                break;
              default:
                t = n.CancellationErrorCode.NoError;
            }
            return t;
          }),
          e
        );
      })();
    t.EnumTranslation = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.SynthesisEnd = 1)] = "SynthesisEnd"),
          (e[(e.Error = 2)] = "Error");
      })(t.SynthesisStatus || (t.SynthesisStatus = {})),
      (function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.NoMatch = 1)] = "NoMatch"),
          (e[(e.InitialSilenceTimeout = 2)] = "InitialSilenceTimeout"),
          (e[(e.BabbleTimeout = 3)] = "BabbleTimeout"),
          (e[(e.Error = 4)] = "Error"),
          (e[(e.EndOfDictation = 5)] = "EndOfDictation"),
          (e[(e.TooManyRequests = 6)] = "TooManyRequests");
      })(t.RecognitionStatus || (t.RecognitionStatus = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = (function () {
        function e(e) {
          (this.privSynthesisEnd = JSON.parse(e)),
            (this.privSynthesisEnd.SynthesisStatus =
              n.SynthesisStatus[this.privSynthesisEnd.SynthesisStatus]);
        }
        return (
          (e.fromJSON = function (t) {
            return new e(t);
          }),
          Object.defineProperty(e.prototype, "SynthesisStatus", {
            get: function () {
              return this.privSynthesisEnd.SynthesisStatus;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "FailureReason", {
            get: function () {
              return this.privSynthesisEnd.FailureReason;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.TranslationSynthesisEnd = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(21),
      i = (function () {
        function e(e) {
          (this.privTranslationHypothesis = JSON.parse(e)),
            (this.privTranslationHypothesis.Translation.TranslationStatus =
              n.TranslationStatus[
                this.privTranslationHypothesis.Translation.TranslationStatus
              ]);
        }
        return (
          (e.fromJSON = function (t) {
            return new e(t);
          }),
          Object.defineProperty(e.prototype, "Duration", {
            get: function () {
              return this.privTranslationHypothesis.Duration;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Offset", {
            get: function () {
              return this.privTranslationHypothesis.Offset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Text", {
            get: function () {
              return this.privTranslationHypothesis.Text;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Translation", {
            get: function () {
              return this.privTranslationHypothesis.Translation;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.TranslationHypothesis = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(21),
      o = (function () {
        function e(e) {
          (this.privTranslationPhrase = JSON.parse(e)),
            (this.privTranslationPhrase.RecognitionStatus =
              n.RecognitionStatus[
                this.privTranslationPhrase.RecognitionStatus
              ]),
            void 0 !== this.privTranslationPhrase.Translation &&
              (this.privTranslationPhrase.Translation.TranslationStatus =
                i.TranslationStatus[
                  this.privTranslationPhrase.Translation.TranslationStatus
                ]);
        }
        return (
          (e.fromJSON = function (t) {
            return new e(t);
          }),
          Object.defineProperty(e.prototype, "RecognitionStatus", {
            get: function () {
              return this.privTranslationPhrase.RecognitionStatus;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Offset", {
            get: function () {
              return this.privTranslationPhrase.Offset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Duration", {
            get: function () {
              return this.privTranslationPhrase.Duration;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Text", {
            get: function () {
              return this.privTranslationPhrase.Text;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Translation", {
            get: function () {
              return this.privTranslationPhrase.Translation;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.TranslationPhrase = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = r(29),
      a = r(24),
      c = (function (e) {
        function t(t, r, n, i, o) {
          var s = e.call(this, t, r, n, i, o) || this;
          return (s.privTranslationRecognizer = o), s;
        }
        return (
          i(t, e),
          (t.prototype.processTypeSpecificMessages = function (e) {
            var t = new s.PropertyCollection(),
              r = !1;
            switch (
              (e.messageType === o.MessageType.Text &&
                t.setProperty(
                  s.PropertyId.SpeechServiceResponse_JsonResult,
                  e.textBody
                ),
              e.path.toLowerCase())
            ) {
              case "translation.hypothesis":
                var n = this.fireEventForResult(
                  a.TranslationHypothesis.fromJSON(e.textBody),
                  t
                );
                if (
                  (this.privRequestSession.onHypothesis(
                    this.privRequestSession.currentTurnAudioOffset + n.offset
                  ),
                  this.privTranslationRecognizer.recognizing)
                )
                  try {
                    this.privTranslationRecognizer.recognizing(
                      this.privTranslationRecognizer,
                      n
                    );
                  } catch (e) {}
                r = !0;
                break;
              case "translation.phrase":
                var i = a.TranslationPhrase.fromJSON(e.textBody);
                if (
                  (this.privRequestSession.onPhraseRecognized(
                    this.privRequestSession.currentTurnAudioOffset +
                      i.Offset +
                      i.Duration
                  ),
                  i.RecognitionStatus === a.RecognitionStatus.Success)
                ) {
                  var c = this.fireEventForResult(i, t);
                  if (this.privTranslationRecognizer.recognized)
                    try {
                      this.privTranslationRecognizer.recognized(
                        this.privTranslationRecognizer,
                        c
                      );
                    } catch (e) {}
                  if (this.privSuccessCallback) {
                    try {
                      this.privSuccessCallback(c.result);
                    } catch (e) {
                      this.privErrorCallback && this.privErrorCallback(e);
                    }
                    (this.privSuccessCallback = void 0),
                      (this.privErrorCallback = void 0);
                  }
                  break;
                }
                var p = a.EnumTranslation.implTranslateRecognitionResult(
                    i.RecognitionStatus
                  ),
                  u = new s.TranslationRecognitionResult(
                    void 0,
                    this.privRequestSession.requestId,
                    p,
                    i.Text,
                    i.Duration,
                    this.privRequestSession.currentTurnAudioOffset + i.Offset,
                    void 0,
                    e.textBody,
                    t
                  );
                if (p === s.ResultReason.Canceled) {
                  var v = a.EnumTranslation.implTranslateCancelResult(
                    i.RecognitionStatus
                  );
                  this.cancelRecognitionLocal(
                    v,
                    a.EnumTranslation.implTranslateCancelErrorCode(
                      i.RecognitionStatus
                    ),
                    void 0
                  );
                } else {
                  if (
                    !this.privRequestSession.isSpeechEnded ||
                    p !== s.ResultReason.NoMatch ||
                    i.RecognitionStatus ===
                      a.RecognitionStatus.InitialSilenceTimeout
                  ) {
                    var f = new s.TranslationRecognitionEventArgs(
                      u,
                      u.offset,
                      this.privRequestSession.sessionId
                    );
                    if (this.privTranslationRecognizer.recognized)
                      try {
                        this.privTranslationRecognizer.recognized(
                          this.privTranslationRecognizer,
                          f
                        );
                      } catch (e) {}
                  }
                  if (this.privSuccessCallback) {
                    try {
                      this.privSuccessCallback(u);
                    } catch (e) {
                      this.privErrorCallback && this.privErrorCallback(e);
                    }
                    (this.privSuccessCallback = void 0),
                      (this.privErrorCallback = void 0);
                  }
                }
                r = !0;
                break;
              case "translation.synthesis":
                this.sendSynthesisAudio(
                  e.binaryBody,
                  this.privRequestSession.sessionId
                ),
                  (r = !0);
                break;
              case "translation.synthesis.end":
                var h = a.TranslationSynthesisEnd.fromJSON(e.textBody);
                switch (h.SynthesisStatus) {
                  case a.SynthesisStatus.Error:
                    if (this.privTranslationRecognizer.synthesizing) {
                      var l = new s.TranslationSynthesisResult(
                          s.ResultReason.Canceled,
                          void 0
                        ),
                        d = new s.TranslationSynthesisEventArgs(
                          l,
                          this.privRequestSession.sessionId
                        );
                      try {
                        this.privTranslationRecognizer.synthesizing(
                          this.privTranslationRecognizer,
                          d
                        );
                      } catch (e) {}
                    }
                    if (this.privTranslationRecognizer.canceled) {
                      var g = new s.TranslationRecognitionCanceledEventArgs(
                        this.privRequestSession.sessionId,
                        s.CancellationReason.Error,
                        h.FailureReason,
                        s.CancellationErrorCode.ServiceError,
                        null
                      );
                      try {
                        this.privTranslationRecognizer.canceled(
                          this.privTranslationRecognizer,
                          g
                        );
                      } catch (e) {}
                    }
                    break;
                  case a.SynthesisStatus.Success:
                    this.sendSynthesisAudio(
                      void 0,
                      this.privRequestSession.sessionId
                    );
                }
                r = !0;
            }
            return r;
          }),
          (t.prototype.cancelRecognition = function (e, t, r, n, i) {
            var o = new s.PropertyCollection();
            if (
              (o.setProperty(
                a.CancellationErrorCodePropertyName,
                s.CancellationErrorCode[n]
              ),
              this.privTranslationRecognizer.canceled)
            ) {
              var c = new s.TranslationRecognitionCanceledEventArgs(
                e,
                r,
                i,
                n,
                void 0
              );
              try {
                this.privTranslationRecognizer.canceled(
                  this.privTranslationRecognizer,
                  c
                );
              } catch (e) {}
            }
            if (this.privSuccessCallback) {
              var p = new s.TranslationRecognitionResult(
                void 0,
                t,
                s.ResultReason.Canceled,
                void 0,
                void 0,
                void 0,
                i,
                void 0,
                o
              );
              try {
                this.privSuccessCallback(p),
                  (this.privSuccessCallback = void 0);
              } catch (e) {}
            }
          }),
          (t.prototype.fireEventForResult = function (e, t) {
            var r, n;
            if (void 0 !== e.Translation.Translations) {
              r = new s.Translations();
              for (
                var i = 0, c = e.Translation.Translations;
                i < c.length;
                i++
              ) {
                var p = c[i];
                r.set(p.Language, p.Text);
              }
            }
            n =
              e instanceof a.TranslationPhrase
                ? e.Translation.TranslationStatus ===
                  o.TranslationStatus.Success
                  ? s.ResultReason.TranslatedSpeech
                  : s.ResultReason.RecognizedSpeech
                : s.ResultReason.TranslatingSpeech;
            var u = e.Offset + this.privRequestSession.currentTurnAudioOffset,
              v = new s.TranslationRecognitionResult(
                r,
                this.privRequestSession.requestId,
                n,
                e.Text,
                e.Duration,
                u,
                e.Translation.FailureReason,
                JSON.stringify(e),
                t
              );
            return new s.TranslationRecognitionEventArgs(
              v,
              u,
              this.privRequestSession.sessionId
            );
          }),
          (t.prototype.sendSynthesisAudio = function (e, t) {
            var r =
                void 0 === e
                  ? s.ResultReason.SynthesizingAudioCompleted
                  : s.ResultReason.SynthesizingAudio,
              n = new s.TranslationSynthesisResult(r, e),
              i = new s.TranslationSynthesisEventArgs(n, t);
            if (this.privTranslationRecognizer.synthesizing)
              try {
                this.privTranslationRecognizer.synthesizing(
                  this.privTranslationRecognizer,
                  i
                );
              } catch (e) {}
          }),
          t
        );
      })(a.ServiceRecognizerBase);
    t.TranslationServiceRecognizer = c;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privSpeechStartDetected = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "Offset", {
          get: function () {
            return this.privSpeechStartDetected.Offset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechDetected = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privSpeechHypothesis = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "Text", {
          get: function () {
            return this.privSpeechHypothesis.Text;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "Offset", {
          get: function () {
            return this.privSpeechHypothesis.Offset;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "Duration", {
          get: function () {
            return this.privSpeechHypothesis.Duration;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechHypothesis = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(29),
      s = r(24),
      a = (function (e) {
        function t(t, r, n, i, o) {
          var s = e.call(this, t, r, n, i, o) || this;
          return (s.privSpeechRecognizer = o), s;
        }
        return (
          i(t, e),
          (t.prototype.processTypeSpecificMessages = function (e) {
            var t,
              r = new o.PropertyCollection();
            r.setProperty(
              o.PropertyId.SpeechServiceResponse_JsonResult,
              e.textBody
            );
            var n = !1;
            switch (e.path.toLowerCase()) {
              case "speech.hypothesis":
              case "speech.fragment":
                var i = s.SpeechHypothesis.fromJSON(e.textBody),
                  a = i.Offset + this.privRequestSession.currentTurnAudioOffset;
                (t = new o.SpeechRecognitionResult(
                  this.privRequestSession.requestId,
                  o.ResultReason.RecognizingSpeech,
                  i.Text,
                  i.Duration,
                  a,
                  void 0,
                  e.textBody,
                  r
                )),
                  this.privRequestSession.onHypothesis(a);
                var c = new o.SpeechRecognitionEventArgs(
                  t,
                  i.Duration,
                  this.privRequestSession.sessionId
                );
                if (this.privSpeechRecognizer.recognizing)
                  try {
                    this.privSpeechRecognizer.recognizing(
                      this.privSpeechRecognizer,
                      c
                    );
                  } catch (e) {}
                n = !0;
                break;
              case "speech.phrase":
                var p = s.SimpleSpeechPhrase.fromJSON(e.textBody),
                  u = s.EnumTranslation.implTranslateRecognitionResult(
                    p.RecognitionStatus
                  );
                if (
                  (this.privRequestSession.onPhraseRecognized(
                    this.privRequestSession.currentTurnAudioOffset +
                      p.Offset +
                      p.Duration
                  ),
                  o.ResultReason.Canceled === u)
                ) {
                  var v = s.EnumTranslation.implTranslateCancelResult(
                    p.RecognitionStatus
                  );
                  this.cancelRecognitionLocal(
                    v,
                    s.EnumTranslation.implTranslateCancelErrorCode(
                      p.RecognitionStatus
                    ),
                    void 0
                  );
                } else {
                  if (
                    !this.privRequestSession.isSpeechEnded ||
                    u !== o.ResultReason.NoMatch ||
                    p.RecognitionStatus ===
                      s.RecognitionStatus.InitialSilenceTimeout
                  ) {
                    if (
                      this.privRecognizerConfig.parameters.getProperty(
                        s.OutputFormatPropertyName
                      ) === o.OutputFormat[o.OutputFormat.Simple]
                    )
                      t = new o.SpeechRecognitionResult(
                        this.privRequestSession.requestId,
                        u,
                        p.DisplayText,
                        p.Duration,
                        p.Offset +
                          this.privRequestSession.currentTurnAudioOffset,
                        void 0,
                        e.textBody,
                        r
                      );
                    else {
                      var f = s.DetailedSpeechPhrase.fromJSON(e.textBody);
                      t = new o.SpeechRecognitionResult(
                        this.privRequestSession.requestId,
                        u,
                        f.RecognitionStatus === s.RecognitionStatus.Success
                          ? f.NBest[0].Display
                          : void 0,
                        f.Duration,
                        f.Offset +
                          this.privRequestSession.currentTurnAudioOffset,
                        void 0,
                        e.textBody,
                        r
                      );
                    }
                    var h = new o.SpeechRecognitionEventArgs(
                      t,
                      t.offset,
                      this.privRequestSession.sessionId
                    );
                    if (this.privSpeechRecognizer.recognized)
                      try {
                        this.privSpeechRecognizer.recognized(
                          this.privSpeechRecognizer,
                          h
                        );
                      } catch (e) {}
                  }
                  if (this.privSuccessCallback) {
                    try {
                      this.privSuccessCallback(t);
                    } catch (e) {
                      this.privErrorCallback && this.privErrorCallback(e);
                    }
                    (this.privSuccessCallback = void 0),
                      (this.privErrorCallback = void 0);
                  }
                }
                n = !0;
            }
            return n;
          }),
          (t.prototype.cancelRecognition = function (e, t, r, n, i) {
            var a = new o.PropertyCollection();
            if (
              (a.setProperty(
                s.CancellationErrorCodePropertyName,
                o.CancellationErrorCode[n]
              ),
              this.privSpeechRecognizer.canceled)
            ) {
              var c = new o.SpeechRecognitionCanceledEventArgs(
                r,
                i,
                n,
                void 0,
                e
              );
              try {
                this.privSpeechRecognizer.canceled(
                  this.privSpeechRecognizer,
                  c
                );
              } catch (e) {}
            }
            if (this.privSuccessCallback) {
              var p = new o.SpeechRecognitionResult(
                t,
                o.ResultReason.Canceled,
                void 0,
                void 0,
                void 0,
                i,
                void 0,
                a
              );
              try {
                this.privSuccessCallback(p),
                  (this.privSuccessCallback = void 0);
              } catch (e) {}
            }
          }),
          t
        );
      })(s.ServiceRecognizerBase);
    t.SpeechServiceRecognizer = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = (function () {
        function e(e) {
          (this.privDetailedSpeechPhrase = JSON.parse(e)),
            (this.privDetailedSpeechPhrase.RecognitionStatus =
              n.RecognitionStatus[
                this.privDetailedSpeechPhrase.RecognitionStatus
              ]);
        }
        return (
          (e.fromJSON = function (t) {
            return new e(t);
          }),
          Object.defineProperty(e.prototype, "RecognitionStatus", {
            get: function () {
              return this.privDetailedSpeechPhrase.RecognitionStatus;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "NBest", {
            get: function () {
              return this.privDetailedSpeechPhrase.NBest;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Duration", {
            get: function () {
              return this.privDetailedSpeechPhrase.Duration;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Offset", {
            get: function () {
              return this.privDetailedSpeechPhrase.Offset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.DetailedSpeechPhrase = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = (function () {
        function e(e) {
          (this.privSimpleSpeechPhrase = JSON.parse(e)),
            (this.privSimpleSpeechPhrase.RecognitionStatus =
              n.RecognitionStatus[
                this.privSimpleSpeechPhrase.RecognitionStatus
              ]);
        }
        return (
          (e.fromJSON = function (t) {
            return new e(t);
          }),
          Object.defineProperty(e.prototype, "RecognitionStatus", {
            get: function () {
              return this.privSimpleSpeechPhrase.RecognitionStatus;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "DisplayText", {
            get: function () {
              return this.privSimpleSpeechPhrase.DisplayText;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Offset", {
            get: function () {
              return this.privSimpleSpeechPhrase.Offset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Duration", {
            get: function () {
              return this.privSimpleSpeechPhrase.Duration;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.SimpleSpeechPhrase = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function (e, t) {
      (this.modelImpl = e), (this.intentName = t);
    };
    t.AddedLmIntent = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = r(29),
      a = r(24),
      c = (function (e) {
        function t(t, r, n, i, o) {
          var s = e.call(this, t, r, n, i, o) || this;
          return (s.privIntentRecognizer = o), (s.privIntentDataSent = !1), s;
        }
        return (
          i(t, e),
          (t.prototype.setIntents = function (e, t) {
            (this.privAddedLmIntents = e),
              (this.privUmbrellaIntent = t),
              (this.privIntentDataSent = !0);
          }),
          (t.prototype.processTypeSpecificMessages = function (e) {
            var t,
              r,
              n = this,
              i = !1,
              c = new s.PropertyCollection();
            switch (
              (e.messageType === o.MessageType.Text &&
                c.setProperty(
                  s.PropertyId.SpeechServiceResponse_JsonResult,
                  e.textBody
                ),
              e.path.toLowerCase())
            ) {
              case "speech.hypothesis":
                var p = a.SpeechHypothesis.fromJSON(e.textBody);
                if (
                  ((t = new s.IntentRecognitionResult(
                    void 0,
                    this.privRequestSession.requestId,
                    s.ResultReason.RecognizingIntent,
                    p.Text,
                    p.Duration,
                    p.Offset + this.privRequestSession.currentTurnAudioOffset,
                    void 0,
                    e.textBody,
                    c
                  )),
                  this.privRequestSession.onHypothesis(t.offset),
                  (r = new s.IntentRecognitionEventArgs(
                    t,
                    p.Offset + this.privRequestSession.currentTurnAudioOffset,
                    this.privRequestSession.sessionId
                  )),
                  this.privIntentRecognizer.recognizing)
                )
                  try {
                    this.privIntentRecognizer.recognizing(
                      this.privIntentRecognizer,
                      r
                    );
                  } catch (e) {}
                i = !0;
                break;
              case "speech.phrase":
                var u = a.SimpleSpeechPhrase.fromJSON(e.textBody);
                (t = new s.IntentRecognitionResult(
                  void 0,
                  this.privRequestSession.requestId,
                  a.EnumTranslation.implTranslateRecognitionResult(
                    u.RecognitionStatus
                  ),
                  u.DisplayText,
                  u.Duration,
                  u.Offset + this.privRequestSession.currentTurnAudioOffset,
                  void 0,
                  e.textBody,
                  c
                )),
                  (r = new s.IntentRecognitionEventArgs(
                    t,
                    t.offset,
                    this.privRequestSession.sessionId
                  ));
                !1 === this.privIntentDataSent ||
                s.ResultReason.NoMatch === r.result.reason
                  ? (this.privRequestSession.onPhraseRecognized(
                      r.offset + r.result.duration
                    ),
                    (function () {
                      if (n.privIntentRecognizer.recognized)
                        try {
                          n.privIntentRecognizer.recognized(
                            n.privIntentRecognizer,
                            r
                          );
                        } catch (e) {}
                      if (n.privSuccessCallback) {
                        try {
                          n.privSuccessCallback(t);
                        } catch (e) {
                          n.privErrorCallback && n.privErrorCallback(e);
                        }
                        (n.privSuccessCallback = void 0),
                          (n.privErrorCallback = void 0);
                      }
                    })())
                  : (this.privPendingIntentArgs = r),
                  (i = !0);
                break;
              case "response":
                if (
                  ((r = this.privPendingIntentArgs),
                  (this.privPendingIntentArgs = void 0),
                  void 0 === r)
                ) {
                  if ("" === e.textBody) return;
                  r = new s.IntentRecognitionEventArgs(
                    new s.IntentRecognitionResult(),
                    0,
                    this.privRequestSession.sessionId
                  );
                }
                var v = a.IntentResponse.fromJSON(e.textBody),
                  f = this.privAddedLmIntents[v.topScoringIntent.intent];
                if (
                  (void 0 !== this.privUmbrellaIntent &&
                    (f = this.privUmbrellaIntent),
                  null !== v && void 0 !== f)
                ) {
                  var h =
                      void 0 === f.intentName
                        ? v.topScoringIntent.intent
                        : f.intentName,
                    l = r.result.reason;
                  void 0 !== h && (l = s.ResultReason.RecognizedIntent);
                  var d =
                    void 0 !== r.result.properties
                      ? r.result.properties
                      : new s.PropertyCollection();
                  d.setProperty(
                    s.PropertyId
                      .LanguageUnderstandingServiceResponse_JsonResult,
                    e.textBody
                  ),
                    (r = new s.IntentRecognitionEventArgs(
                      new s.IntentRecognitionResult(
                        h,
                        r.result.resultId,
                        l,
                        r.result.text,
                        r.result.duration,
                        r.result.offset,
                        r.result.errorDetails,
                        r.result.json,
                        d
                      ),
                      r.offset,
                      r.sessionId
                    ));
                }
                if (
                  (this.privRequestSession.onPhraseRecognized(
                    r.offset + r.result.duration
                  ),
                  this.privIntentRecognizer.recognized)
                )
                  try {
                    this.privIntentRecognizer.recognized(
                      this.privIntentRecognizer,
                      r
                    );
                  } catch (e) {}
                if (this.privSuccessCallback) {
                  try {
                    this.privSuccessCallback(r.result);
                  } catch (e) {
                    this.privErrorCallback && this.privErrorCallback(e);
                  }
                  (this.privSuccessCallback = void 0),
                    (this.privErrorCallback = void 0);
                }
                i = !0;
            }
            return i;
          }),
          (t.prototype.cancelRecognition = function (e, t, r, n, i) {
            var o = new s.PropertyCollection();
            if (
              (o.setProperty(
                a.CancellationErrorCodePropertyName,
                s.CancellationErrorCode[n]
              ),
              this.privIntentRecognizer.canceled)
            ) {
              var c = new s.IntentRecognitionCanceledEventArgs(
                r,
                i,
                n,
                void 0,
                void 0,
                e
              );
              try {
                this.privIntentRecognizer.canceled(
                  this.privIntentRecognizer,
                  c
                );
              } catch (e) {}
            }
            if (this.privSuccessCallback) {
              var p = new s.IntentRecognitionResult(
                void 0,
                t,
                s.ResultReason.Canceled,
                void 0,
                void 0,
                void 0,
                i,
                void 0,
                o
              );
              try {
                this.privSuccessCallback(p),
                  (this.privSuccessCallback = void 0);
              } catch (e) {}
            }
          }),
          t
        );
      })(a.ServiceRecognizerBase);
    t.IntentServiceRecognizer = c;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privIntentResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "query", {
          get: function () {
            return this.privIntentResponse.query;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "topScoringIntent", {
          get: function () {
            return this.privIntentResponse.topScoringIntent;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "entities", {
          get: function () {
            return this.privIntentResponse.entities;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.IntentResponse = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(106),
      o = r(128),
      s = (function () {
        function e(e) {
          var t = this;
          (this.privIsDisposed = !1),
            (this.privDetachables = new Array()),
            (this.privIsAudioNodeDetached = !1),
            (this.privIsRecognizing = !1),
            (this.privIsSpeechEnded = !1),
            (this.privTurnStartAudioOffset = 0),
            (this.privLastRecoOffset = 0),
            (this.privHypothesisReceived = !1),
            (this.privBytesSent = 0),
            (this.privRecogNumber = 0),
            (this.onAudioSourceAttachCompleted = function (e, r, n) {
              (t.privAudioNode = e),
                (t.privIsAudioNodeDetached = !1),
                r
                  ? t.onComplete()
                  : t.onEvent(
                      new i.ListeningStartedEvent(
                        t.privRequestId,
                        t.privSessionId,
                        t.privAudioSourceId,
                        t.privAudioNodeId
                      )
                    );
            }),
            (this.onPreConnectionStart = function (e, r) {
              (t.privAuthFetchEventId = e),
                (t.privSessionId = r),
                t.onEvent(
                  new i.ConnectingToServiceEvent(
                    t.privRequestId,
                    t.privAuthFetchEventId,
                    t.privSessionId
                  )
                );
            }),
            (this.onAuthCompleted = function (e, r) {
              e && t.onComplete();
            }),
            (this.onConnectionEstablishCompleted = function (e, r) {
              if (200 === e)
                return (
                  t.onEvent(
                    new i.RecognitionStartedEvent(
                      t.requestId,
                      t.privAudioSourceId,
                      t.privAudioNodeId,
                      t.privAuthFetchEventId,
                      t.privSessionId
                    )
                  ),
                  t.privAudioNode && t.privAudioNode.replay(),
                  (t.privTurnStartAudioOffset = t.privLastRecoOffset),
                  void (t.privBytesSent = 0)
                );
              403 === e && t.onComplete();
            }),
            (this.onServiceTurnEndResponse = function (e) {
              t.privTurnDeferral.resolve(!0),
                !e || t.isSpeechEnded
                  ? t.onComplete()
                  : ((t.privTurnStartAudioOffset = t.privLastRecoOffset),
                    (t.privRequestId = n.createNoDashGuid()),
                    t.privAudioNode.replay());
            }),
            (this.onServiceTurnStartResponse = function () {
              t.privTurnDeferral.state() === n.PromiseState.None &&
                t.privTurnDeferral.reject(
                  "Another turn started before current completed."
                ),
                (t.privTurnDeferral = new n.Deferred());
            }),
            (this.dispose = function (e) {
              if (!t.privIsDisposed) {
                t.privIsDisposed = !0;
                for (var r = 0, n = t.privDetachables; r < n.length; r++) {
                  n[r].detach();
                }
                t.privServiceTelemetryListener.dispose();
              }
            }),
            (this.getTelemetry = function () {
              return t.privServiceTelemetryListener.hasTelemetry
                ? t.privServiceTelemetryListener.getTelemetry()
                : null;
            }),
            (this.onEvent = function (e) {
              t.privServiceTelemetryListener &&
                t.privServiceTelemetryListener.onEvent(e),
                n.Events.instance.onEvent(e);
            }),
            (this.onComplete = function () {
              t.privIsRecognizing &&
                ((t.privIsRecognizing = !1), t.detachAudioNode());
            }),
            (this.detachAudioNode = function () {
              t.privIsAudioNodeDetached ||
                ((t.privIsAudioNodeDetached = !0),
                t.privAudioNode && t.privAudioNode.detach());
            }),
            (this.privAudioSourceId = e),
            (this.privRequestId = n.createNoDashGuid()),
            (this.privAudioNodeId = n.createNoDashGuid()),
            (this.privTurnDeferral = new n.Deferred()),
            this.privTurnDeferral.resolve(!0);
        }
        return (
          Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
              return this.privSessionId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "audioNodeId", {
            get: function () {
              return this.privAudioNodeId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "turnCompletionPromise", {
            get: function () {
              return this.privTurnDeferral.promise();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "isSpeechEnded", {
            get: function () {
              return this.privIsSpeechEnded;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "isRecognizing", {
            get: function () {
              return this.privIsRecognizing;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "currentTurnAudioOffset", {
            get: function () {
              return this.privTurnStartAudioOffset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "recogNumber", {
            get: function () {
              return this.privRecogNumber;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "bytesSent", {
            get: function () {
              return this.privBytesSent;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.listenForServiceTelemetry = function (e) {
            this.privServiceTelemetryListener &&
              this.privDetachables.push(
                e.attachListener(this.privServiceTelemetryListener)
              );
          }),
          (e.prototype.startNewRecognition = function () {
            (this.privIsSpeechEnded = !1),
              (this.privIsRecognizing = !0),
              (this.privTurnStartAudioOffset = 0),
              (this.privLastRecoOffset = 0),
              (this.privRequestId = n.createNoDashGuid()),
              this.privRecogNumber++,
              (this.privServiceTelemetryListener =
                new o.ServiceTelemetryListener(
                  this.privRequestId,
                  this.privAudioSourceId,
                  this.privAudioNodeId
                )),
              this.onEvent(
                new i.RecognitionTriggeredEvent(
                  this.requestId,
                  this.privSessionId,
                  this.privAudioSourceId,
                  this.privAudioNodeId
                )
              );
          }),
          (e.prototype.onHypothesis = function (e) {
            this.privHypothesisReceived ||
              ((this.privHypothesisReceived = !0),
              this.privServiceTelemetryListener.hypothesisReceived(
                this.privAudioNode.findTimeAtOffset(e)
              ));
          }),
          (e.prototype.onPhraseRecognized = function (e) {
            this.privServiceTelemetryListener.phraseReceived(
              this.privAudioNode.findTimeAtOffset(e)
            ),
              this.onServiceRecognized(e);
          }),
          (e.prototype.onServiceRecognized = function (e) {
            (this.privLastRecoOffset = e),
              (this.privHypothesisReceived = !1),
              this.privAudioNode.shrinkBuffers(e);
          }),
          (e.prototype.onAudioSent = function (e) {
            this.privBytesSent += e;
          }),
          (e.prototype.onStopRecognizing = function () {
            this.onComplete();
          }),
          (e.prototype.onSpeechEnded = function () {
            this.privIsSpeechEnded = !0;
          }),
          e
        );
      })();
    t.RequestSession = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(106),
      o = (function () {
        function e(e, t, r) {
          var o = this;
          (this.privIsDisposed = !1),
            (this.privListeningTriggerMetric = null),
            (this.privMicMetric = null),
            (this.privConnectionEstablishMetric = null),
            (this.onEvent = function (e) {
              o.privIsDisposed ||
                (e instanceof i.RecognitionTriggeredEvent &&
                  e.requestId === o.privRequestId &&
                  (o.privListeningTriggerMetric = {
                    End: e.eventTime,
                    Name: "ListeningTrigger",
                    Start: e.eventTime,
                  }),
                e instanceof n.AudioStreamNodeAttachingEvent &&
                  e.audioSourceId === o.privAudioSourceId &&
                  e.audioNodeId === o.privAudioNodeId &&
                  (o.privMicStartTime = e.eventTime),
                e instanceof n.AudioStreamNodeAttachedEvent &&
                  e.audioSourceId === o.privAudioSourceId &&
                  e.audioNodeId === o.privAudioNodeId &&
                  (o.privMicStartTime = e.eventTime),
                e instanceof n.AudioSourceErrorEvent &&
                  e.audioSourceId === o.privAudioSourceId &&
                  (o.privMicMetric ||
                    (o.privMicMetric = {
                      End: e.eventTime,
                      Error: e.error,
                      Name: "Microphone",
                      Start: o.privMicStartTime,
                    })),
                e instanceof n.AudioStreamNodeErrorEvent &&
                  e.audioSourceId === o.privAudioSourceId &&
                  e.audioNodeId === o.privAudioNodeId &&
                  (o.privMicMetric ||
                    (o.privMicMetric = {
                      End: e.eventTime,
                      Error: e.error,
                      Name: "Microphone",
                      Start: o.privMicStartTime,
                    })),
                e instanceof n.AudioStreamNodeDetachedEvent &&
                  e.audioSourceId === o.privAudioSourceId &&
                  e.audioNodeId === o.privAudioNodeId &&
                  (o.privMicMetric ||
                    (o.privMicMetric = {
                      End: e.eventTime,
                      Name: "Microphone",
                      Start: o.privMicStartTime,
                    })),
                e instanceof i.ConnectingToServiceEvent &&
                  e.requestId === o.privRequestId &&
                  (o.privConnectionId = e.sessionId),
                e instanceof n.ConnectionStartEvent &&
                  e.connectionId === o.privConnectionId &&
                  (o.privConnectionStartTime = e.eventTime),
                e instanceof n.ConnectionEstablishedEvent &&
                  e.connectionId === o.privConnectionId &&
                  (o.privConnectionEstablishMetric ||
                    (o.privConnectionEstablishMetric = {
                      End: e.eventTime,
                      Id: o.privConnectionId,
                      Name: "Connection",
                      Start: o.privConnectionStartTime,
                    })),
                e instanceof n.ConnectionEstablishErrorEvent &&
                  e.connectionId === o.privConnectionId &&
                  (o.privConnectionEstablishMetric ||
                    (o.privConnectionEstablishMetric = {
                      End: e.eventTime,
                      Error: o.getConnectionError(e.statusCode),
                      Id: o.privConnectionId,
                      Name: "Connection",
                      Start: o.privConnectionStartTime,
                    })),
                e instanceof n.ConnectionMessageReceivedEvent &&
                  e.connectionId === o.privConnectionId &&
                  e.message &&
                  e.message.headers &&
                  e.message.headers.path &&
                  (o.privReceivedMessages[e.message.headers.path] ||
                    (o.privReceivedMessages[e.message.headers.path] =
                      new Array()),
                  o.privReceivedMessages[e.message.headers.path].push(
                    e.networkReceivedTime
                  )));
            }),
            (this.getTelemetry = function () {
              var e = new Array();
              o.privListeningTriggerMetric &&
                e.push(o.privListeningTriggerMetric),
                o.privMicMetric && e.push(o.privMicMetric),
                o.privConnectionEstablishMetric &&
                  e.push(o.privConnectionEstablishMetric),
                o.privPhraseLatencies.length > 0 &&
                  e.push({ PhraseLatencyMs: o.privPhraseLatencies }),
                o.privHypothesisLatencies.length > 0 &&
                  e.push({
                    FirstHypothesisLatencyMs: o.privHypothesisLatencies,
                  });
              var t = { Metrics: e, ReceivedMessages: o.privReceivedMessages },
                r = JSON.stringify(t);
              return (
                (o.privReceivedMessages = {}),
                (o.privListeningTriggerMetric = null),
                (o.privMicMetric = null),
                (o.privConnectionEstablishMetric = null),
                (o.privPhraseLatencies = []),
                (o.privHypothesisLatencies = []),
                r
              );
            }),
            (this.dispose = function () {
              o.privIsDisposed = !0;
            }),
            (this.getConnectionError = function (e) {
              switch (e) {
                case 400:
                case 1002:
                case 1003:
                case 1005:
                case 1007:
                case 1008:
                case 1009:
                  return "BadRequest";
                case 401:
                  return "Unauthorized";
                case 403:
                  return "Forbidden";
                case 503:
                case 1001:
                  return "ServerUnavailable";
                case 500:
                case 1011:
                  return "ServerError";
                case 408:
                case 504:
                  return "Timeout";
                default:
                  return "statuscode:" + e.toString();
              }
            }),
            (this.privRequestId = e),
            (this.privAudioSourceId = t),
            (this.privAudioNodeId = r),
            (this.privReceivedMessages = {}),
            (this.privPhraseLatencies = []),
            (this.privHypothesisLatencies = []);
        }
        return (
          (e.prototype.phraseReceived = function (e) {
            e > 0 && this.privPhraseLatencies.push(Date.now() - e);
          }),
          (e.prototype.hypothesisReceived = function (e) {
            e > 0 && this.privHypothesisLatencies.push(Date.now() - e);
          }),
          Object.defineProperty(e.prototype, "hasTelemetry", {
            get: function () {
              return (
                0 !== Object.keys(this.privReceivedMessages).length ||
                null !== this.privListeningTriggerMetric ||
                null !== this.privMicMetric ||
                null !== this.privConnectionEstablishMetric ||
                0 !== this.privPhraseLatencies.length ||
                0 !== this.privHypothesisLatencies.length
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.ServiceTelemetryListener = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        (this.privContext = {}), (this.privDynamicGrammar = e);
      }
      return (
        (e.prototype.setSection = function (e, t) {
          this.privContext[e] = t;
        }),
        (e.prototype.toJSON = function () {
          var e = this.privDynamicGrammar.generateGrammarObject();
          return this.setSection("dgi", e), JSON.stringify(this.privContext);
        }),
        e
      );
    })();
    t.SpeechContext = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e.prototype.addPhrase = function (e) {
          this.privPhrases || (this.privPhrases = []),
            e instanceof Array
              ? (this.privPhrases = this.privPhrases.concat(e))
              : this.privPhrases.push(e);
        }),
        (e.prototype.clearPhrases = function () {
          this.privPhrases = void 0;
        }),
        (e.prototype.addReferenceGrammar = function (e) {
          this.privGrammars || (this.privGrammars = []),
            e instanceof Array
              ? (this.privGrammars = this.privGrammars.concat(e))
              : this.privGrammars.push(e);
        }),
        (e.prototype.clearGrammars = function () {
          this.privGrammars = void 0;
        }),
        (e.prototype.generateGrammarObject = function () {
          if (void 0 !== this.privGrammars || void 0 !== this.privPhrases) {
            var e = {};
            if (
              ((e.ReferenceGrammars = this.privGrammars),
              void 0 !== this.privPhrases && 0 !== this.privPhrases.length)
            ) {
              var t = [];
              this.privPhrases.forEach(function (e, r, n) {
                t.push({ Text: e });
              }),
                (e.Groups = [{ Type: "Generic", Items: t }]);
            }
            return e;
          }
        }),
        e
      );
    })();
    t.DynamicGrammarBuilder = n;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(4),
      a = r(29),
      c = r(132),
      p = r(24),
      u = r(134),
      v = r(108),
      f = (function (e) {
        function t(t, r, n, i, u) {
          var f = e.call(this, t, r, n, i, u) || this;
          return (
            (f.sendMessage = function (e) {
              var t = s.createGuid(),
                r = s.createNoDashGuid(),
                n = {
                  context: { interactionId: t },
                  messagePayload: e,
                  version: 0.5,
                },
                i = JSON.stringify(n);
              f.fetchDialogConnection().onSuccessContinueWith(function (e) {
                e.send(
                  new v.SpeechConnectionMessage(
                    s.MessageType.Text,
                    "agent",
                    r,
                    "application/json",
                    i
                  )
                );
              });
            }),
            (f.listenOnce = function (e, t, r) {
              return (
                (f.privRecognizerConfig.recognitionMode = e),
                (f.privSuccessCallback = t),
                (f.privErrorCallback = r),
                f.privDialogRequestSession.startNewRecognition(),
                f.privDialogRequestSession.listenForServiceTelemetry(
                  f.privDialogAudioSource.events
                ),
                f.dialogConnectImpl(),
                f.sendPreAudioMessages(),
                f.privDialogAudioSource
                  .attach(f.privDialogRequestSession.audioNodeId)
                  .continueWithPromise(function (e) {
                    var t;
                    return e.isError
                      ? (f.cancelRecognition(
                          f.privDialogRequestSession.sessionId,
                          f.privDialogRequestSession.requestId,
                          a.CancellationReason.Error,
                          a.CancellationErrorCode.ConnectionFailure,
                          e.error
                        ),
                        s.PromiseHelper.fromError(e.error))
                      : f.privDialogAudioSource.format.onSuccessContinueWithPromise(
                          function (r) {
                            return (
                              (t = new o.ReplayableAudioNode(
                                e.result,
                                r.avgBytesPerSec
                              )),
                              f.privDialogRequestSession.onAudioSourceAttachCompleted(
                                t,
                                !1
                              ),
                              f.privDialogAudioSource.deviceInfo.onSuccessContinueWithPromise(
                                function (e) {
                                  return (
                                    (f.privRecognizerConfig.SpeechServiceConfig.Context.audio =
                                      { source: e }),
                                    f
                                      .configConnection()
                                      .continueWithPromise(function (e) {
                                        if (e.isError)
                                          return (
                                            f.cancelRecognitionLocal(
                                              a.CancellationReason.Error,
                                              a.CancellationErrorCode
                                                .ConnectionFailure,
                                              e.error
                                            ),
                                            s.PromiseHelper.fromError(e.error)
                                          );
                                        var r = new a.SessionEventArgs(
                                          f.privDialogRequestSession.sessionId
                                        );
                                        return (
                                          f.privRecognizer.sessionStarted &&
                                            f.privRecognizer.sessionStarted(
                                              f.privRecognizer,
                                              r
                                            ),
                                          f.sendAudio(t).on(
                                            function (e) {},
                                            function (e) {
                                              f.cancelRecognition(
                                                f.privDialogRequestSession
                                                  .sessionId,
                                                f.privDialogRequestSession
                                                  .requestId,
                                                a.CancellationReason.Error,
                                                a.CancellationErrorCode
                                                  .RuntimeError,
                                                e
                                              );
                                            }
                                          ),
                                          s.PromiseHelper.fromResult(!0)
                                        );
                                      })
                                  );
                                }
                              )
                            );
                          }
                        );
                  })
              );
            }),
            (f.sendAudio = function (e) {
              return f.privDialogAudioSource.format.onSuccessContinueWithPromise(
                function (t) {
                  var r = new s.Deferred(),
                    n = Date.now(),
                    i = f.privRecognizerConfig.parameters.getProperty(
                      "SPEECH-TransmitLengthBeforThrottleMs",
                      "5000"
                    ),
                    o = (t.avgBytesPerSec / 1e3) * parseInt(i, 10),
                    a = f.privDialogRequestSession.recogNumber,
                    c = function () {
                      f.privDialogIsDisposed ||
                        f.privDialogRequestSession.isSpeechEnded ||
                        !f.privDialogRequestSession.isRecognizing ||
                        f.privDialogRequestSession.recogNumber !== a ||
                        f.fetchDialogConnection().on(
                          function (i) {
                            e.read().on(
                              function (e) {
                                var a, p;
                                f.privDialogRequestSession.isSpeechEnded
                                  ? r.resolve(!0)
                                  : (!e || e.isEnd
                                      ? ((a = null), (p = 0))
                                      : ((a = e.buffer),
                                        f.privDialogRequestSession.onAudioSent(
                                          a.byteLength
                                        ),
                                        (p =
                                          o >=
                                          f.privDialogRequestSession.bytesSent
                                            ? 0
                                            : Math.max(0, n - Date.now()))),
                                    setTimeout(function () {
                                      null !== a &&
                                        (n =
                                          Date.now() +
                                          (1e3 * a.byteLength) /
                                            (2 * t.avgBytesPerSec));
                                      var o = i.send(
                                        new v.SpeechConnectionMessage(
                                          s.MessageType.Binary,
                                          "audio",
                                          f.privDialogRequestSession.requestId,
                                          null,
                                          a
                                        )
                                      );
                                      e && !e.isEnd
                                        ? o.continueWith(function (e) {
                                            c();
                                          })
                                        : (f.privDialogRequestSession.onSpeechEnded(),
                                          r.resolve(!0));
                                    }, p));
                              },
                              function (e) {
                                f.privDialogRequestSession.isSpeechEnded
                                  ? r.resolve(!0)
                                  : r.reject(e);
                              }
                            );
                          },
                          function (e) {
                            r.reject(e);
                          }
                        );
                    };
                  return c(), r.promise();
                }
              );
            }),
            (f.receiveDialogMessageOverride = function () {
              var e = new s.Deferred();
              return (
                f.fetchDialogConnection().on(
                  function (t) {
                    return t.read().onSuccessContinueWithPromise(function (t) {
                      var r = f.isDisposed(),
                        n = !f.isDisposed() && f.terminateMessageLoop;
                      if (r || n)
                        return (
                          e.resolve(void 0), s.PromiseHelper.fromResult(void 0)
                        );
                      if (!t) return f.receiveDialogMessageOverride();
                      var i =
                        v.SpeechConnectionMessage.fromConnectionMessage(t);
                      switch (i.path.toLowerCase()) {
                        case "turn.start":
                          var o = i.requestId.toUpperCase();
                          o !==
                          f.privDialogRequestSession.requestId.toUpperCase()
                            ? f.privTurnStateManager.StartTurn(o)
                            : f.privDialogRequestSession.onServiceTurnStartResponse();
                          break;
                        case "speech.startdetected":
                          var c = p.SpeechDetected.fromJSON(i.textBody),
                            u = new a.RecognitionEventArgs(
                              c.Offset,
                              f.privDialogRequestSession.sessionId
                            );
                          f.privRecognizer.speechStartDetected &&
                            f.privRecognizer.speechStartDetected(
                              f.privRecognizer,
                              u
                            );
                          break;
                        case "speech.enddetected":
                          var h = void 0;
                          h =
                            i.textBody.length > 0
                              ? i.textBody
                              : "{ Offset: 0 }";
                          var l = p.SpeechDetected.fromJSON(h);
                          f.privDialogRequestSession.onServiceRecognized(
                            l.Offset +
                              f.privDialogRequestSession.currentTurnAudioOffset
                          );
                          var d = new a.RecognitionEventArgs(
                            l.Offset +
                              f.privDialogRequestSession.currentTurnAudioOffset,
                            f.privDialogRequestSession.sessionId
                          );
                          f.privRecognizer.speechEndDetected &&
                            f.privRecognizer.speechEndDetected(
                              f.privRecognizer,
                              d
                            );
                          break;
                        case "turn.end":
                          var g = i.requestId.toUpperCase();
                          if (
                            g !==
                            f.privDialogRequestSession.requestId.toUpperCase()
                          )
                            f.privTurnStateManager.CompleteTurn(g);
                          else {
                            var y = new a.SessionEventArgs(
                              f.privDialogRequestSession.sessionId
                            );
                            if (
                              (f.privDialogRequestSession.onServiceTurnEndResponse(
                                !1
                              ),
                              f.privDialogRequestSession.isSpeechEnded &&
                                f.privRecognizer.sessionStopped &&
                                f.privRecognizer.sessionStopped(
                                  f.privRecognizer,
                                  y
                                ),
                              f.privSuccessCallback && f.privLastResult)
                            ) {
                              try {
                                f.privSuccessCallback(f.privLastResult),
                                  (f.privLastResult = null);
                              } catch (e) {
                                f.privErrorCallback && f.privErrorCallback(e);
                              }
                              (f.privSuccessCallback = void 0),
                                (f.privErrorCallback = void 0);
                            }
                          }
                          break;
                        default:
                          f.processTypeSpecificMessages(i) ||
                            (f.serviceEvents &&
                              f.serviceEvents.onEvent(
                                new s.ServiceEvent(
                                  i.path.toLowerCase(),
                                  i.textBody
                                )
                              ));
                      }
                      return f.receiveDialogMessageOverride();
                    });
                  },
                  function (t) {
                    return (
                      (f.terminateMessageLoop = !0),
                      e.resolve(void 0),
                      s.PromiseHelper.fromResult(void 0)
                    );
                  }
                ),
                e.promise()
              );
            }),
            (f.fetchDialogConnection = function () {
              return f.configConnection();
            }),
            (f.sendAgentConfig = function (e) {
              if (f.agentConfig && !f.agentConfigSent) {
                if (
                  "custom_commands" ===
                  f.privRecognizerConfig.parameters.getProperty(
                    a.PropertyId.Conversation_DialogType
                  )
                ) {
                  var t = f.agentConfig.get();
                  (t.botInfo.commandsCulture =
                    f.privRecognizerConfig.parameters.getProperty(
                      a.PropertyId.SpeechServiceConnection_RecoLanguage,
                      "en-us"
                    )),
                    f.agentConfig.set(t);
                }
                var r = f.agentConfig.toJsonString();
                return (
                  (f.agentConfigSent = !0),
                  e.send(
                    new v.SpeechConnectionMessage(
                      s.MessageType.Text,
                      "agent.config",
                      f.privDialogRequestSession.requestId,
                      "application/json",
                      r
                    )
                  )
                );
              }
              return s.PromiseHelper.fromResult(!0);
            }),
            (f.sendAgentContext = function (e) {
              var t = s.createGuid(),
                r = f.privDialogServiceConnector.properties.getProperty(
                  a.PropertyId.Conversation_Speech_Activity_Template
                ),
                n = {
                  channelData: "",
                  context: { interactionId: t },
                  messagePayload: void 0 === typeof r ? void 0 : r,
                  version: 0.5,
                },
                i = JSON.stringify(n);
              return e.send(
                new v.SpeechConnectionMessage(
                  s.MessageType.Text,
                  "speech.agent.context",
                  f.privDialogRequestSession.requestId,
                  "application/json",
                  i
                )
              );
            }),
            (f.privDialogServiceConnector = u),
            (f.privDialogAuthentication = t),
            (f.receiveMessageOverride = f.receiveDialogMessageOverride),
            (f.privTurnStateManager = new c.DialogServiceTurnStateManager()),
            (f.recognizeOverride = f.listenOnce),
            (f.connectImplOverride = f.dialogConnectImpl),
            (f.configConnectionOverride = f.configConnection),
            (f.fetchConnectionOverride = f.fetchDialogConnection),
            (f.disconnectOverride = f.privDisconnect),
            (f.privDialogAudioSource = n),
            (f.privDialogRequestSession = new p.RequestSession(n.id())),
            (f.privDialogConnectionFactory = r),
            (f.privDialogIsDisposed = !1),
            (f.agentConfigSent = !1),
            (f.privLastResult = null),
            f
          );
        }
        return (
          i(t, e),
          (t.prototype.isDisposed = function () {
            return this.privDialogIsDisposed;
          }),
          (t.prototype.dispose = function (e) {
            (this.privDialogIsDisposed = !0),
              this.privConnectionConfigPromise &&
                this.privConnectionConfigPromise.onSuccessContinueWith(
                  function (t) {
                    t.dispose(e);
                  }
                );
          }),
          (t.prototype.privDisconnect = function () {
            this.cancelRecognition(
              this.privDialogRequestSession.sessionId,
              this.privDialogRequestSession.requestId,
              a.CancellationReason.Error,
              a.CancellationErrorCode.NoError,
              "Disconnecting"
            ),
              (this.terminateMessageLoop = !0),
              (this.agentConfigSent = !1),
              this.privDialogConnectionPromise.result().isCompleted
                ? this.privDialogConnectionPromise.result().isError ||
                  (this.privDialogConnectionPromise.result().result.dispose(),
                  (this.privDialogConnectionPromise = null))
                : this.privDialogConnectionPromise.onSuccessContinueWith(
                    function (e) {
                      e.dispose();
                    }
                  );
          }),
          (t.prototype.processTypeSpecificMessages = function (e) {
            var t,
              r,
              n = new a.PropertyCollection();
            switch (
              (e.messageType === s.MessageType.Text &&
                n.setProperty(
                  a.PropertyId.SpeechServiceResponse_JsonResult,
                  e.textBody
                ),
              e.path.toLowerCase())
            ) {
              case "speech.phrase":
                var i = p.SimpleSpeechPhrase.fromJSON(e.textBody);
                if (
                  (this.privDialogRequestSession.onPhraseRecognized(
                    this.privDialogRequestSession.currentTurnAudioOffset +
                      i.Offset +
                      i.Duration
                  ),
                  i.RecognitionStatus === p.RecognitionStatus.Success)
                ) {
                  var o = this.fireEventForResult(i, n);
                  if (
                    ((this.privLastResult = o.result),
                    this.privDialogServiceConnector.recognized)
                  )
                    try {
                      this.privDialogServiceConnector.recognized(
                        this.privDialogServiceConnector,
                        o
                      );
                    } catch (e) {}
                }
                r = !0;
                break;
              case "speech.hypothesis":
                var c = p.SpeechHypothesis.fromJSON(e.textBody),
                  v =
                    c.Offset +
                    this.privDialogRequestSession.currentTurnAudioOffset;
                (t = new a.SpeechRecognitionResult(
                  this.privDialogRequestSession.requestId,
                  a.ResultReason.RecognizingSpeech,
                  c.Text,
                  c.Duration,
                  v,
                  void 0,
                  e.textBody,
                  n
                )),
                  this.privDialogRequestSession.onHypothesis(v);
                var f = new a.SpeechRecognitionEventArgs(
                  t,
                  c.Duration,
                  this.privDialogRequestSession.sessionId
                );
                if (this.privDialogServiceConnector.recognizing)
                  try {
                    this.privDialogServiceConnector.recognizing(
                      this.privDialogServiceConnector,
                      f
                    );
                  } catch (e) {}
                r = !0;
                break;
              case "audio":
                var h = e.requestId.toUpperCase(),
                  l = this.privTurnStateManager.GetTurn(h);
                try {
                  e.binaryBody
                    ? l.audioStream.write(e.binaryBody)
                    : l.endAudioStream();
                } catch (e) {}
                r = !0;
                break;
              case "response":
                var d = e.requestId.toUpperCase(),
                  g = u.ActivityPayloadResponse.fromJSON(e.textBody);
                l = this.privTurnStateManager.GetTurn(d);
                if (g.conversationId) {
                  var y = this.agentConfig.get();
                  (y.botInfo.conversationId = g.conversationId),
                    this.agentConfig.set(y);
                }
                var m = l.processActivityPayload(g),
                  S = new a.ActivityReceivedEventArgs(g.messagePayload, m);
                if (this.privDialogServiceConnector.activityReceived)
                  try {
                    this.privDialogServiceConnector.activityReceived(
                      this.privDialogServiceConnector,
                      S
                    );
                  } catch (e) {}
                r = !0;
            }
            return r;
          }),
          (t.prototype.cancelRecognition = function (e, t, r, n, i) {
            if (
              ((this.terminateMessageLoop = !0),
              this.privDialogRequestSession.isRecognizing &&
                this.privDialogRequestSession.onStopRecognizing(),
              this.privDialogServiceConnector.canceled)
            ) {
              var o = new a.PropertyCollection();
              o.setProperty(
                p.CancellationErrorCodePropertyName,
                a.CancellationErrorCode[n]
              );
              var s = new a.SpeechRecognitionCanceledEventArgs(
                r,
                i,
                n,
                void 0,
                e
              );
              try {
                this.privDialogServiceConnector.canceled(
                  this.privDialogServiceConnector,
                  s
                );
              } catch (e) {}
              if (this.privSuccessCallback) {
                var c = new a.SpeechRecognitionResult(
                  void 0,
                  a.ResultReason.Canceled,
                  void 0,
                  void 0,
                  void 0,
                  i,
                  void 0,
                  o
                );
                try {
                  this.privSuccessCallback(c),
                    (this.privSuccessCallback = void 0);
                } catch (e) {}
              }
            }
          }),
          (t.prototype.sendWaveHeader = function (e) {
            var t = this;
            return this.audioSource.format.onSuccessContinueWithPromise(
              function (r) {
                return e.send(
                  new v.SpeechConnectionMessage(
                    s.MessageType.Binary,
                    "audio",
                    t.privDialogRequestSession.requestId,
                    "audio/x-wav",
                    r.header
                  )
                );
              }
            );
          }),
          (t.prototype.dialogConnectImpl = function (e) {
            var t = this;
            if ((void 0 === e && (e = !1), this.privDialogConnectionPromise))
              return this.privDialogConnectionPromise.result().isCompleted &&
                (this.privDialogConnectionPromise.result().isError ||
                  this.privDialogConnectionPromise.result().result.state() ===
                    s.ConnectionState.Disconnected)
                ? ((this.agentConfigSent = !1),
                  (this.privDialogConnectionPromise = null),
                  (this.terminateMessageLoop = !0),
                  this.configConnection())
                : this.privDialogConnectionPromise;
            (this.privDialogAuthFetchEventId = s.createNoDashGuid()),
              void 0 === this.privConnectionId &&
                (this.privConnectionId = s.createNoDashGuid()),
              this.privDialogRequestSession.onPreConnectionStart(
                this.privDialogAuthFetchEventId,
                this.privConnectionId
              );
            var r = e
              ? this.privDialogAuthentication.fetchOnExpiry(
                  this.privDialogAuthFetchEventId
                )
              : this.privDialogAuthentication.fetch(
                  this.privDialogAuthFetchEventId
                );
            return (
              (this.privDialogConnectionPromise = r.continueWithPromise(
                function (r) {
                  if (r.isError)
                    throw (
                      (t.privDialogRequestSession.onAuthCompleted(!0, r.error),
                      new Error(r.error))
                    );
                  t.privDialogRequestSession.onAuthCompleted(!1);
                  var n = t.privDialogConnectionFactory.create(
                    t.privRecognizerConfig,
                    r.result,
                    t.privConnectionId
                  );
                  return (
                    t.privDialogRequestSession.listenForServiceTelemetry(
                      n.events
                    ),
                    n.events.attach(function (e) {
                      t.connectionEvents.onEvent(e);
                    }),
                    n.open().onSuccessContinueWithPromise(function (r) {
                      return 200 === r.statusCode
                        ? (t.privDialogRequestSession.onPreConnectionStart(
                            t.privDialogAuthFetchEventId,
                            t.privConnectionId
                          ),
                          t.privDialogRequestSession.onConnectionEstablishCompleted(
                            r.statusCode
                          ),
                          s.PromiseHelper.fromResult(n))
                        : 403 !== r.statusCode || e
                        ? (t.privDialogRequestSession.onConnectionEstablishCompleted(
                            r.statusCode,
                            r.reason
                          ),
                          s.PromiseHelper.fromError(
                            "Unable to contact server. StatusCode: " +
                              r.statusCode +
                              ", " +
                              t.privRecognizerConfig.parameters.getProperty(
                                a.PropertyId.SpeechServiceConnection_Endpoint
                              ) +
                              " Reason: " +
                              r.reason
                          ))
                        : t.dialogConnectImpl(!0);
                    })
                  );
                }
              )),
              (this.privConnectionLoop = this.startMessageLoop()),
              this.privDialogConnectionPromise
            );
          }),
          (t.prototype.startMessageLoop = function () {
            var e = this;
            return (
              (this.terminateMessageLoop = !1),
              this.receiveDialogMessageOverride().on(
                function (e) {
                  return !0;
                },
                function (t) {
                  e.cancelRecognition(
                    e.privDialogRequestSession.sessionId,
                    e.privDialogRequestSession.requestId,
                    a.CancellationReason.Error,
                    a.CancellationErrorCode.RuntimeError,
                    t
                  );
                }
              )
            );
          }),
          (t.prototype.configConnection = function () {
            var e = this;
            return this.privConnectionConfigPromise
              ? this.privConnectionConfigPromise.result().isCompleted &&
                (this.privConnectionConfigPromise.result().isError ||
                  this.privConnectionConfigPromise.result().result.state() ===
                    s.ConnectionState.Disconnected)
                ? ((this.privConnectionConfigPromise = null),
                  this.configConnection())
                : this.privConnectionConfigPromise
              : this.terminateMessageLoop
              ? ((this.terminateMessageLoop = !1),
                s.PromiseHelper.fromError("Connection to service terminated."))
              : ((this.privConnectionConfigPromise =
                  this.dialogConnectImpl().onSuccessContinueWithPromise(
                    function (t) {
                      return e
                        .sendSpeechServiceConfig(
                          t,
                          e.privDialogRequestSession,
                          e.privRecognizerConfig.SpeechServiceConfig.serialize()
                        )
                        .onSuccessContinueWithPromise(function (r) {
                          return e
                            .sendAgentConfig(t)
                            .onSuccessContinueWith(function (e) {
                              return t;
                            });
                        });
                    }
                  )),
                this.privConnectionConfigPromise);
          }),
          (t.prototype.sendPreAudioMessages = function () {
            var e = this;
            this.fetchDialogConnection().onSuccessContinueWith(function (t) {
              e.sendAgentContext(t), e.sendWaveHeader(t);
            });
          }),
          (t.prototype.fireEventForResult = function (e, t) {
            var r = p.EnumTranslation.implTranslateRecognitionResult(
                e.RecognitionStatus
              ),
              n =
                e.Offset + this.privDialogRequestSession.currentTurnAudioOffset,
              i = new a.SpeechRecognitionResult(
                this.privDialogRequestSession.requestId,
                r,
                e.DisplayText,
                e.Duration,
                n,
                void 0,
                JSON.stringify(e),
                t
              );
            return new a.SpeechRecognitionEventArgs(
              i,
              n,
              this.privDialogRequestSession.sessionId
            );
          }),
          t
        );
      })(p.ServiceRecognizerBase);
    t.DialogServiceAdapter = f;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(10),
      i = r(133),
      o = (function () {
        function e() {
          this.privTurnMap = new Map();
        }
        return (
          (e.prototype.StartTurn = function (e) {
            if (this.privTurnMap.has(e))
              throw new n.InvalidOperationError(
                "Service error: There is already a turn with id:" + e
              );
            var t = new i.DialogServiceTurnState(this, e);
            return this.privTurnMap.set(e, t), this.privTurnMap.get(e);
          }),
          (e.prototype.GetTurn = function (e) {
            return this.privTurnMap.get(e);
          }),
          (e.prototype.CompleteTurn = function (e) {
            if (!this.privTurnMap.has(e))
              throw new n.InvalidOperationError(
                "Service error: Received turn end for an unknown turn id:" + e
              );
            var t = this.privTurnMap.get(e);
            return t.complete(), this.privTurnMap.delete(e), t;
          }),
          e
        );
      })();
    t.DialogServiceTurnStateManager = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(37),
      i = r(36),
      o = r(134),
      s = (function () {
        function e(e, t) {
          (this.privRequestId = t),
            (this.privIsCompleted = !1),
            (this.privAudioStream = null),
            (this.privTurnManager = e),
            this.resetTurnEndTimeout();
        }
        return (
          Object.defineProperty(e.prototype, "audioStream", {
            get: function () {
              return this.resetTurnEndTimeout(), this.privAudioStream;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.processActivityPayload = function (e) {
            return (
              e.messageDataStreamType ===
                o.MessageDataStreamType.TextToSpeechAudio &&
                ((this.privAudioStream =
                  i.AudioOutputStream.createPullStream()),
                (this.privAudioStream.format =
                  n.AudioOutputFormatImpl.getDefaultOutputFormat())),
              this.privAudioStream
            );
          }),
          (e.prototype.endAudioStream = function () {
            null === this.privAudioStream ||
              this.privAudioStream.isClosed ||
              this.privAudioStream.close();
          }),
          (e.prototype.complete = function () {
            void 0 !== this.privTimeoutToken &&
              clearTimeout(this.privTimeoutToken),
              this.endAudioStream();
          }),
          (e.prototype.resetTurnEndTimeout = function () {
            var e = this;
            void 0 !== this.privTimeoutToken &&
              clearTimeout(this.privTimeoutToken),
              (this.privTimeoutToken = setTimeout(function () {
                e.privTurnManager.CompleteTurn(e.privRequestId);
              }, 2e3));
          }),
          e
        );
      })();
    t.DialogServiceTurnState = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privActivityResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "conversationId", {
          get: function () {
            return this.privActivityResponse.conversationId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "messageDataStreamType", {
          get: function () {
            return this.privActivityResponse.messageDataStreamType;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "messagePayload", {
          get: function () {
            return this.privActivityResponse.messagePayload;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "version", {
          get: function () {
            return this.privActivityResponse.version;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    (t.ActivityPayloadResponse = n),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.TextToSpeechAudio = 1)] = "TextToSpeechAudio");
      })(t.MessageDataStreamType || (t.MessageDataStreamType = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e.prototype.toJsonString = function () {
          return JSON.stringify(this.iPrivConfig);
        }),
        (e.prototype.get = function () {
          return this.iPrivConfig;
        }),
        (e.prototype.set = function (e) {
          this.iPrivConfig = e;
        }),
        e
      );
    })();
    t.AgentConfig = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(137);
    t.ConversationManager = n.ConversationManager;
    var i = r(138);
    t.ConversationTranslatorConfig = i.ConversationTranslatorConfig;
    var o = r(139);
    t.ConversationTranslatorRecognizer = o.ConversationTranslatorRecognizer;
    var s = r(145);
    (t.ConversationReceivedTranslationEventArgs =
      s.ConversationReceivedTranslationEventArgs),
      (t.LockRoomEventArgs = s.LockRoomEventArgs),
      (t.MuteAllEventArgs = s.MuteAllEventArgs),
      (t.ParticipantAttributeEventArgs = s.ParticipantAttributeEventArgs),
      (t.ParticipantEventArgs = s.ParticipantEventArgs),
      (t.ParticipantsListEventArgs = s.ParticipantsListEventArgs);
    var a = r(146);
    (t.ConversationTranslatorCommandTypes =
      a.ConversationTranslatorCommandTypes),
      (t.ConversationTranslatorMessageTypes =
        a.ConversationTranslatorMessageTypes),
      (t.InternalParticipants = a.InternalParticipants);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(31),
      i = r(29),
      o = r(138),
      s = (function () {
        function e() {}
        return (
          (e.prototype.createOrJoin = function (e, t, r, s) {
            try {
              n.Contracts.throwIfNullOrUndefined(e, "args");
              var a = e.getProperty(
                  i.PropertyId.SpeechServiceConnection_RecoLanguage,
                  o.ConversationTranslatorConfig.defaultLanguageCode
                ),
                c = e.getProperty(i.PropertyId.ConversationTranslator_Name),
                p = e.getProperty(
                  i.PropertyId.ConversationTranslator_Host,
                  o.ConversationTranslatorConfig.host
                ),
                u = e.getProperty(
                  i.PropertyId.ConversationTranslator_CorrelationId
                ),
                v = e.getProperty(i.PropertyId.SpeechServiceConnection_Key),
                f = e.getProperty(i.PropertyId.SpeechServiceConnection_Region),
                h = e.getProperty(
                  i.PropertyId.SpeechServiceAuthorization_Token
                );
              n.Contracts.throwIfNullOrWhitespace(a, "languageCode"),
                n.Contracts.throwIfNullOrWhitespace(c, "nickname"),
                n.Contracts.throwIfNullOrWhitespace(p, "endpointHost");
              var l = {};
              (l[o.ConversationTranslatorConfig.params.apiVersion] =
                o.ConversationTranslatorConfig.apiVersion),
                (l[o.ConversationTranslatorConfig.params.languageCode] = a),
                (l[o.ConversationTranslatorConfig.params.nickname] = c);
              var d = {};
              u && (d[o.ConversationTranslatorConfig.params.correlationId] = u),
                (d[o.ConversationTranslatorConfig.params.clientAppId] =
                  o.ConversationTranslatorConfig.clientAppId),
                void 0 !== t
                  ? (l[o.ConversationTranslatorConfig.params.roomId] = t)
                  : (n.Contracts.throwIfNullOrUndefined(
                      f,
                      o.ConversationTranslatorConfig.strings
                        .authInvalidSubscriptionRegion
                    ),
                    (d[
                      o.ConversationTranslatorConfig.params.subscriptionRegion
                    ] = f),
                    v
                      ? (d[
                          o.ConversationTranslatorConfig.params.subscriptionKey
                        ] = v)
                      : h
                      ? (d[
                          o.ConversationTranslatorConfig.params.authorization
                        ] = "Bearer " + h)
                      : n.Contracts.throwIfNullOrUndefined(
                          v,
                          o.ConversationTranslatorConfig.strings
                            .authInvalidSubscriptionKey
                        ));
              var g = {};
              g.headers = d;
              var y = "https://" + p + o.ConversationTranslatorConfig.restPath;
              o.request("post", y, l, null, g, function (e) {
                var t = o.extractHeaderValue(
                  o.ConversationTranslatorConfig.params.requestId,
                  e.headers
                );
                if (e.ok) {
                  var n = JSON.parse(e.data);
                  if ((n && (n.requestId = t), r)) {
                    try {
                      r(n);
                    } catch (e) {
                      s && s(e);
                    }
                    r = void 0;
                  }
                } else if (s) {
                  var i =
                      o.ConversationTranslatorConfig.strings.invalidCreateJoinConversationResponse.replace(
                        "{status}",
                        e.status.toString()
                      ),
                    a = void 0;
                  try {
                    i +=
                      " [" +
                      (a = JSON.parse(e.data)).error.code +
                      ": " +
                      a.error.message +
                      "]";
                  } catch (t) {
                    i += " [" + e.data + "]";
                  }
                  t && (i += " " + t), s(i);
                }
              });
            } catch (e) {
              if (s)
                if (e instanceof Error) {
                  var m = e;
                  s(m.name + ": " + m.message);
                } else s(e);
            }
          }),
          (e.prototype.leave = function (e, t, r, s) {
            try {
              n.Contracts.throwIfNullOrUndefined(
                e,
                o.ConversationTranslatorConfig.strings.invalidArgs.replace(
                  "{arg}",
                  "config"
                )
              ),
                n.Contracts.throwIfNullOrWhitespace(
                  t,
                  o.ConversationTranslatorConfig.strings.invalidArgs.replace(
                    "{arg}",
                    "token"
                  )
                );
              var a = e.getProperty(
                  i.PropertyId.ConversationTranslator_Host,
                  o.ConversationTranslatorConfig.host
                ),
                c = e.getProperty(
                  i.PropertyId.ConversationTranslator_CorrelationId
                ),
                p = {};
              (p[o.ConversationTranslatorConfig.params.apiVersion] =
                o.ConversationTranslatorConfig.apiVersion),
                (p[o.ConversationTranslatorConfig.params.sessionToken] = t);
              var u = {};
              c && (u[o.ConversationTranslatorConfig.params.correlationId] = c);
              var v = {};
              v.headers = u;
              var f = "https://" + a + o.ConversationTranslatorConfig.restPath;
              o.request("delete", f, p, null, v, function (e) {
                if ((e.ok, r)) {
                  try {
                    r();
                  } catch (e) {
                    s && s(e);
                  }
                  r = void 0;
                }
              });
            } catch (e) {
              if (s)
                if (e instanceof Error) {
                  var h = e;
                  s(h.name + ": " + h.message);
                } else s(e);
            }
          }),
          e
        );
      })();
    t.ConversationManager = s;
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      void 0 === t && (t = {});
      var r = (function (e) {
        return (
          void 0 === e && (e = {}),
          Object.keys(e)
            .map(function (t) {
              return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
            })
            .join("&")
        );
      })(t);
      return r ? e + (-1 === e.indexOf("?") ? "?" : "&") + r : e;
    }
    function i(e, t) {
      return (
        void 0 === t && (t = null),
        {
          data: t || e.statusText,
          headers: e.getAllResponseHeaders(),
          json: function () {
            return JSON.parse(t || '"' + e.statusText + '"');
          },
          ok: !1,
          status: e.status,
          statusText: e.statusText,
        }
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ConversationTranslatorConfig = {
        apiVersion: "2.0",
        auth: {
          placeholderRegion: "westus",
          placeholderSubscriptionKey: "abcdefghijklmnopqrstuvwxyz012345",
        },
        clientAppId: "FC539C22-1767-4F1F-84BC-B4D811114F15",
        defaultLanguageCode: "en-US",
        defaultRequestOptions: {
          headers: { Accept: "application/json" },
          ignoreCache: !1,
          timeout: 5e3,
        },
        host: "dev.microsofttranslator.com",
        params: {
          apiVersion: "api-version",
          authorization: "Authorization",
          clientAppId: "X-ClientAppId",
          correlationId: "X-CorrelationId",
          languageCode: "language",
          nickname: "nickname",
          profanity: "profanity",
          requestId: "X-RequestId",
          roomId: "roomid",
          sessionToken: "token",
          subscriptionKey: "Ocp-Apim-Subscription-Key",
          subscriptionRegion: "Ocp-Apim-Subscription-Region",
          token: "X-CapitoToken",
        },
        restPath: "/capito/room",
        speechHost: "{region}.s2s.speech.microsoft.com",
        speechPath: "/speech/translation/cognitiveservices/v1",
        strings: {
          authInvalidSubscriptionKey:
            "You must specify either an authentication token to use, or a Cognitive Speech subscription key.",
          authInvalidSubscriptionRegion:
            "You must specify the Cognitive Speech region to use.",
          invalidArgs: "Required input not found: {arg}.",
          invalidCreateJoinConversationResponse:
            "Creating/Joining conversation failed with HTTP {status}.",
          invalidParticipantRequest: "The requested participant was not found.",
          permissionDeniedConnect: "Required credentials not found.",
          permissionDeniedConversation:
            "Invalid operation: only the host can {command} the conversation.",
          permissionDeniedParticipant:
            "Invalid operation: only the host can {command} a participant.",
          permissionDeniedSend:
            "Invalid operation: the conversation is not in a connected state.",
          permissionDeniedStart:
            "Invalid operation: there is already an active conversation.",
        },
        textMessageMaxLength: 1e3,
        webSocketPath: "/capito/translate",
      }),
      (t.extractHeaderValue = function (e, t) {
        var r = "";
        try {
          var n = t.trim().split(/[\r\n]+/),
            i = {};
          n.forEach(function (e) {
            var t = e.split(": "),
              r = t.shift().toLowerCase(),
              n = t.join(": ");
            i[r] = n;
          }),
            (r = i[e.toLowerCase()]);
        } catch (e) {}
        return r;
      }),
      (t.request = function (e, r, o, s, a, c) {
        void 0 === o && (o = {}),
          void 0 === s && (s = null),
          void 0 === a &&
            (a = t.ConversationTranslatorConfig.defaultRequestOptions);
        var p =
            a.ignoreCache ||
            t.ConversationTranslatorConfig.defaultRequestOptions.ignoreCache,
          u =
            a.headers ||
            t.ConversationTranslatorConfig.defaultRequestOptions.headers,
          v =
            a.timeout ||
            t.ConversationTranslatorConfig.defaultRequestOptions.timeout,
          f = new XMLHttpRequest();
        f.open(e, n(r, o), !0),
          u &&
            Object.keys(u).forEach(function (e) {
              return f.setRequestHeader(e, u[e]);
            }),
          p && f.setRequestHeader("Cache-Control", "no-cache"),
          (f.timeout = v),
          (f.onload = function (e) {
            c(
              (function (e) {
                return {
                  data: e.responseText,
                  headers: e.getAllResponseHeaders(),
                  json: function () {
                    return JSON.parse(e.responseText);
                  },
                  ok: e.status >= 200 && e.status < 300,
                  status: e.status,
                  statusText: e.statusText,
                };
              })(f)
            );
          }),
          (f.onerror = function (e) {
            c(i(f, "Failed to make request."));
          }),
          (f.ontimeout = function (e) {
            c(i(f, "Request took longer than expected."));
          }),
          "post" === e && s
            ? (f.setRequestHeader("Content-Type", "application/json"),
              f.send(JSON.stringify(s)))
            : f.send();
      }),
      (t.PromiseToEmptyCallback = function (e, t, r) {
        e
          ? e.continueWith(function (e) {
              try {
                e.isError ? r && r(e.error) : t && t();
              } catch (t) {
                r &&
                  r(
                    "'Unhandled error on promise callback: " +
                      t +
                      ". InnerError: " +
                      e.error +
                      "'"
                  );
              }
            })
          : r && r("Null promise");
      });
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(24),
      s = r(31),
      a = r(29),
      c = r(140),
      p = r(143),
      u = r(146),
      v = r(138),
      f = (function (e) {
        function t(t, r) {
          var n = this,
            i = t;
          return (
            s.Contracts.throwIfNull(i, "speechConfig"),
            ((n =
              e.call(
                this,
                r,
                i.properties,
                new c.ConversationConnectionFactory()
              ) || this).privIsDisposed = !1),
            (n.privProperties = i.properties.clone()),
            n
          );
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "conversation", {
            set: function (e) {
              this.privRoom = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
              return this.privSpeechRecognitionLanguage;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "properties", {
            get: function () {
              return this.privProperties;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isDisposed = function () {
            return this.privIsDisposed;
          }),
          (t.prototype.connect = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(e, "token"),
                (this.privReco.conversationTranslatorToken = e),
                this.privReco.connectAsync(t, r);
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var n = e;
                  r(n.name + ": " + n.message);
                } else r(e);
            }
          }),
          (t.prototype.disconnect = function (e, t) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                (this.privRoom = void 0),
                this.privReco.disconnectAsync(e, t);
            } catch (e) {
              if (t)
                if (e instanceof Error) {
                  var r = e;
                  t(r.name + ": " + r.message);
                } else t(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendMessageRequest = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.participantId,
                  "participantId"
                ),
                s.Contracts.throwIfNullOrWhitespace(e, "message");
              var n = {
                participantId: this.privRoom.participantId,
                roomId: this.privRoom.roomId,
                text: e,
                type: u.ConversationTranslatorMessageTypes.instantMessage,
              };
              this.sendMessage(JSON.stringify(n), t, r);
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendLockRequest = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.participantId,
                  "participantId"
                ),
                s.Contracts.throwIfNullOrUndefined(e, "isLocked");
              var n = {
                command: u.ConversationTranslatorCommandTypes.setLockState,
                participantId: this.privRoom.participantId,
                roomid: this.privRoom.roomId,
                type: u.ConversationTranslatorMessageTypes.participantCommand,
                value: e,
              };
              this.sendMessage(JSON.stringify(n), t, r);
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendMuteAllRequest = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.participantId,
                  "participantId"
                ),
                s.Contracts.throwIfNullOrUndefined(e, "isMuted");
              var n = {
                command: u.ConversationTranslatorCommandTypes.setMuteAll,
                participantId: this.privRoom.participantId,
                roomid: this.privRoom.roomId,
                type: u.ConversationTranslatorMessageTypes.participantCommand,
                value: e,
              };
              this.sendMessage(JSON.stringify(n), t, r);
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendMuteRequest = function (e, t, r, n) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(e, "participantId"),
                s.Contracts.throwIfNullOrUndefined(t, "isMuted");
              var i = {
                command: u.ConversationTranslatorCommandTypes.setMute,
                participantId: e,
                roomid: this.privRoom.roomId,
                type: u.ConversationTranslatorMessageTypes.participantCommand,
                value: t,
              };
              this.sendMessage(JSON.stringify(i), r, n);
            } catch (e) {
              if (n)
                if (e instanceof Error) {
                  var o = e;
                  n(o.name + ": " + o.message);
                } else n(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendEjectRequest = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(e, "participantId");
              var n = {
                command: u.ConversationTranslatorCommandTypes.ejectParticipant,
                participantId: e,
                roomid: this.privRoom.roomId,
                type: u.ConversationTranslatorMessageTypes.participantCommand,
              };
              if ((this.sendMessage(JSON.stringify(n), t, r), t))
                try {
                  t();
                } catch (e) {
                  r && r(e);
                }
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.sendChangeNicknameRequest = function (e, t, r) {
            try {
              s.Contracts.throwIfDisposed(this.privIsDisposed),
                s.Contracts.throwIfNullOrWhitespace(
                  this.privRoom.roomId,
                  "conversationId"
                ),
                s.Contracts.throwIfNullOrWhitespace(e, "nickname");
              var n = {
                command: u.ConversationTranslatorCommandTypes.changeNickname,
                nickname: e,
                participantId: this.privRoom.participantId,
                roomid: this.privRoom.roomId,
                type: u.ConversationTranslatorMessageTypes.participantCommand,
                value: e,
              };
              this.sendMessage(JSON.stringify(n), t, r);
            } catch (e) {
              if (r)
                if (e instanceof Error) {
                  var i = e;
                  r(i.name + ": " + i.message);
                } else r(e);
              this.dispose(!0);
            }
          }),
          (t.prototype.close = function () {
            s.Contracts.throwIfDisposed(this.privIsDisposed), this.dispose(!0);
          }),
          (t.prototype.dispose = function (t) {
            this.privIsDisposed ||
              (t &&
                ((this.privIsDisposed = !0),
                e.prototype.dispose.call(this, t)));
          }),
          (t.prototype.createRecognizerConfig = function (e) {
            return new o.RecognizerConfig(e, this.privProperties);
          }),
          (t.prototype.createServiceRecognizer = function (e, t, r, n) {
            var i = r;
            return new p.ConversationServiceAdapter(e, t, i, n, this);
          }),
          (t.prototype.sendMessage = function (e, t, r) {
            var n = this.privReco;
            v.PromiseToEmptyCallback(n.sendMessageAsync(e), t, r);
          }),
          t
        );
      })(a.Recognizer);
    t.ConversationTranslatorRecognizer = f;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(2),
      s = r(4),
      a = r(31),
      c = r(29),
      p = r(65),
      u = r(138),
      v = r(141),
      f = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.prototype.create = function (e, t, r) {
            var n = e.parameters.getProperty(
                c.PropertyId.ConversationTranslator_Host,
                u.ConversationTranslatorConfig.host
              ),
              i = e.parameters.getProperty(
                c.PropertyId.ConversationTranslator_CorrelationId,
                s.createGuid()
              ),
              p = "wss://" + n + u.ConversationTranslatorConfig.webSocketPath,
              f = e.parameters.getProperty(
                c.PropertyId.ConversationTranslator_Token,
                void 0
              );
            a.Contracts.throwIfNullOrUndefined(f, "token");
            var h = {};
            return (
              (h[u.ConversationTranslatorConfig.params.apiVersion] =
                u.ConversationTranslatorConfig.apiVersion),
              (h[u.ConversationTranslatorConfig.params.token] = f),
              (h[u.ConversationTranslatorConfig.params.correlationId] = i),
              new o.WebsocketConnection(
                p,
                h,
                {},
                new v.ConversationWebsocketMessageFormatter(),
                o.ProxyInfo.fromRecognizerConfig(e),
                r
              )
            );
          }),
          t
        );
      })(p.ConnectionFactoryBase);
    t.ConversationConnectionFactory = f;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(142),
      o = function () {
        (this.toConnectionMessage = function (e) {
          var t = new n.Deferred();
          try {
            if (e.messageType === n.MessageType.Text) {
              var r = new i.ConversationConnectionMessage(
                e.messageType,
                e.textContent,
                {},
                e.id
              );
              t.resolve(r);
            } else
              e.messageType === n.MessageType.Binary &&
                t.resolve(
                  new i.ConversationConnectionMessage(
                    e.messageType,
                    e.binaryContent,
                    void 0,
                    e.id
                  )
                );
          } catch (e) {
            t.reject("Error formatting the message. Error: " + e);
          }
          return t.promise();
        }),
          (this.fromConnectionMessage = function (e) {
            var t = new n.Deferred();
            try {
              if (e.messageType === n.MessageType.Text) {
                var r = "" + (e.textBody ? e.textBody : "");
                t.resolve(
                  new n.RawWebsocketMessage(n.MessageType.Text, r, e.id)
                );
              }
            } catch (e) {
              t.reject("Error formatting the message. " + e);
            }
            return t.promise();
          });
      };
    t.ConversationWebsocketMessageFormatter = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function (e) {
      function t(t, r, n, i) {
        var o = e.call(this, t, r, n, i) || this,
          s = JSON.parse(o.textBody);
        return void 0 !== s.type && (o.privConversationMessageType = s.type), o;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "conversationMessageType", {
          get: function () {
            return this.privConversationMessageType;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(r(4).ConnectionMessage);
    t.ConversationConnectionMessage = o;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = r(16),
      a = r(29),
      c = r(24),
      p = r(142),
      u = r(144),
      v = r(145),
      f = r(146),
      h = r(147),
      l = (function (e) {
        function t(t, r, n, i, c) {
          var l = e.call(this, t, r, n, i, c) || this;
          return (
            (l.privLastPartialUtteranceId = ""),
            (l.sendMessageAsync = function (e) {
              var t = new s.Sink();
              return (
                l.fetchConversationConnection().continueWith(function (r) {
                  try {
                    r.isError
                      ? t.reject(r.error)
                      : r.result
                          .send(
                            new p.ConversationConnectionMessage(
                              o.MessageType.Text,
                              e
                            )
                          )
                          .continueWith(function (e) {
                            try {
                              e.isError
                                ? t.reject(e.error)
                                : t.resolve(e.result);
                            } catch (e) {
                              t.reject("Unhandled inner error: " + e);
                            }
                          });
                  } catch (e) {
                    t.reject("Unhandled error: " + e);
                  }
                }),
                new o.Promise(t)
              );
            }),
            (l.noOp = function () {}),
            (l.receiveConversationMessageOverride = function (e, t) {
              var r = new o.Deferred();
              return (
                l.fetchConversationConnection().on(
                  function (e) {
                    return e.read().onSuccessContinueWithPromise(function (e) {
                      var t = l.isDisposed(),
                        n = !l.isDisposed() && l.terminateMessageLoop,
                        i = l.privConversationRequestSession.sessionId,
                        s = !1;
                      if (t || n)
                        return (
                          r.resolve(void 0), o.PromiseHelper.fromResult(void 0)
                        );
                      if (!e) return l.receiveConversationMessageOverride();
                      try {
                        switch (e.conversationMessageType.toLowerCase()) {
                          case "info":
                          case "participant_command":
                          case "command":
                            var c = h.CommandResponsePayload.fromJSON(
                              e.textBody
                            );
                            switch (c.command.toLowerCase()) {
                              case "participantlist":
                                var p =
                                    h.ParticipantsListPayloadResponse.fromJSON(
                                      e.textBody
                                    ),
                                  u = p.participants.map(function (e) {
                                    return {
                                      avatar: e.avatar,
                                      displayName: e.nickname,
                                      id: e.participantId,
                                      isHost: e.ishost,
                                      isMuted: e.ismuted,
                                      isUsingTts: e.usetts,
                                      preferredLanguage: e.locale,
                                    };
                                  });
                                l.privConversationServiceConnector
                                  .participantsListReceived &&
                                  l.privConversationServiceConnector.participantsListReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantsListEventArgs(
                                      p.roomid,
                                      p.token,
                                      p.translateTo,
                                      p.profanityFilter,
                                      p.roomProfanityFilter,
                                      p.roomLocked,
                                      p.muteAll,
                                      u,
                                      i
                                    )
                                  );
                                break;
                              case "settranslatetolanguages":
                                l.privConversationServiceConnector
                                  .participantUpdateCommandReceived &&
                                  l.privConversationServiceConnector.participantUpdateCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantAttributeEventArgs(
                                      c.participantId,
                                      f.ConversationTranslatorCommandTypes.setTranslateToLanguages,
                                      c.value,
                                      i
                                    )
                                  );
                                break;
                              case "setprofanityfiltering":
                                l.privConversationServiceConnector
                                  .participantUpdateCommandReceived &&
                                  l.privConversationServiceConnector.participantUpdateCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantAttributeEventArgs(
                                      c.participantId,
                                      f.ConversationTranslatorCommandTypes.setProfanityFiltering,
                                      c.value,
                                      i
                                    )
                                  );
                                break;
                              case "setmute":
                                l.privConversationServiceConnector
                                  .participantUpdateCommandReceived &&
                                  l.privConversationServiceConnector.participantUpdateCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantAttributeEventArgs(
                                      c.participantId,
                                      f.ConversationTranslatorCommandTypes.setMute,
                                      c.value,
                                      i
                                    )
                                  );
                                break;
                              case "setmuteall":
                                l.privConversationServiceConnector
                                  .muteAllCommandReceived &&
                                  l.privConversationServiceConnector.muteAllCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.MuteAllEventArgs(c.value, i)
                                  );
                                break;
                              case "roomexpirationwarning":
                                l.privConversationServiceConnector
                                  .conversationExpiration &&
                                  l.privConversationServiceConnector.conversationExpiration(
                                    l.privConversationServiceConnector,
                                    new a.ConversationExpirationEventArgs(
                                      c.value,
                                      l.privConversationRequestSession.sessionId
                                    )
                                  );
                                break;
                              case "setusetts":
                                l.privConversationServiceConnector
                                  .participantUpdateCommandReceived &&
                                  l.privConversationServiceConnector.participantUpdateCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantAttributeEventArgs(
                                      c.participantId,
                                      f.ConversationTranslatorCommandTypes.setUseTTS,
                                      c.value,
                                      i
                                    )
                                  );
                                break;
                              case "setlockstate":
                                l.privConversationServiceConnector
                                  .lockRoomCommandReceived &&
                                  l.privConversationServiceConnector.lockRoomCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.LockRoomEventArgs(c.value, i)
                                  );
                                break;
                              case "changenickname":
                                l.privConversationServiceConnector
                                  .participantUpdateCommandReceived &&
                                  l.privConversationServiceConnector.participantUpdateCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantAttributeEventArgs(
                                      c.participantId,
                                      f.ConversationTranslatorCommandTypes.changeNickname,
                                      c.nickname,
                                      i
                                    )
                                  );
                                break;
                              case "joinsession":
                                var d = h.ParticipantPayloadResponse.fromJSON(
                                    e.textBody
                                  ),
                                  g = {
                                    avatar: d.avatar,
                                    displayName: d.nickname,
                                    id: d.participantId,
                                    isHost: d.ishost,
                                    isMuted: d.ismuted,
                                    isUsingTts: d.usetts,
                                    preferredLanguage: d.locale,
                                  };
                                l.privConversationServiceConnector
                                  .participantJoinCommandReceived &&
                                  l.privConversationServiceConnector.participantJoinCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantEventArgs(g, i)
                                  );
                                break;
                              case "leavesession":
                                var y = { id: c.participantId };
                                l.privConversationServiceConnector
                                  .participantLeaveCommandReceived &&
                                  l.privConversationServiceConnector.participantLeaveCommandReceived(
                                    l.privConversationServiceConnector,
                                    new v.ParticipantEventArgs(y, i)
                                  );
                                break;
                              case "disconnectsession":
                                c.participantId;
                            }
                            break;
                          case "partial":
                          case "final":
                            var m = h.SpeechResponsePayload.fromJSON(
                                e.textBody
                              ),
                              S = new a.ConversationTranslationResult(
                                m.participantId,
                                l.getTranslations(m.translations),
                                m.language,
                                void 0,
                                void 0,
                                m.recognition,
                                void 0,
                                void 0,
                                e.textBody,
                                void 0
                              );
                            m.isFinal
                              ? (void 0 !== S.text && S.text.length > 0
                                  ? (s = !0)
                                  : m.id === l.privLastPartialUtteranceId &&
                                    (s = !0),
                                s &&
                                  l.privConversationServiceConnector
                                    .translationReceived &&
                                  l.privConversationServiceConnector.translationReceived(
                                    l.privConversationServiceConnector,
                                    new v.ConversationReceivedTranslationEventArgs(
                                      f.ConversationTranslatorMessageTypes.final,
                                      S,
                                      i
                                    )
                                  ))
                              : void 0 !== S.text &&
                                ((l.privLastPartialUtteranceId = m.id),
                                l.privConversationServiceConnector
                                  .translationReceived &&
                                  l.privConversationServiceConnector.translationReceived(
                                    l.privConversationServiceConnector,
                                    new v.ConversationReceivedTranslationEventArgs(
                                      f.ConversationTranslatorMessageTypes.partial,
                                      S,
                                      i
                                    )
                                  ));
                            break;
                          case "translated_message":
                            var C = h.TextResponsePayload.fromJSON(e.textBody),
                              b = new a.ConversationTranslationResult(
                                C.participantId,
                                l.getTranslations(C.translations),
                                C.language,
                                void 0,
                                void 0,
                                C.originalText,
                                void 0,
                                void 0,
                                void 0,
                                e.textBody,
                                void 0
                              );
                            l.privConversationServiceConnector
                              .translationReceived &&
                              l.privConversationServiceConnector.translationReceived(
                                l.privConversationServiceConnector,
                                new v.ConversationReceivedTranslationEventArgs(
                                  f.ConversationTranslatorMessageTypes.instantMessage,
                                  b,
                                  i
                                )
                              );
                        }
                      } catch (e) {}
                      return l.receiveConversationMessageOverride();
                    });
                  },
                  function (e) {
                    l.terminateMessageLoop = !0;
                  }
                ),
                r.promise()
              );
            }),
            (l.fetchConversationConnection = function () {
              return l.configConnection();
            }),
            (l.privConversationServiceConnector = c),
            (l.privConversationAuthentication = t),
            (l.receiveMessageOverride = l.receiveConversationMessageOverride),
            (l.recognizeOverride = l.noOp),
            (l.connectImplOverride = l.conversationConnectImpl),
            (l.configConnectionOverride = l.configConnection),
            (l.fetchConnectionOverride = l.fetchConversationConnection),
            (l.disconnectOverride = l.privDisconnect),
            (l.privConversationRequestSession =
              new u.ConversationRequestSession(o.createNoDashGuid())),
            (l.privConversationConnectionFactory = r),
            (l.privConversationIsDisposed = !1),
            l
          );
        }
        return (
          i(t, e),
          (t.prototype.isDisposed = function () {
            return this.privConversationIsDisposed;
          }),
          (t.prototype.dispose = function (e) {
            (this.privConversationIsDisposed = !0),
              this.privConnectionConfigPromise &&
                this.privConnectionConfigPromise.onSuccessContinueWith(
                  function (t) {
                    t.dispose(e);
                  }
                );
          }),
          (t.prototype.sendMessage = function (e) {
            this.fetchConversationConnection().onSuccessContinueWith(function (
              t
            ) {
              t.send(
                new p.ConversationConnectionMessage(o.MessageType.Text, e)
              );
            });
          }),
          (t.prototype.privDisconnect = function () {
            this.terminateMessageLoop ||
              (this.cancelRecognition(
                this.privConversationRequestSession.sessionId,
                this.privConversationRequestSession.requestId,
                a.CancellationReason.Error,
                a.CancellationErrorCode.NoError,
                "Disconnecting"
              ),
              (this.terminateMessageLoop = !0),
              this.privConversationConnectionPromise.result().isCompleted
                ? this.privConversationConnectionPromise.result().isError ||
                  (this.privConversationConnectionPromise
                    .result()
                    .result.dispose(),
                  (this.privConversationConnectionPromise = null))
                : this.privConversationConnectionPromise.onSuccessContinueWith(
                    function (e) {
                      e.dispose();
                    }
                  ));
          }),
          (t.prototype.processTypeSpecificMessages = function (e, t, r) {
            return !0;
          }),
          (t.prototype.cancelRecognition = function (e, t, r, n, i) {
            this.terminateMessageLoop = !0;
            var o = new a.ConversationTranslationCanceledEventArgs(
              r,
              i,
              n,
              void 0,
              e
            );
            try {
              this.privConversationServiceConnector.canceled &&
                this.privConversationServiceConnector.canceled(
                  this.privConversationServiceConnector,
                  o
                );
            } catch (e) {}
          }),
          (t.prototype.conversationConnectImpl = function (e) {
            var t = this;
            if (
              (void 0 === e && (e = !1), this.privConversationConnectionPromise)
            )
              return this.privConversationConnectionPromise.result()
                .isCompleted &&
                (this.privConversationConnectionPromise.result().isError ||
                  this.privConversationConnectionPromise
                    .result()
                    .result.state() === o.ConnectionState.Disconnected)
                ? ((this.privConnectionId = null),
                  (this.privConversationConnectionPromise = null),
                  (this.terminateMessageLoop = !0),
                  this.conversationConnectImpl())
                : this.privConversationConnectionPromise;
            (this.privConversationAuthFetchEventId = o.createNoDashGuid()),
              void 0 === this.privConnectionId &&
                (this.privConnectionId = o.createNoDashGuid()),
              this.privConversationRequestSession.onPreConnectionStart(
                this.privConversationAuthFetchEventId,
                this.privConnectionId
              );
            var r = e
              ? this.privConversationAuthentication.fetchOnExpiry(
                  this.privConversationAuthFetchEventId
                )
              : this.privConversationAuthentication.fetch(
                  this.privConversationAuthFetchEventId
                );
            return (
              (this.privConversationConnectionPromise = r.continueWithPromise(
                function (r) {
                  if (r.isError)
                    throw (
                      (t.privConversationRequestSession.onAuthCompleted(
                        !0,
                        r.error
                      ),
                      new Error(r.error))
                    );
                  t.privConversationRequestSession.onAuthCompleted(!1);
                  var n = t.privConversationConnectionFactory.create(
                    t.privRecognizerConfig,
                    r.result,
                    t.privConnectionId
                  );
                  return (
                    n.events.attach(function (e) {
                      t.connectionEvents.onEvent(e);
                    }),
                    n.open().onSuccessContinueWithPromise(function (r) {
                      if (200 === r.statusCode) {
                        t.privConversationRequestSession.onPreConnectionStart(
                          t.privConversationAuthFetchEventId,
                          t.privConnectionId
                        ),
                          t.privConversationRequestSession.onConnectionEstablishCompleted(
                            r.statusCode
                          );
                        var i = new a.SessionEventArgs(
                          t.privConversationRequestSession.sessionId
                        );
                        return (
                          t.privConversationServiceConnector.connectionOpened &&
                            t.privConversationServiceConnector.connectionOpened(
                              t.privConversationServiceConnector,
                              i
                            ),
                          o.PromiseHelper.fromResult(n)
                        );
                      }
                      return 403 !== r.statusCode || e
                        ? (t.privConversationRequestSession.onConnectionEstablishCompleted(
                            r.statusCode,
                            r.reason
                          ),
                          o.PromiseHelper.fromError(
                            "Unable to contact server. StatusCode: " +
                              r.statusCode +
                              ", " +
                              t.privRecognizerConfig.parameters.getProperty(
                                a.PropertyId.SpeechServiceConnection_Endpoint
                              ) +
                              " Reason: " +
                              r.reason
                          ))
                        : t.conversationConnectImpl(!0);
                    })
                  );
                }
              )),
              (this.privConnectionLoop = this.startMessageLoop()),
              this.privConversationConnectionPromise
            );
          }),
          (t.prototype.startMessageLoop = function () {
            var e = this;
            return (
              (this.terminateMessageLoop = !1),
              this.receiveConversationMessageOverride().on(
                function (e) {
                  return !0;
                },
                function (t) {
                  e.cancelRecognition(
                    e.privRequestSession ? e.privRequestSession.sessionId : "",
                    e.privRequestSession ? e.privRequestSession.requestId : "",
                    a.CancellationReason.Error,
                    a.CancellationErrorCode.RuntimeError,
                    t
                  );
                }
              )
            );
          }),
          (t.prototype.configConnection = function () {
            return this.privConnectionConfigPromise
              ? this.privConnectionConfigPromise.result().isCompleted &&
                (this.privConnectionConfigPromise.result().isError ||
                  this.privConnectionConfigPromise.result().result.state() ===
                    o.ConnectionState.Disconnected)
                ? ((this.privConnectionConfigPromise = null),
                  this.configConnection())
                : this.privConnectionConfigPromise
              : this.terminateMessageLoop
              ? o.PromiseHelper.fromResult(void 0)
              : ((this.privConnectionConfigPromise =
                  this.conversationConnectImpl().onSuccessContinueWith(
                    function (e) {
                      return e;
                    }
                  )),
                this.privConnectionConfigPromise);
          }),
          (t.prototype.getTranslations = function (e) {
            var t;
            if (void 0 !== e) {
              t = new a.Translations();
              for (var r = 0, n = e; r < n.length; r++) {
                var i = n[r];
                t.set(i.lang, i.translation);
              }
            }
            return t;
          }),
          t
        );
      })(c.ServiceRecognizerBase);
    t.ConversationServiceAdapter = l;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = (function () {
        function e(e) {
          var t = this;
          (this.privIsDisposed = !1),
            (this.privDetachables = new Array()),
            (this.onPreConnectionStart = function (e, r) {
              t.privSessionId = r;
            }),
            (this.onAuthCompleted = function (e, r) {
              e && t.onComplete();
            }),
            (this.onConnectionEstablishCompleted = function (e, r) {
              200 !== e && 403 === e && t.onComplete();
            }),
            (this.onServiceTurnEndResponse = function (e) {
              e ? (t.privRequestId = n.createNoDashGuid()) : t.onComplete();
            }),
            (this.dispose = function (e) {
              if (!t.privIsDisposed) {
                t.privIsDisposed = !0;
                for (var r = 0, n = t.privDetachables; r < n.length; r++) {
                  n[r].detach();
                }
              }
            }),
            (this.onComplete = function () {}),
            (this.privSessionId = e),
            (this.privRequestId = n.createNoDashGuid()),
            (this.privRequestCompletionDeferral = new n.Deferred());
        }
        return (
          Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
              return this.privSessionId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "completionPromise", {
            get: function () {
              return this.privRequestCompletionDeferral.promise();
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.ConversationRequestSession = i;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(29),
      s = (function (e) {
        function t(t, r) {
          var n = e.call(this, r) || this;
          return (n.privIsMuted = t), n;
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "isMuted", {
            get: function () {
              return this.privIsMuted;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(o.SessionEventArgs);
    t.MuteAllEventArgs = s;
    var a = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privIsLocked = t), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "isMuted", {
          get: function () {
            return this.privIsLocked;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o.SessionEventArgs);
    t.LockRoomEventArgs = a;
    var c = (function (e) {
      function t(t, r) {
        var n = e.call(this, r) || this;
        return (n.privParticipant = t), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "participant", {
          get: function () {
            return this.privParticipant;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o.SessionEventArgs);
    t.ParticipantEventArgs = c;
    var p = (function (e) {
      function t(t, r, n, i) {
        var o = e.call(this, i) || this;
        return (o.privKey = r), (o.privValue = n), (o.privParticipantId = t), o;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "value", {
          get: function () {
            return this.privValue;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "key", {
          get: function () {
            return this.privKey;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.privParticipantId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o.SessionEventArgs);
    t.ParticipantAttributeEventArgs = p;
    var u = (function (e) {
      function t(t, r, n, i, o, s, a, c, p) {
        var u = e.call(this, p) || this;
        return (
          (u.privRoomId = t),
          (u.privSessionToken = r),
          (u.privTranslateTo = n),
          (u.privProfanityFilter = i),
          (u.privRoomProfanityFilter = o),
          (u.privIsRoomLocked = s),
          (u.privIsRoomLocked = a),
          (u.privParticipants = c),
          u
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "sessionToken", {
          get: function () {
            return this.privSessionToken;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "conversationId", {
          get: function () {
            return this.privRoomId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "translateTo", {
          get: function () {
            return this.privTranslateTo;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "profanityFilter", {
          get: function () {
            return this.privProfanityFilter;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "roomProfanityFilter", {
          get: function () {
            return this.privRoomProfanityFilter;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isRoomLocked", {
          get: function () {
            return this.privIsRoomLocked;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isMuteAll", {
          get: function () {
            return this.privIsMuteAll;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "participants", {
          get: function () {
            return this.privParticipants;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(o.SessionEventArgs);
    t.ParticipantsListEventArgs = u;
    var v = (function () {
      function e(e, t, r) {
        (this.privPayload = t),
          (this.privCommand = e),
          (this.privSessionId = r);
      }
      return (
        Object.defineProperty(e.prototype, "payload", {
          get: function () {
            return this.privPayload;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "command", {
          get: function () {
            return this.privCommand;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "sessionId", {
          get: function () {
            return this.privSessionId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ConversationReceivedTranslationEventArgs = v;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e, t) {
        void 0 === e && (e = []), (this.participants = e), (this.meId = t);
      }
      return (
        (e.prototype.addOrUpdateParticipant = function (e) {
          if (void 0 !== e) {
            var t = this.getParticipantIndex(e.id);
            return (
              t > -1
                ? this.participants.splice(t, 1, e)
                : this.participants.push(e),
              this.getParticipant(e.id)
            );
          }
        }),
        (e.prototype.getParticipantIndex = function (e) {
          return this.participants.findIndex(function (t) {
            return t.id === e;
          });
        }),
        (e.prototype.getParticipant = function (e) {
          return this.participants.find(function (t) {
            return t.id === e;
          });
        }),
        (e.prototype.deleteParticipant = function (e) {
          this.participants = this.participants.filter(function (t) {
            return t.id !== e;
          });
        }),
        Object.defineProperty(e.prototype, "host", {
          get: function () {
            return this.participants.find(function (e) {
              return !0 === e.isHost;
            });
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "me", {
          get: function () {
            return this.getParticipant(this.meId);
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    (t.InternalParticipants = n),
      (t.ConversationTranslatorMessageTypes = {
        command: "command",
        final: "final",
        info: "info",
        instantMessage: "instant_message",
        partial: "partial",
        participantCommand: "participant_command",
        translatedMessage: "translated_message",
      }),
      (t.ConversationTranslatorCommandTypes = {
        changeNickname: "ChangeNickname",
        disconnectSession: "DisconnectSession",
        ejectParticipant: "EjectParticipant",
        instant_message: "instant_message",
        joinSession: "JoinSession",
        leaveSession: "LeaveSession",
        participantList: "ParticipantList",
        roomExpirationWarning: "RoomExpirationWarning",
        setLockState: "SetLockState",
        setMute: "SetMute",
        setMuteAll: "SetMuteAll",
        setProfanityFiltering: "SetProfanityFiltering",
        setTranslateToLanguages: "SetTranslateToLanguages",
        setUseTTS: "SetUseTTS",
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(148);
    t.CommandResponsePayload = n.CommandResponsePayload;
    var i = r(149);
    (t.ParticipantsListPayloadResponse = i.ParticipantsListPayloadResponse),
      (t.ParticipantPayloadResponse = i.ParticipantPayloadResponse);
    var o = r(150);
    (t.SpeechResponsePayload = o.SpeechResponsePayload),
      (t.TextResponsePayload = o.TextResponsePayload);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privCommandResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "type", {
          get: function () {
            return this.privCommandResponse.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "command", {
          get: function () {
            return this.privCommandResponse.command;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privCommandResponse.id;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nickname", {
          get: function () {
            return this.privCommandResponse.nickname;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participantId", {
          get: function () {
            return this.privCommandResponse.participantId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "roomid", {
          get: function () {
            return this.privCommandResponse.roomid;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "value", {
          get: function () {
            return this.privCommandResponse.value;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.CommandResponsePayload = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privParticipantsPayloadResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "roomid", {
          get: function () {
            return this.privParticipantsPayloadResponse.roomid;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privParticipantsPayloadResponse.id;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "command", {
          get: function () {
            return this.privParticipantsPayloadResponse.command;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participants", {
          get: function () {
            return this.privParticipantsPayloadResponse.participants;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "token", {
          get: function () {
            return this.privParticipantsPayloadResponse.token;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "translateTo", {
          get: function () {
            return this.privParticipantsPayloadResponse.translateTo;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "profanityFilter", {
          get: function () {
            return this.privParticipantsPayloadResponse.profanityFilter;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "roomProfanityFilter", {
          get: function () {
            return this.privParticipantsPayloadResponse.roomProfanityFilter;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "roomLocked", {
          get: function () {
            return this.privParticipantsPayloadResponse.roomLocked;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "muteAll", {
          get: function () {
            return this.privParticipantsPayloadResponse.muteAll;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "type", {
          get: function () {
            return this.privParticipantsPayloadResponse.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ParticipantsListPayloadResponse = n;
    var i = (function () {
      function e(e) {
        this.privParticipantPayloadResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "nickname", {
          get: function () {
            return this.privParticipantPayloadResponse.nickname;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "locale", {
          get: function () {
            return this.privParticipantPayloadResponse.locale;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "usetts", {
          get: function () {
            return this.privParticipantPayloadResponse.usetts;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "ismuted", {
          get: function () {
            return this.privParticipantPayloadResponse.ismuted;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "ishost", {
          get: function () {
            return this.privParticipantPayloadResponse.ishost;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participantId", {
          get: function () {
            return this.privParticipantPayloadResponse.participantId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "avatar", {
          get: function () {
            return this.privParticipantPayloadResponse.avatar;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.ParticipantPayloadResponse = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privSpeechResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "recognition", {
          get: function () {
            return this.privSpeechResponse.recognition;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "translations", {
          get: function () {
            return this.privSpeechResponse.translations;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privSpeechResponse.id;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "language", {
          get: function () {
            return this.privSpeechResponse.language;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nickname", {
          get: function () {
            return this.privSpeechResponse.nickname;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participantId", {
          get: function () {
            return this.privSpeechResponse.participantId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "roomid", {
          get: function () {
            return this.privSpeechResponse.roomid;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "timestamp", {
          get: function () {
            return this.privSpeechResponse.timestamp;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "type", {
          get: function () {
            return this.privSpeechResponse.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "isFinal", {
          get: function () {
            return "final" === this.privSpeechResponse.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SpeechResponsePayload = n;
    var i = (function () {
      function e(e) {
        this.privTextResponse = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "originalText", {
          get: function () {
            return this.privTextResponse.originalText;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "translations", {
          get: function () {
            return this.privTextResponse.translations;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.privTextResponse.id;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "language", {
          get: function () {
            return this.privTextResponse.language;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nickname", {
          get: function () {
            return this.privTextResponse.nickname;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "participantId", {
          get: function () {
            return this.privTextResponse.participantId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "roomid", {
          get: function () {
            return this.privTextResponse.roomid;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "timestamp", {
          get: function () {
            return this.privTextResponse.timestamp;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "type", {
          get: function () {
            return this.privTextResponse.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.TextResponsePayload = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        this.privSynthesisAudioMetadata = JSON.parse(e);
      }
      return (
        (e.fromJSON = function (t) {
          return new e(t);
        }),
        Object.defineProperty(e.prototype, "Metadata", {
          get: function () {
            return this.privSynthesisAudioMetadata.Metadata;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SynthesisAudioMetadata = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(36),
      o = r(153),
      s = r(154),
      a = (function () {
        function e() {
          var e = this;
          (this.privIsDisposed = !1),
            (this.privIsSynthesizing = !1),
            (this.privIsSynthesisEnded = !1),
            (this.privBytesReceived = 0),
            (this.privTextOffset = 0),
            (this.privNextSearchTextIndex = 0),
            (this.onPreConnectionStart = function (t, r) {
              (e.privAuthFetchEventId = t),
                e.onEvent(
                  new s.ConnectingToSynthesisServiceEvent(
                    e.privRequestId,
                    e.privAuthFetchEventId
                  )
                );
            }),
            (this.onAuthCompleted = function (t, r) {
              t && e.onComplete();
            }),
            (this.onConnectionEstablishCompleted = function (t, r) {
              if (200 === t)
                return (
                  e.onEvent(
                    new s.SynthesisStartedEvent(
                      e.requestId,
                      e.privAuthFetchEventId
                    )
                  ),
                  void (e.privBytesReceived = 0)
                );
              403 === t && e.onComplete();
            }),
            (this.onServiceResponseMessage = function (t) {
              var r = JSON.parse(t);
              e.streamId = r.audio.streamId;
            }),
            (this.onServiceTurnEndResponse = function () {
              e.privTurnDeferral.resolve(!0), e.onComplete();
            }),
            (this.onServiceTurnStartResponse = function () {
              e.privTurnDeferral.state() === n.PromiseState.None &&
                e.privTurnDeferral.reject(
                  "Another turn started before current completed."
                ),
                (e.privTurnDeferral = new n.Deferred());
            }),
            (this.dispose = function (t) {
              e.privIsDisposed || (e.privIsDisposed = !0);
            }),
            (this.onEvent = function (e) {
              n.Events.instance.onEvent(e);
            }),
            (this.onComplete = function () {
              e.privIsSynthesizing &&
                ((e.privIsSynthesizing = !1),
                (e.privIsSynthesisEnded = !0),
                e.privAudioOutputStream.close(),
                void 0 !== e.privTurnAudioDestination &&
                  (e.privTurnAudioDestination.close(),
                  (e.privTurnAudioDestination = void 0)));
            }),
            (this.privRequestId = n.createNoDashGuid()),
            (this.privAudioNodeId = n.createNoDashGuid()),
            (this.privTurnDeferral = new n.Deferred()),
            this.privTurnDeferral.resolve(!0);
        }
        return (
          Object.defineProperty(e.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "streamId", {
            get: function () {
              return this.privStreamId;
            },
            set: function (e) {
              this.privStreamId = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "audioOutputFormat", {
            get: function () {
              return this.privAudioOutputFormat;
            },
            set: function (e) {
              this.privAudioOutputFormat = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "turnCompletionPromise", {
            get: function () {
              return this.privTurnDeferral.promise();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "isSynthesisEnded", {
            get: function () {
              return this.privIsSynthesisEnded;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "isSynthesizing", {
            get: function () {
              return this.privIsSynthesizing;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "currentTextOffset", {
            get: function () {
              return this.privTextOffset;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "bytesReceived", {
            get: function () {
              return this.privBytesReceived;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "allReceivedAudio", {
            get: function () {
              return this.privReceivedAudio
                ? this.privReceivedAudio
                : this.privIsSynthesisEnded
                ? (this.readAllAudioFromStream(), this.allReceivedAudio)
                : null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "allReceivedAudioWithHeader", {
            get: function () {
              return this.privReceivedAudioWithHeader
                ? this.privReceivedAudioWithHeader
                : this.privIsSynthesisEnded
                ? this.audioOutputFormat.hasHeader
                  ? ((this.privReceivedAudioWithHeader =
                      o.SynthesisAdapterBase.addHeader(
                        this.allReceivedAudio,
                        this.audioOutputFormat
                      )),
                    this.allReceivedAudioWithHeader)
                  : this.allReceivedAudio
                : null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.startNewSynthesis = function (e, t, r, n) {
            (this.privIsSynthesisEnded = !1),
              (this.privIsSynthesizing = !0),
              (this.privRequestId = e),
              (this.privRawText = t),
              (this.privIsSSML = r),
              (this.privAudioOutputStream = new i.PullAudioOutputStreamImpl()),
              (this.privAudioOutputStream.format = this.privAudioOutputFormat),
              (this.privReceivedAudio = null),
              (this.privReceivedAudioWithHeader = null),
              (this.privBytesReceived = 0),
              (this.privTextOffset = 0),
              (this.privNextSearchTextIndex = 0),
              void 0 !== n &&
                ((this.privTurnAudioDestination = n),
                (this.privTurnAudioDestination.format =
                  this.privAudioOutputFormat)),
              this.onEvent(
                new s.SynthesisTriggeredEvent(
                  this.requestId,
                  void 0,
                  void 0 === n ? void 0 : n.id()
                )
              );
          }),
          (e.prototype.onAudioChunkReceived = function (e) {
            this.isSynthesizing &&
              (this.privAudioOutputStream.write(e),
              (this.privBytesReceived += e.byteLength),
              void 0 !== this.privTurnAudioDestination &&
                this.privTurnAudioDestination.write(e));
          }),
          (e.prototype.onWordBoundaryEvent = function (e) {
            this.updateTextOffset(e);
          }),
          (e.prototype.onStopSynthesizing = function () {
            this.onComplete();
          }),
          (e.prototype.updateTextOffset = function (e) {
            this.privTextOffset >= 0 &&
              ((this.privTextOffset = this.privRawText.indexOf(
                e,
                this.privNextSearchTextIndex
              )),
              this.privTextOffset >= 0 &&
                (this.privNextSearchTextIndex = this.privTextOffset + e.length),
              this.privIsSSML &&
                this.privRawText.indexOf("<", this.privTextOffset + 1) >
                  this.privRawText.indexOf(">", this.privTextOffset + 1) &&
                this.updateTextOffset(e));
          }),
          (e.prototype.readAllAudioFromStream = function () {
            if (this.privIsSynthesisEnded) {
              this.privReceivedAudio = new ArrayBuffer(this.bytesReceived);
              try {
                this.privAudioOutputStream.read(this.privReceivedAudio);
              } catch (e) {
                this.privReceivedAudio = new ArrayBuffer(0);
              }
            }
          }),
          e
        );
      })();
    t.SynthesisTurn = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(29),
      o = r(24),
      s = r(108),
      a = (function () {
        function e(t, r, a, c, p) {
          var u = this;
          if (
            ((this.speakOverride = void 0),
            (this.receiveMessageOverride = void 0),
            (this.connectImplOverride = void 0),
            (this.configConnectionOverride = void 0),
            (this.fetchConnectionOverride = void 0),
            (this.receiveMessage = function () {
              return u.fetchConnection().on(
                function (t) {
                  return t.read().onSuccessContinueWithPromise(function (t) {
                    if (void 0 !== u.receiveMessageOverride)
                      return u.receiveMessageOverride();
                    if (u.privIsDisposed)
                      return n.PromiseHelper.fromResult(void 0);
                    if (!t)
                      return u.privSynthesisTurn.isSynthesizing
                        ? u.receiveMessage()
                        : n.PromiseHelper.fromResult(!0);
                    u.privServiceHasSentMessage = !0;
                    var r = s.SpeechConnectionMessage.fromConnectionMessage(t);
                    if (
                      r.requestId.toLowerCase() ===
                      u.privSynthesisTurn.requestId.toLowerCase()
                    )
                      switch (r.path.toLowerCase()) {
                        case "turn.start":
                          u.privSynthesisTurn.onServiceTurnStartResponse();
                          break;
                        case "response":
                          u.privSynthesisTurn.onServiceResponseMessage(
                            r.textBody
                          );
                          break;
                        case "audio":
                          if (
                            u.privSynthesisTurn.streamId.toLowerCase() ===
                              r.streamId.toLowerCase() &&
                            r.binaryBody
                          ) {
                            if (
                              (u.privSynthesisTurn.onAudioChunkReceived(
                                r.binaryBody
                              ),
                              u.privSpeechSynthesizer.synthesizing)
                            )
                              try {
                                var a = e.addHeader(
                                    r.binaryBody,
                                    u.privSynthesisTurn.audioOutputFormat
                                  ),
                                  c = new i.SpeechSynthesisEventArgs(
                                    new i.SpeechSynthesisResult(
                                      u.privSynthesisTurn.requestId,
                                      i.ResultReason.SynthesizingAudio,
                                      a
                                    )
                                  );
                                u.privSpeechSynthesizer.synthesizing(
                                  u.privSpeechSynthesizer,
                                  c
                                );
                              } catch (e) {}
                            void 0 !== u.privSessionAudioDestination &&
                              u.privSessionAudioDestination.write(r.binaryBody);
                          }
                          break;
                        case "audio.metadata":
                          for (
                            var p = 0,
                              v = o.SynthesisAudioMetadata.fromJSON(
                                r.textBody
                              ).Metadata;
                            p < v.length;
                            p++
                          ) {
                            var f = v[p];
                            if (
                              f.Type.toLowerCase() ===
                              "WordBoundary".toLowerCase()
                            ) {
                              u.privSynthesisTurn.onWordBoundaryEvent(
                                f.Data.text.Text
                              );
                              c = new i.SpeechSynthesisWordBoundaryEventArgs(
                                f.Data.Offset,
                                f.Data.text.Text,
                                f.Data.text.Length,
                                u.privSynthesisTurn.currentTextOffset
                              );
                              if (u.privSpeechSynthesizer.wordBoundary)
                                try {
                                  u.privSpeechSynthesizer.wordBoundary(
                                    u.privSpeechSynthesizer,
                                    c
                                  );
                                } catch (e) {}
                            }
                          }
                          break;
                        case "turn.end":
                          u.privSynthesisTurn.onServiceTurnEndResponse();
                          var h = void 0;
                          try {
                            (h = new i.SpeechSynthesisResult(
                              u.privSynthesisTurn.requestId,
                              i.ResultReason.SynthesizingAudioCompleted,
                              u.privSynthesisTurn.allReceivedAudioWithHeader
                            )),
                              u.privSuccessCallback && u.privSuccessCallback(h);
                          } catch (e) {
                            u.privErrorCallback && u.privErrorCallback(e);
                          }
                          if (u.privSpeechSynthesizer.synthesisCompleted)
                            try {
                              u.privSpeechSynthesizer.synthesisCompleted(
                                u.privSpeechSynthesizer,
                                new i.SpeechSynthesisEventArgs(h)
                              );
                            } catch (e) {}
                          break;
                        default:
                          u.processTypeSpecificMessages(r) ||
                            (u.privServiceEvents &&
                              u.serviceEvents.onEvent(
                                new n.ServiceEvent(
                                  r.path.toLowerCase(),
                                  r.textBody
                                )
                              ));
                      }
                    return u.receiveMessage();
                  });
                },
                function (e) {}
              );
            }),
            (this.sendSynthesisContext = function (e) {
              var t = JSON.stringify(u.buildSynthesisContext());
              return t
                ? e.send(
                    new s.SpeechConnectionMessage(
                      n.MessageType.Text,
                      "synthesis.context",
                      u.privSynthesisTurn.requestId,
                      "application/json",
                      t
                    )
                  )
                : n.PromiseHelper.fromResult(!0);
            }),
            (this.sendSpeechServiceConfig = function (e, t) {
              return t
                ? e.send(
                    new s.SpeechConnectionMessage(
                      n.MessageType.Text,
                      "speech.config",
                      u.privSynthesisTurn.requestId,
                      "application/json",
                      t
                    )
                  )
                : n.PromiseHelper.fromResult(!0);
            }),
            (this.sendSsmlMessage = function (e, t, r) {
              return e.send(
                new s.SpeechConnectionMessage(
                  n.MessageType.Text,
                  "ssml",
                  r,
                  "application/ssml+xml",
                  t
                )
              );
            }),
            (this.fetchConnection = function () {
              return void 0 !== u.fetchConnectionOverride
                ? u.fetchConnectionOverride()
                : u.configureConnection();
            }),
            !t)
          )
            throw new n.ArgumentNullError("authentication");
          if (!r) throw new n.ArgumentNullError("connectionFactory");
          if (!a) throw new n.ArgumentNullError("synthesizerConfig");
          (this.privAuthentication = t),
            (this.privConnectionFactory = r),
            (this.privSynthesizerConfig = a),
            (this.privIsDisposed = !1),
            (this.privSpeechSynthesizer = c),
            (this.privSessionAudioDestination = p),
            (this.privSynthesisTurn = new o.SynthesisTurn()),
            (this.privConnectionEvents = new n.EventSource()),
            (this.privServiceEvents = new n.EventSource()),
            (this.privDynamicGrammar = new o.DynamicGrammarBuilder()),
            (this.privSpeechContext = new o.SpeechContext(
              this.privDynamicGrammar
            )),
            (this.privAgentConfig = new o.AgentConfig()),
            this.connectionEvents.attach(function (e) {
              if ("ConnectionClosedEvent" === e.name) {
                var t = e;
                u.cancelSynthesisLocal(
                  i.CancellationReason.Error,
                  1007 === t.statusCode
                    ? i.CancellationErrorCode.BadRequestParameters
                    : i.CancellationErrorCode.ConnectionFailure,
                  t.reason + " websocket error code: " + t.statusCode
                );
              }
            });
        }
        return (
          Object.defineProperty(e.prototype, "synthesisContext", {
            get: function () {
              return this.privSpeechContext;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "dynamicGrammar", {
            get: function () {
              return this.privDynamicGrammar;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "agentConfig", {
            get: function () {
              return this.privAgentConfig;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "connectionEvents", {
            get: function () {
              return this.privConnectionEvents;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "serviceEvents", {
            get: function () {
              return this.privServiceEvents;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "activityTemplate", {
            get: function () {
              return this.privActivityTemplate;
            },
            set: function (e) {
              this.privActivityTemplate = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "audioOutputFormat", {
            set: function (e) {
              (this.privAudioOutputFormat = e),
                (this.privSynthesisTurn.audioOutputFormat = e),
                void 0 !== this.privSessionAudioDestination &&
                  (this.privSessionAudioDestination.format = e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.addHeader = function (e, t) {
            if (!t.hasHeader) return e;
            t.updateHeader(e.byteLength);
            var r = new Uint8Array(e.byteLength + t.header.byteLength);
            return (
              r.set(new Uint8Array(t.header), 0),
              r.set(new Uint8Array(e), t.header.byteLength),
              r.buffer
            );
          }),
          (e.prototype.isDisposed = function () {
            return this.privIsDisposed;
          }),
          (e.prototype.dispose = function (e) {
            (this.privIsDisposed = !0),
              void 0 !== this.privSessionAudioDestination &&
                this.privSessionAudioDestination.close(),
              this.privConnectionConfigurationPromise &&
                this.privConnectionConfigurationPromise.onSuccessContinueWith(
                  function (t) {
                    t.dispose(e);
                  }
                );
          }),
          (e.prototype.connect = function () {
            this.connectImpl().result();
          }),
          (e.prototype.connectAsync = function (e, t) {
            this.connectImpl().continueWith(function (r) {
              try {
                r.isError ? t && t(r.error) : r.isCompleted && e && e();
              } catch (e) {
                t && t(e);
              }
            });
          }),
          (e.prototype.Speak = function (e, t, r, o, s, a) {
            var c,
              p = this;
            return (
              (c = t
                ? e
                : i.SpeechSynthesizer.buildSsml(
                    e,
                    this.privSynthesizerConfig.parameters
                  )),
              void 0 !== this.speakOverride
                ? this.speakOverride(c, r, o, s)
                : ((this.privSuccessCallback = o),
                  (this.privErrorCallback = s),
                  this.privSynthesisTurn.startNewSynthesis(r, e, t, a),
                  this.fetchConnection().continueWithPromise(function (e) {
                    return e.isError
                      ? (p.cancelSynthesisLocal(
                          i.CancellationReason.Error,
                          i.CancellationErrorCode.ConnectionFailure,
                          e.error
                        ),
                        n.PromiseHelper.fromError(e.error))
                      : p
                          .sendSynthesisContext(e.result)
                          .continueWithPromise(function (t) {
                            return t.isError
                              ? (p.cancelSynthesisLocal(
                                  i.CancellationReason.Error,
                                  i.CancellationErrorCode.ConnectionFailure,
                                  t.error
                                ),
                                n.PromiseHelper.fromError(t.error))
                              : p
                                  .sendSsmlMessage(e.result, c, r)
                                  .continueWithPromise(function (e) {
                                    if (e.isError)
                                      return (
                                        p.cancelSynthesisLocal(
                                          i.CancellationReason.Error,
                                          i.CancellationErrorCode
                                            .ConnectionFailure,
                                          e.error
                                        ),
                                        n.PromiseHelper.fromError(e.error)
                                      );
                                    var t = new i.SpeechSynthesisEventArgs(
                                      new i.SpeechSynthesisResult(
                                        r,
                                        i.ResultReason.SynthesizingAudioStarted
                                      )
                                    );
                                    p.privSpeechSynthesizer.synthesisStarted &&
                                      p.privSpeechSynthesizer.synthesisStarted(
                                        p.privSpeechSynthesizer,
                                        t
                                      );
                                    p.receiveMessage();
                                    return n.PromiseHelper.fromResult(!0);
                                  });
                          });
                  }))
            );
          }),
          (e.prototype.cancelSynthesis = function (e, t, r, n) {
            var s = new i.PropertyCollection();
            s.setProperty(
              o.CancellationErrorCodePropertyName,
              i.CancellationErrorCode[r]
            );
            var a = new i.SpeechSynthesisResult(
              e,
              i.ResultReason.Canceled,
              void 0,
              n,
              s
            );
            if (this.privSpeechSynthesizer.SynthesisCanceled) {
              var c = new i.SpeechSynthesisEventArgs(a);
              try {
                this.privSpeechSynthesizer.SynthesisCanceled(
                  this.privSpeechSynthesizer,
                  c
                );
              } catch (e) {}
            }
            if (this.privSuccessCallback)
              try {
                this.privSuccessCallback(a),
                  (this.privSuccessCallback = void 0);
              } catch (e) {}
          }),
          (e.prototype.cancelSynthesisLocal = function (e, t, r) {
            this.privSynthesisTurn.isSynthesizing &&
              (this.privSynthesisTurn.onStopSynthesizing(),
              this.cancelSynthesis(this.privSynthesisTurn.requestId, e, t, r));
          }),
          (e.prototype.processTypeSpecificMessages = function (e, t, r) {
            return !0;
          }),
          (e.prototype.connectImpl = function (e) {
            var t = this;
            if ((void 0 === e && (e = !1), void 0 !== this.connectImplOverride))
              return this.connectImplOverride(e);
            if (this.privConnectionPromise)
              return this.privConnectionPromise.result().isCompleted &&
                (this.privConnectionPromise.result().isError ||
                  this.privConnectionPromise.result().result.state() ===
                    n.ConnectionState.Disconnected) &&
                !0 === this.privServiceHasSentMessage
                ? ((this.privConnectionId = null),
                  (this.privConnectionPromise = null),
                  (this.privServiceHasSentMessage = !1),
                  this.connectImpl())
                : this.privConnectionPromise;
            (this.privAuthFetchEventId = n.createNoDashGuid()),
              (this.privConnectionId = n.createNoDashGuid()),
              this.privSynthesisTurn.onPreConnectionStart(
                this.privAuthFetchEventId,
                this.privConnectionId
              );
            var r = e
              ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId)
              : this.privAuthentication.fetch(this.privAuthFetchEventId);
            return (
              (this.privConnectionPromise = r.continueWithPromise(function (r) {
                if (r.isError) throw new Error(r.error);
                var o = t.privConnectionFactory.create(
                  t.privSynthesizerConfig,
                  r.result,
                  t.privConnectionId
                );
                return (
                  o.events.attach(function (e) {
                    t.connectionEvents.onEvent(e);
                  }),
                  o.open().onSuccessContinueWithPromise(function (r) {
                    return 200 === r.statusCode
                      ? (t.privSynthesisTurn.onPreConnectionStart(
                          t.privAuthFetchEventId,
                          t.privConnectionId
                        ),
                        t.privSynthesisTurn.onConnectionEstablishCompleted(
                          r.statusCode
                        ),
                        n.PromiseHelper.fromResult(o))
                      : 403 !== r.statusCode || e
                      ? (t.privSynthesisTurn.onConnectionEstablishCompleted(
                          r.statusCode,
                          r.reason
                        ),
                        n.PromiseHelper.fromError(
                          "Unable to contact server. StatusCode: " +
                            r.statusCode +
                            ", " +
                            t.privSynthesizerConfig.parameters.getProperty(
                              i.PropertyId.SpeechServiceConnection_Endpoint
                            ) +
                            " Reason: " +
                            r.reason
                        ))
                      : t.connectImpl(!0);
                  })
                );
              })),
              this.privConnectionPromise
            );
          }),
          (e.prototype.configureConnection = function () {
            var e = this;
            return void 0 !== this.configConnectionOverride
              ? this.configConnectionOverride()
              : this.privConnectionConfigurationPromise
              ? this.privConnectionConfigurationPromise.result().isCompleted &&
                (this.privConnectionConfigurationPromise.result().isError ||
                  this.privConnectionConfigurationPromise
                    .result()
                    .result.state() === n.ConnectionState.Disconnected)
                ? ((this.privConnectionConfigurationPromise = null),
                  this.configureConnection())
                : this.privConnectionConfigurationPromise
              : ((this.privConnectionConfigurationPromise =
                  this.connectImpl().onSuccessContinueWithPromise(function (t) {
                    return e
                      .sendSpeechServiceConfig(
                        t,
                        e.privSynthesizerConfig.SpeechServiceConfig.serialize()
                      )
                      .onSuccessContinueWith(function (e) {
                        return t;
                      });
                  })),
                this.privConnectionConfigurationPromise);
          }),
          (e.prototype.buildSynthesisContext = function () {
            return {
              synthesis: {
                audio: {
                  metadataOptions: {
                    sentenceBoundaryEnabled: !1,
                    wordBoundaryEnabled:
                      !!this.privSpeechSynthesizer.wordBoundary,
                  },
                  outputFormat:
                    this.privAudioOutputFormat.requestAudioFormatString,
                },
              },
            };
          }),
          (e.telemetryDataEnabled = !0),
          e
        );
      })();
    t.SynthesisAdapterBase = a;
  },
  function (e, t, r) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      s = (function (e) {
        function t(t, r, n) {
          void 0 === n && (n = o.EventType.Info);
          var i = e.call(this, t, n) || this;
          return (i.privRequestId = r), i;
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, "requestId", {
            get: function () {
              return this.privRequestId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(o.PlatformEvent);
    t.SpeechSynthesisEvent = s;
    var a = (function (e) {
      function t(t, r, n) {
        var i = e.call(this, "SynthesisTriggeredEvent", t) || this;
        return (
          (i.privSessionAudioDestinationId = r),
          (i.privTurnAudioDestinationId = n),
          i
        );
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "audioSessionDestinationId", {
          get: function () {
            return this.privSessionAudioDestinationId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "audioTurnDestinationId", {
          get: function () {
            return this.privTurnAudioDestinationId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.SynthesisTriggeredEvent = a;
    var c = (function (e) {
      function t(t, r) {
        var n = e.call(this, "ConnectingToSynthesisServiceEvent", t) || this;
        return (n.privAuthFetchEventId = r), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "authFetchEventId", {
          get: function () {
            return this.privAuthFetchEventId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.ConnectingToSynthesisServiceEvent = c;
    var p = (function (e) {
      function t(t, r) {
        var n = e.call(this, "SynthesisStartedEvent", t) || this;
        return (n.privAuthFetchEventId = r), n;
      }
      return (
        i(t, e),
        Object.defineProperty(t.prototype, "authFetchEventId", {
          get: function () {
            return this.privAuthFetchEventId;
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      );
    })(s);
    t.SynthesisStartedEvent = p;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      i = r(24);
    !(function (e) {
      (e[(e.Standard = 0)] = "Standard"), (e[(e.Custom = 1)] = "Custom");
    })((n = t.SynthesisServiceType || (t.SynthesisServiceType = {})));
    var o = (function () {
      function e(e, t) {
        (this.privSynthesisServiceType = n.Standard),
          (this.privSpeechServiceConfig =
            e || new i.SpeechServiceConfig(new i.Context(null))),
          (this.privParameters = t);
      }
      return (
        Object.defineProperty(e.prototype, "parameters", {
          get: function () {
            return this.privParameters;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "synthesisServiceType", {
          get: function () {
            return this.privSynthesisServiceType;
          },
          set: function (e) {
            this.privSynthesisServiceType = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "SpeechServiceConfig", {
          get: function () {
            return this.privSpeechServiceConfig;
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })();
    t.SynthesizerConfig = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(24),
      i = r(4),
      o = r(35),
      s = (function () {
        function e(e, t) {
          var r = this;
          (this.privStreams = {}),
            (this.turnOn = function () {
              if ("undefined" == typeof FileReader) {
                var e = "Browser does not support FileReader.";
                return (
                  r.onEvent(new i.AudioSourceErrorEvent(e, "")),
                  i.PromiseHelper.fromError(e)
                );
              }
              if (
                r.privFile.name.lastIndexOf(".wav") !==
                r.privFile.name.length - 4
              ) {
                e =
                  r.privFile.name +
                  " is not supported. Only WAVE files are allowed at the moment.";
                return (
                  r.onEvent(new i.AudioSourceErrorEvent(e, "")),
                  i.PromiseHelper.fromError(e)
                );
              }
              return (
                r.onEvent(new i.AudioSourceInitializingEvent(r.privId)),
                r.onEvent(new i.AudioSourceReadyEvent(r.privId)),
                i.PromiseHelper.fromResult(!0)
              );
            }),
            (this.id = function () {
              return r.privId;
            }),
            (this.attach = function (e) {
              return (
                r.onEvent(new i.AudioStreamNodeAttachingEvent(r.privId, e)),
                r.upload(e).onSuccessContinueWith(function (t) {
                  return (
                    r.onEvent(new i.AudioStreamNodeAttachedEvent(r.privId, e)),
                    {
                      detach: function () {
                        t.close(),
                          delete r.privStreams[e],
                          r.onEvent(
                            new i.AudioStreamNodeDetachedEvent(r.privId, e)
                          ),
                          r.turnOff();
                      },
                      id: function () {
                        return e;
                      },
                      read: function () {
                        return t.read();
                      },
                    }
                  );
                })
              );
            }),
            (this.detach = function (e) {
              e &&
                r.privStreams[e] &&
                (r.privStreams[e].close(),
                delete r.privStreams[e],
                r.onEvent(new i.AudioStreamNodeDetachedEvent(r.privId, e)));
            }),
            (this.turnOff = function () {
              for (var e in r.privStreams)
                if (e) {
                  var t = r.privStreams[e];
                  t && !t.isClosed && t.close();
                }
              return (
                r.onEvent(new i.AudioSourceOffEvent(r.privId)),
                i.PromiseHelper.fromResult(!0)
              );
            }),
            (this.readHeader = function () {
              var e = r.privFile.slice(0, 44),
                t = new FileReader(),
                n = new i.Deferred();
              return (
                (t.onload = function (e) {
                  var t = e.target.result,
                    r = new DataView(t);
                  "RIFF" !==
                    String.fromCharCode(
                      r.getUint8(0),
                      r.getUint8(1),
                      r.getUint8(2),
                      r.getUint8(3)
                    ) &&
                    n.reject("Invalid WAV header in file, RIFF was not found"),
                    "WAVEfmt" !==
                      String.fromCharCode(
                        r.getUint8(8),
                        r.getUint8(9),
                        r.getUint8(10),
                        r.getUint8(11),
                        r.getUint8(12),
                        r.getUint8(13),
                        r.getUint8(14)
                      ) &&
                      n.reject(
                        "Invalid WAV header in file, WAVEfmt was not found"
                      );
                  var i = r.getUint16(22, !0),
                    s = r.getUint32(24, !0),
                    a = r.getUint16(34, !0);
                  n.resolve(o.AudioStreamFormat.getWaveFormatPCM(s, a, i));
                }),
                t.readAsArrayBuffer(e),
                n.promise()
              );
            }),
            (this.upload = function (e) {
              return r.turnOn().onSuccessContinueWithPromise(function (t) {
                return r.privAudioFormatPromise.onSuccessContinueWith(function (
                  t
                ) {
                  new i.ChunkedArrayBufferStream(3200);
                  var n = new FileReader(),
                    o = new i.ChunkedArrayBufferStream(
                      t.avgBytesPerSec / 10,
                      e
                    );
                  r.privStreams[e] = o;
                  (n.onload = function (e) {
                    o.isClosed ||
                      (o.writeStreamChunk({
                        buffer: n.result,
                        isEnd: !1,
                        timeReceived: Date.now(),
                      }),
                      o.close());
                  }),
                    (n.onerror = function (t) {
                      var n =
                        "Error occurred while processing '" +
                        r.privFile.name +
                        "'. " +
                        t;
                      throw (
                        (r.onEvent(
                          new i.AudioStreamNodeErrorEvent(r.privId, e, n)
                        ),
                        new Error(n))
                      );
                    });
                  var s = r.privFile.slice(44);
                  return n.readAsArrayBuffer(s), o.getReader();
                });
              });
            }),
            (this.onEvent = function (e) {
              r.privEvents.onEvent(e), i.Events.instance.onEvent(e);
            }),
            (this.privId = t || i.createNoDashGuid()),
            (this.privEvents = new i.EventSource()),
            (this.privFile = e),
            (this.privAudioFormatPromise = this.readHeader());
        }
        return (
          Object.defineProperty(e.prototype, "format", {
            get: function () {
              return this.privAudioFormatPromise;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "events", {
            get: function () {
              return this.privEvents;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "deviceInfo", {
            get: function () {
              return this.privAudioFormatPromise.onSuccessContinueWithPromise(
                function (e) {
                  return i.PromiseHelper.fromResult({
                    bitspersample: e.bitsPerSample,
                    channelcount: e.channels,
                    connectivity: n.connectivity.Unknown,
                    manufacturer: "Speech SDK",
                    model: "File",
                    samplerate: e.samplesPerSec,
                    type: n.type.File,
                  });
                }
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.FileAudioSource = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = (function () {
        function e() {
          var e = this;
          (this.record = function (t, r, i) {
            var o = (function () {
                var e = 0;
                try {
                  return t.createScriptProcessor(e, 1, 1);
                } catch (n) {
                  e = 2048;
                  for (var r = t.sampleRate; e < 16384 && r >= 32e3; )
                    (e <<= 1), (r >>= 1);
                  return t.createScriptProcessor(e, 1, 1);
                }
              })(),
              s = new n.RiffPcmEncoder(t.sampleRate, 16e3);
            o.onaudioprocess = function (e) {
              var t = e.inputBuffer.getChannelData(0);
              if (i && !i.isClosed) {
                var r = s.encode(t);
                r &&
                  (i.writeStreamChunk({
                    buffer: r,
                    isEnd: !1,
                    timeReceived: Date.now(),
                  }),
                  !1);
              }
            };
            var a = t.createMediaStreamSource(r);
            e.privSpeechProcessorScript && t.audioWorklet
              ? t.audioWorklet
                  .addModule(e.privSpeechProcessorScript)
                  .then(function () {
                    var n = new AudioWorkletNode(t, "speech-processor");
                    (n.port.onmessage = function (e) {
                      var t = e.data;
                      if (i && !i.isClosed) {
                        var r = s.encode(t);
                        r &&
                          (i.writeStreamChunk({
                            buffer: r,
                            isEnd: !1,
                            timeReceived: Date.now(),
                          }),
                          !1);
                      }
                    }),
                      a.connect(n),
                      n.connect(t.destination),
                      (e.privMediaResources = {
                        scriptProcessorNode: n,
                        source: a,
                        stream: r,
                      });
                  })
                  .catch(function () {
                    a.connect(o),
                      o.connect(t.destination),
                      (e.privMediaResources = {
                        scriptProcessorNode: o,
                        source: a,
                        stream: r,
                      });
                  })
              : (a.connect(o),
                o.connect(t.destination),
                (e.privMediaResources = {
                  scriptProcessorNode: o,
                  source: a,
                  stream: r,
                }));
          }),
            (this.releaseMediaResources = function (t) {
              e.privMediaResources &&
                (e.privMediaResources.scriptProcessorNode &&
                  (e.privMediaResources.scriptProcessorNode.disconnect(
                    t.destination
                  ),
                  (e.privMediaResources.scriptProcessorNode = null)),
                e.privMediaResources.source &&
                  (e.privMediaResources.source.disconnect(),
                  e.privMediaResources.stream.getTracks().forEach(function (e) {
                    return e.stop();
                  }),
                  (e.privMediaResources.source = null)));
            });
        }
        return (
          (e.prototype.setWorkletUrl = function (e) {
            this.privSpeechProcessorScript = e;
          }),
          e
        );
      })();
    t.PcmRecorder = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = r(159),
      o = (function () {
        function e(e, t, r, o, s, a) {
          var c = this;
          if (
            ((this.privIsDisposed = !1),
            (this.dispose = function () {
              (c.privIsDisposed = !0),
                c.privConnectionMessageAdapter &&
                  c.privConnectionMessageAdapter.close();
            }),
            (this.isDisposed = function () {
              return c.privIsDisposed;
            }),
            (this.state = function () {
              return c.privConnectionMessageAdapter.state;
            }),
            (this.open = function () {
              return c.privConnectionMessageAdapter.open();
            }),
            (this.send = function (e) {
              return c.privConnectionMessageAdapter.send(e);
            }),
            (this.read = function () {
              return c.privConnectionMessageAdapter.read();
            }),
            !e)
          )
            throw new n.ArgumentNullError("uri");
          if (!o) throw new n.ArgumentNullError("messageFormatter");
          this.privMessageFormatter = o;
          var p = "",
            u = 0;
          if (t)
            for (var v in t) {
              if (v)
                (p += 0 === u && -1 === e.indexOf("?") ? "?" : "&"),
                  (p += v + "=" + encodeURIComponent(t[v])),
                  u++;
            }
          if (r)
            for (var f in r) {
              if (f)
                (p += 0 === u ? "?" : "&"),
                  (p += f + "=" + encodeURIComponent(r[f])),
                  u++;
            }
          (this.privUri = e + p),
            (this.privId = a || n.createNoDashGuid()),
            (this.privConnectionMessageAdapter = new i.WebsocketMessageAdapter(
              this.privUri,
              this.id,
              this.privMessageFormatter,
              s,
              r
            ));
        }
        return (
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this.privId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "events", {
            get: function () {
              return this.privConnectionMessageAdapter.events;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.WebsocketConnection = o;
  },
  function (e, t, r) {
    "use strict";
    (function (e, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(4),
        o = r(166),
        s = r(167),
        a = r(168),
        c = (function () {
          function t(r, c, p, u, v) {
            var f = this;
            if (
              ((this.open = function () {
                if (f.privConnectionState === i.ConnectionState.Disconnected)
                  return i.PromiseHelper.fromError(
                    "Cannot open a connection that is in " +
                      f.privConnectionState +
                      " state"
                  );
                if (f.privConnectionEstablishDeferral)
                  return f.privConnectionEstablishDeferral.promise();
                (f.privConnectionEstablishDeferral = new i.Deferred()),
                  (f.privCertificateValidatedDeferral = new i.Deferred()),
                  (f.privConnectionState = i.ConnectionState.Connecting);
                try {
                  var r =
                    void 0 !== e &&
                    "0" !== e.env.NODE_TLS_REJECT_UNAUTHORIZED &&
                    "0" !== e.env.SPEECH_CONDUCT_OCSP_CHECK &&
                    !f.privUri.startsWith("ws:");
                  if ("undefined" == typeof WebSocket || t.forceNpmWebSocket)
                    if (
                      void 0 !== f.proxyInfo &&
                      void 0 !== f.proxyInfo.HostName &&
                      f.proxyInfo.Port > 0
                    ) {
                      var c = {
                        host: f.proxyInfo.HostName,
                        port: f.proxyInfo.Port,
                      };
                      void 0 !== f.proxyInfo.UserName &&
                        ((c.headers = {
                          "Proxy-Authentication":
                            "Basic " +
                            new n(
                              f.proxyInfo.UserName +
                              ":" +
                              (void 0 === f.proxyInfo.Password)
                                ? ""
                                : f.proxyInfo.Password
                            ).toString("base64"),
                        }),
                        r && (c.headers.requestOCSP = "true"));
                      var p = { agent: new o(c), headers: f.privHeaders };
                      (f.privWebsocketClient = new s(f.privUri, p)),
                        r
                          ? f.privWebsocketClient.addListener(
                              "upgrade",
                              function (e) {
                                var t = e.socket,
                                  r = t.getPeerCertificate(!0);
                                t.cork(),
                                  a.check(
                                    {
                                      cert: r.raw,
                                      httpOptions: p,
                                      issuer: r.issuerCertificate.raw,
                                    },
                                    function (e, r) {
                                      e
                                        ? (f.privCertificateValidatedDeferral.reject(
                                            e.message
                                          ),
                                          t.destroy(e))
                                        : (f.privCertificateValidatedDeferral.resolve(
                                            !0
                                          ),
                                          t.uncork());
                                    }
                                  );
                              }
                            )
                          : f.privCertificateValidatedDeferral.resolve(!0);
                    } else {
                      var u = { headers: f.privHeaders };
                      f.privCertificateValidatedDeferral.resolve(!0),
                        r && (u.agent = new a.Agent({})),
                        (f.privWebsocketClient = new s(f.privUri, u));
                    }
                  else
                    f.privCertificateValidatedDeferral.resolve(!0),
                      (f.privWebsocketClient = new WebSocket(f.privUri));
                  (f.privWebsocketClient.binaryType = "arraybuffer"),
                    (f.privReceivingMessageQueue = new i.Queue()),
                    (f.privDisconnectDeferral = new i.Deferred()),
                    (f.privSendMessageQueue = new i.Queue()),
                    f.processSendQueue();
                } catch (e) {
                  return (
                    f.privConnectionEstablishDeferral.resolve(
                      new i.ConnectionOpenResponse(500, e)
                    ),
                    f.privConnectionEstablishDeferral.promise()
                  );
                }
                return (
                  f.onEvent(
                    new i.ConnectionStartEvent(f.privConnectionId, f.privUri)
                  ),
                  (f.privWebsocketClient.onopen = function (e) {
                    f.privCertificateValidatedDeferral.promise().on(
                      function () {
                        (f.privConnectionState = i.ConnectionState.Connected),
                          f.onEvent(
                            new i.ConnectionEstablishedEvent(f.privConnectionId)
                          ),
                          f.privConnectionEstablishDeferral.resolve(
                            new i.ConnectionOpenResponse(200, "")
                          );
                      },
                      function (e) {
                        f.privConnectionEstablishDeferral.reject(e);
                      }
                    );
                  }),
                  (f.privWebsocketClient.onerror = function (e) {
                    f.onEvent(
                      new i.ConnectionErrorEvent(
                        f.privConnectionId,
                        e.message,
                        e.type
                      )
                    ),
                      (f.privLastErrorReceived = e.message);
                  }),
                  (f.privWebsocketClient.onclose = function (e) {
                    f.privConnectionState === i.ConnectionState.Connecting
                      ? ((f.privConnectionState =
                          i.ConnectionState.Disconnected),
                        f.privConnectionEstablishDeferral.resolve(
                          new i.ConnectionOpenResponse(
                            e.code,
                            e.reason + " " + f.privLastErrorReceived
                          )
                        ))
                      : f.onEvent(
                          new i.ConnectionClosedEvent(
                            f.privConnectionId,
                            e.code,
                            e.reason
                          )
                        ),
                      f.onClose(e.code, e.reason);
                  }),
                  (f.privWebsocketClient.onmessage = function (e) {
                    var t = new Date().toISOString();
                    if (f.privConnectionState === i.ConnectionState.Connected) {
                      var r = new i.Deferred();
                      if (
                        (f.privReceivingMessageQueue.enqueueFromPromise(
                          r.promise()
                        ),
                        e.data instanceof ArrayBuffer)
                      ) {
                        var n = new i.RawWebsocketMessage(
                          i.MessageType.Binary,
                          e.data
                        );
                        f.privMessageFormatter.toConnectionMessage(n).on(
                          function (e) {
                            f.onEvent(
                              new i.ConnectionMessageReceivedEvent(
                                f.privConnectionId,
                                t,
                                e
                              )
                            ),
                              r.resolve(e);
                          },
                          function (e) {
                            r.reject(
                              "Invalid binary message format. Error: " + e
                            );
                          }
                        );
                      } else {
                        n = new i.RawWebsocketMessage(
                          i.MessageType.Text,
                          e.data
                        );
                        f.privMessageFormatter.toConnectionMessage(n).on(
                          function (e) {
                            f.onEvent(
                              new i.ConnectionMessageReceivedEvent(
                                f.privConnectionId,
                                t,
                                e
                              )
                            ),
                              r.resolve(e);
                          },
                          function (e) {
                            r.reject(
                              "Invalid text message format. Error: " + e
                            );
                          }
                        );
                      }
                    }
                  }),
                  f.privConnectionEstablishDeferral.promise()
                );
              }),
              (this.send = function (e) {
                if (f.privConnectionState !== i.ConnectionState.Connected)
                  return i.PromiseHelper.fromError(
                    "Cannot send on connection that is in " +
                      f.privConnectionState +
                      " state"
                  );
                var t = new i.Deferred(),
                  r = new i.Deferred();
                return (
                  f.privSendMessageQueue.enqueueFromPromise(r.promise()),
                  f.privMessageFormatter.fromConnectionMessage(e).on(
                    function (n) {
                      r.resolve({
                        Message: e,
                        RawWebsocketMessage: n,
                        sendStatusDeferral: t,
                      });
                    },
                    function (e) {
                      r.reject("Error formatting the message. " + e);
                    }
                  ),
                  t.promise()
                );
              }),
              (this.read = function () {
                return f.privConnectionState !== i.ConnectionState.Connected
                  ? i.PromiseHelper.fromError(
                      "Cannot read on connection that is in " +
                        f.privConnectionState +
                        " state"
                    )
                  : f.privReceivingMessageQueue.dequeue();
              }),
              (this.close = function (e) {
                if (!f.privWebsocketClient) {
                  var t = new i.Deferred();
                  return t.resolve(!0), t.promise();
                }
                return (
                  f.privConnectionState !== i.ConnectionState.Disconnected &&
                    f.privWebsocketClient.close(
                      1e3,
                      e || "Normal closure by client"
                    ),
                  f.privDisconnectDeferral.promise()
                );
              }),
              (this.sendRawMessage = function (e) {
                try {
                  return e
                    ? (f.onEvent(
                        new i.ConnectionMessageSentEvent(
                          f.privConnectionId,
                          new Date().toISOString(),
                          e.Message
                        )
                      ),
                      f.isWebsocketOpen
                        ? (f.privWebsocketClient.send(
                            e.RawWebsocketMessage.payload
                          ),
                          i.PromiseHelper.fromResult(!0))
                        : i.PromiseHelper.fromError(
                            "websocket send error: Websocket not ready"
                          ))
                    : i.PromiseHelper.fromResult(!0);
                } catch (e) {
                  return i.PromiseHelper.fromError(
                    "websocket send error: " + e
                  );
                }
              }),
              (this.onClose = function (e, t) {
                var r = "Connection closed. " + e + ": " + t;
                (f.privConnectionState = i.ConnectionState.Disconnected),
                  f.privDisconnectDeferral.resolve(!0),
                  f.privReceivingMessageQueue.dispose(t),
                  f.privReceivingMessageQueue.drainAndDispose(function (e) {},
                  r),
                  f.privSendMessageQueue.drainAndDispose(function (e) {
                    e.sendStatusDeferral.reject(r);
                  }, r);
              }),
              (this.processSendQueue = function () {
                f.privSendMessageQueue.dequeue().on(
                  function (e) {
                    e &&
                      f.sendRawMessage(e).on(
                        function (t) {
                          e.sendStatusDeferral.resolve(t), f.processSendQueue();
                        },
                        function (t) {
                          e.sendStatusDeferral.reject(t), f.processSendQueue();
                        }
                      );
                  },
                  function (e) {}
                );
              }),
              (this.onEvent = function (e) {
                f.privConnectionEvents.onEvent(e), i.Events.instance.onEvent(e);
              }),
              !r)
            )
              throw new i.ArgumentNullError("uri");
            if (!p) throw new i.ArgumentNullError("messageFormatter");
            (this.proxyInfo = u),
              (this.privConnectionEvents = new i.EventSource()),
              (this.privConnectionId = c),
              (this.privMessageFormatter = p),
              (this.privConnectionState = i.ConnectionState.None),
              (this.privUri = r),
              (this.privHeaders = v),
              (this.privLastErrorReceived = "");
          }
          return (
            Object.defineProperty(t.prototype, "state", {
              get: function () {
                return this.privConnectionState;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "events", {
              get: function () {
                return this.privConnectionEvents;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isWebsocketOpen", {
              get: function () {
                return (
                  this.privWebsocketClient &&
                  this.privWebsocketClient.readyState ===
                    this.privWebsocketClient.OPEN
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.forceNpmWebSocket = !1),
            t
          );
        })();
      t.WebsocketMessageAdapter = c;
    }.call(this, r(160), r(161).Buffer));
  },
  function (e, t) {
    var r,
      n,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        n = s;
      }
    })();
    var c,
      p = [],
      u = !1,
      v = -1;
    function f() {
      u &&
        c &&
        ((u = !1), c.length ? (p = c.concat(p)) : (v = -1), p.length && h());
    }
    function h() {
      if (!u) {
        var e = a(f);
        u = !0;
        for (var t = p.length; t; ) {
          for (c = p, p = []; ++v < t; ) c && c[v].run();
          (v = -1), (t = p.length);
        }
        (c = null),
          (u = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function l(e, t) {
      (this.fun = e), (this.array = t);
    }
    function d() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      p.push(new l(e, t)), 1 !== p.length || u || a(h);
    }),
      (l.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = d),
      (i.addListener = d),
      (i.once = d),
      (i.off = d),
      (i.removeListener = d),
      (i.removeAllListeners = d),
      (i.emit = d),
      (i.prependListener = d),
      (i.prependOnceListener = d),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(163),
        i = r(164),
        o = r(165);
      function s() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(e, t) {
        if (s() < t) throw new RangeError("Invalid typed array length");
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = c.prototype)
            : (null === e && (e = new c(t)), (e.length = t)),
          e
        );
      }
      function c(e, t, r) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
          return new c(e, t, r);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return v(this, e);
        }
        return p(this, e, t, r);
      }
      function p(e, t, r, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === r && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, n);
              c.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = c.prototype)
                : (e = f(e, t));
              return e;
            })(e, t, r, n)
          : "string" == typeof t
          ? (function (e, t, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!c.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | l(t, r),
                i = (e = a(e, n)).write(t, r);
              i !== n && (e = e.slice(0, i));
              return e;
            })(e, t, r)
          : (function (e, t) {
              if (c.isBuffer(t)) {
                var r = 0 | h(t.length);
                return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (n = t.length) != n
                    ? a(e, 0)
                    : f(e, t);
                if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
              }
              var n;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function v(e, t) {
        if ((u(t), (e = a(e, t < 0 ? 0 : 0 | h(t))), !c.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function f(e, t) {
        var r = t.length < 0 ? 0 : 0 | h(t.length);
        e = a(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function h(e) {
        if (e >= s())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function l(e, t) {
        if (c.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return U(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return q(e).length;
            default:
              if (n) return U(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function d(e, t, r) {
        var n = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return _(this, t, r);
            case "utf8":
            case "utf-8":
              return w(this, t, r);
            case "ascii":
              return E(this, t, r);
            case "latin1":
            case "binary":
              return A(this, t, r);
            case "base64":
              return O(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return M(this, t, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function y(e, t, r, n, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)))
          return 0 === t.length ? -1 : m(e, t, r, n, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : m(e, [t], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(e, t, r, n, i) {
        var o,
          s = 1,
          a = e.length,
          c = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (c /= 2), (r /= 2);
        }
        function p(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (i) {
          var u = -1;
          for (o = r; o < a; o++)
            if (p(e, o) === p(t, -1 === u ? 0 : o - u)) {
              if ((-1 === u && (u = o), o - u + 1 === c)) return u * s;
            } else -1 !== u && (o -= o - u), (u = -1);
        } else
          for (r + c > a && (r = a - c), o = r; o >= 0; o--) {
            for (var v = !0, f = 0; f < c; f++)
              if (p(e, o + f) !== p(t, f)) {
                v = !1;
                break;
              }
            if (v) return o;
          }
        return -1;
      }
      function S(e, t, r, n) {
        r = Number(r) || 0;
        var i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);
        for (var s = 0; s < n; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          e[r + s] = a;
        }
        return s;
      }
      function C(e, t, r, n) {
        return H(U(t, e.length - r), e, r, n);
      }
      function b(e, t, r, n) {
        return H(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n
        );
      }
      function P(e, t, r, n) {
        return b(e, t, r, n);
      }
      function R(e, t, r, n) {
        return H(q(t), e, r, n);
      }
      function I(e, t, r, n) {
        return H(
          (function (e, t) {
            for (
              var r, n, i, o = [], s = 0;
              s < e.length && !((t -= 2) < 0);
              ++s
            )
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n);
            return o;
          })(t, e.length - r),
          e,
          r,
          n
        );
      }
      function O(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function w(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r; ) {
          var o,
            s,
            a,
            c,
            p = e[i],
            u = null,
            v = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
          if (i + v <= r)
            switch (v) {
              case 1:
                p < 128 && (u = p);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (c = ((31 & p) << 6) | (63 & o)) > 127 &&
                  (u = c);
                break;
              case 3:
                (o = e[i + 1]),
                  (s = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    (c = ((15 & p) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (u = c);
                break;
              case 4:
                (o = e[i + 1]),
                  (s = e[i + 2]),
                  (a = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (c =
                      ((15 & p) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    c < 1114112 &&
                    (u = c);
            }
          null === u
            ? ((u = 65533), (v = 1))
            : u > 65535 &&
              ((u -= 65536),
              n.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (1023 & u))),
            n.push(u),
            (i += v);
        }
        return (function (e) {
          var t = e.length;
          if (t <= T) return String.fromCharCode.apply(String, e);
          var r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += T)));
          return r;
        })(n);
      }
      (t.Buffer = c),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return c.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = s()),
        (c.poolSize = 8192),
        (c._augment = function (e) {
          return (e.__proto__ = c.prototype), e;
        }),
        (c.from = function (e, t, r) {
          return p(null, e, t, r);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (c.alloc = function (e, t, r) {
          return (function (e, t, r, n) {
            return (
              u(t),
              t <= 0
                ? a(e, t)
                : void 0 !== r
                ? "string" == typeof n
                  ? a(e, t).fill(r, n)
                  : a(e, t).fill(r)
                : a(e, t)
            );
          })(null, e, t, r);
        }),
        (c.allocUnsafe = function (e) {
          return v(null, e);
        }),
        (c.allocUnsafeSlow = function (e) {
          return v(null, e);
        }),
        (c.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (c.compare = function (e, t) {
          if (!c.isBuffer(e) || !c.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (c.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = c.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (!c.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(n, i), (i += s.length);
          }
          return n;
        }),
        (c.byteLength = l),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (c.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (c.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (c.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? w(this, 0, e)
            : d.apply(this, arguments);
        }),
        (c.prototype.equals = function (e) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === c.compare(this, e);
        }),
        (c.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (c.prototype.compare = function (e, t, r, n, i) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0),
              a = Math.min(o, s),
              p = this.slice(n, i),
              u = e.slice(t, r),
              v = 0;
            v < a;
            ++v
          )
            if (p[v] !== u[v]) {
              (o = p[v]), (s = u[v]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (c.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (c.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (c.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (c.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === r || r > i) && (r = i),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var o = !1; ; )
            switch (n) {
              case "hex":
                return S(this, e, t, r);
              case "utf8":
              case "utf-8":
                return C(this, e, t, r);
              case "ascii":
                return b(this, e, t, r);
              case "latin1":
              case "binary":
                return P(this, e, t, r);
              case "base64":
                return R(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return I(this, e, t, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (c.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var T = 4096;
      function E(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
        return n;
      }
      function A(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      function _(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", o = t; o < r; ++o) i += F(e[o]);
        return i;
      }
      function M(e, t, r) {
        for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function D(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function j(e, t, r, n, i, o) {
        if (!c.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function k(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
          e[r + i] =
            (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
      }
      function N(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
          e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
      }
      function z(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function x(e, t, r, n, o) {
        return o || z(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
      }
      function L(e, t, r, n, o) {
        return o || z(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
      }
      (c.prototype.slice = function (e, t) {
        var r,
          n = this.length;
        if (
          ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e),
          c.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(e, t)).__proto__ = c.prototype;
        else {
          var i = t - e;
          r = new c(i, void 0);
          for (var o = 0; o < i; ++o) r[o] = this[o + e];
        }
        return r;
      }),
        (c.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || D(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i;
          return n;
        }),
        (c.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || D(e, t, this.length);
          for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
            n += this[e + --t] * i;
          return n;
        }),
        (c.prototype.readUInt8 = function (e, t) {
          return t || D(e, 1, this.length), this[e];
        }),
        (c.prototype.readUInt16LE = function (e, t) {
          return t || D(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function (e, t) {
          return t || D(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (c.prototype.readUInt32LE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (c.prototype.readUInt32BE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (c.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || D(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (c.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || D(e, t, this.length);
          for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
            o += this[e + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (c.prototype.readInt8 = function (e, t) {
          return (
            t || D(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (c.prototype.readInt16LE = function (e, t) {
          t || D(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (c.prototype.readInt16BE = function (e, t) {
          t || D(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (c.prototype.readInt32LE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function (e, t) {
          return (
            t || D(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (c.prototype.readFloatLE = function (e, t) {
          return t || D(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function (e, t) {
          return t || D(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function (e, t) {
          return t || D(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function (e, t) {
          return t || D(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            j(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < r && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + r;
        }),
        (c.prototype.writeUIntBE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            j(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + r;
        }),
        (c.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : k(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : k(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : N(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : N(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            j(this, e, t, r, i - 1, -i);
          }
          var o = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < r && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (c.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            j(this, e, t, r, i - 1, -i);
          }
          var o = r - 1,
            s = 1,
            a = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (c.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : k(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : k(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : N(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || j(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : N(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeFloatLE = function (e, t, r) {
          return x(this, e, t, !0, r);
        }),
        (c.prototype.writeFloatBE = function (e, t, r) {
          return x(this, e, t, !1, r);
        }),
        (c.prototype.writeDoubleLE = function (e, t, r) {
          return L(this, e, t, !0, r);
        }),
        (c.prototype.writeDoubleBE = function (e, t, r) {
          return L(this, e, t, !1, r);
        }),
        (c.prototype.copy = function (e, t, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var i,
            o = n - r;
          if (this === e && r < t && t < n)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
          else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
          return o;
        }),
        (c.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !c.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e;
          else {
            var s = c.isBuffer(e) ? e : U(new c(e, n).toString()),
              a = s.length;
            for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
          }
          return this;
        });
      var B = /[^+\/0-9A-Za-z-_]/g;
      function F(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function U(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function q(e) {
        return n.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(B, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function H(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
    }.call(this, r(162)));
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var t = p(e),
        r = t[0],
        n = t[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = p(e),
          s = n[0],
          a = n[1],
          c = new o(
            (function (e, t, r) {
              return (3 * (t + r)) / 4 - r;
            })(0, s, a)
          ),
          u = 0,
          v = a > 0 ? s - 4 : s;
        for (r = 0; r < v; r += 4)
          (t =
            (i[e.charCodeAt(r)] << 18) |
            (i[e.charCodeAt(r + 1)] << 12) |
            (i[e.charCodeAt(r + 2)] << 6) |
            i[e.charCodeAt(r + 3)]),
            (c[u++] = (t >> 16) & 255),
            (c[u++] = (t >> 8) & 255),
            (c[u++] = 255 & t);
        2 === a &&
          ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
          (c[u++] = 255 & t));
        1 === a &&
          ((t =
            (i[e.charCodeAt(r)] << 10) |
            (i[e.charCodeAt(r + 1)] << 4) |
            (i[e.charCodeAt(r + 2)] >> 2)),
          (c[u++] = (t >> 8) & 255),
          (c[u++] = 255 & t));
        return c;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i;
          s < a;
          s += 16383
        )
          o.push(u(e, s, s + 16383 > a ? a : s + 16383));
        1 === i
          ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
          : 2 === i &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var n = [],
        i = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        c = s.length;
      a < c;
      ++a
    )
      (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
    function p(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
    }
    function u(e, t, r) {
      for (var i, o, s = [], a = t; a < r; a += 3)
        (i =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (255 & e[a + 2])),
          s.push(
            n[((o = i) >> 18) & 63] +
              n[(o >> 12) & 63] +
              n[(o >> 6) & 63] +
              n[63 & o]
          );
      return s.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, r, n, i) {
      var o,
        s,
        a = 8 * i - n - 1,
        c = (1 << a) - 1,
        p = c >> 1,
        u = -7,
        v = r ? i - 1 : 0,
        f = r ? -1 : 1,
        h = e[t + v];
      for (
        v += f, o = h & ((1 << -u) - 1), h >>= -u, u += a;
        u > 0;
        o = 256 * o + e[t + v], v += f, u -= 8
      );
      for (
        s = o & ((1 << -u) - 1), o >>= -u, u += n;
        u > 0;
        s = 256 * s + e[t + v], v += f, u -= 8
      );
      if (0 === o) o = 1 - p;
      else {
        if (o === c) return s ? NaN : (1 / 0) * (h ? -1 : 1);
        (s += Math.pow(2, n)), (o -= p);
      }
      return (h ? -1 : 1) * s * Math.pow(2, o - n);
    }),
      (t.write = function (e, t, r, n, i, o) {
        var s,
          a,
          c,
          p = 8 * o - i - 1,
          u = (1 << p) - 1,
          v = u >> 1,
          f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = n ? 0 : o - 1,
          l = n ? 1 : -1,
          d = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = u))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                (t += s + v >= 1 ? f / c : f * Math.pow(2, 1 - v)) * c >= 2 &&
                  (s++, (c /= 2)),
                s + v >= u
                  ? ((a = 0), (s = u))
                  : s + v >= 1
                  ? ((a = (t * c - 1) * Math.pow(2, i)), (s += v))
                  : ((a = t * Math.pow(2, v - 1) * Math.pow(2, i)), (s = 0)));
          i >= 8;
          e[r + h] = 255 & a, h += l, a /= 256, i -= 8
        );
        for (
          s = (s << i) | a, p += i;
          p > 0;
          e[r + h] = 255 & s, h += l, s /= 256, p -= 8
        );
        e[r + h - l] |= 128 * d;
      });
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(4),
      i = (function () {
        function e(e, t) {
          var r = this;
          (this.privBuffers = []),
            (this.privReplayOffset = 0),
            (this.privLastShrinkOffset = 0),
            (this.privBufferStartOffset = 0),
            (this.privBufferSerial = 0),
            (this.privBufferedBytes = 0),
            (this.privReplay = !1),
            (this.privLastChunkAcquiredTime = 0),
            (this.id = function () {
              return r.privAudioNode.id();
            }),
            (this.privAudioNode = e),
            (this.privBytesPerSecond = t);
        }
        return (
          (e.prototype.read = function () {
            var e = this;
            if (this.privReplay && 0 !== this.privBuffers.length) {
              var t = this.privReplayOffset - this.privBufferStartOffset,
                r = Math.round(t * this.privBytesPerSecond * 1e-7);
              0 != r % 2 && r++;
              for (
                var i = 0;
                i < this.privBuffers.length &&
                r >= this.privBuffers[i].chunk.buffer.byteLength;

              )
                r -= this.privBuffers[i++].chunk.buffer.byteLength;
              var s = this.privBuffers[i].chunk.buffer.slice(r);
              return (
                (this.privReplayOffset +=
                  (s.byteLength / this.privBytesPerSecond) * 1e7),
                i === this.privBuffers.length - 1 && (this.privReplay = !1),
                n.PromiseHelper.fromResult({
                  buffer: s,
                  isEnd: !1,
                  timeReceived: this.privBuffers[i].chunk.timeReceived,
                })
              );
            }
            return this.privAudioNode
              .read()
              .onSuccessContinueWith(function (t) {
                return (
                  t &&
                    t.buffer &&
                    (e.privBuffers.push(
                      new o(t, e.privBufferSerial++, e.privBufferedBytes)
                    ),
                    (e.privBufferedBytes += t.buffer.byteLength)),
                  t
                );
              });
          }),
          (e.prototype.detach = function () {
            this.privAudioNode.detach(), (this.privBuffers = void 0);
          }),
          (e.prototype.replay = function () {
            this.privBuffers &&
              0 !== this.privBuffers.length &&
              ((this.privReplay = !0),
              (this.privReplayOffset = this.privLastShrinkOffset));
          }),
          (e.prototype.shrinkBuffers = function (e) {
            if (void 0 !== this.privBuffers) {
              this.privLastShrinkOffset = e;
              for (
                var t = e - this.privBufferStartOffset,
                  r = Math.round(t * this.privBytesPerSecond * 1e-7),
                  n = 0;
                n < this.privBuffers.length &&
                r >= this.privBuffers[n].chunk.buffer.byteLength;

              )
                r -= this.privBuffers[n++].chunk.buffer.byteLength;
              (this.privBufferStartOffset = Math.round(
                e - (r / this.privBytesPerSecond) * 1e7
              )),
                (this.privBuffers = this.privBuffers.slice(n));
            }
          }),
          (e.prototype.findTimeAtOffset = function (e) {
            if (e < this.privBufferStartOffset || void 0 === this.privBuffers)
              return 0;
            for (var t = 0, r = this.privBuffers; t < r.length; t++) {
              var n = r[t],
                i = (n.byteOffset / this.privBytesPerSecond) * 1e7,
                o =
                  i +
                  (n.chunk.buffer.byteLength / this.privBytesPerSecond) * 1e7;
              if (e >= i && e <= o) return n.chunk.timeReceived;
            }
            return 0;
          }),
          e
        );
      })();
    t.ReplayableAudioNode = i;
    var o = function (e, t, r) {
      (this.chunk = e), (this.serial = t), (this.byteOffset = r);
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(29),
      i = (function () {
        function e(e, t, r, n) {
          (this.privProxyHostName = e),
            (this.privProxyPort = t),
            (this.privProxyUserName = r),
            (this.privProxyPassword = n);
        }
        return (
          (e.fromParameters = function (t) {
            return new e(
              t.getProperty(n.PropertyId.SpeechServiceConnection_ProxyHostName),
              parseInt(
                t.getProperty(n.PropertyId.SpeechServiceConnection_ProxyPort),
                10
              ),
              t.getProperty(n.PropertyId.SpeechServiceConnection_ProxyUserName),
              t.getProperty(n.PropertyId.SpeechServiceConnection_ProxyPassword)
            );
          }),
          (e.fromRecognizerConfig = function (e) {
            return this.fromParameters(e.parameters);
          }),
          Object.defineProperty(e.prototype, "HostName", {
            get: function () {
              return this.privProxyHostName;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Port", {
            get: function () {
              return this.privProxyPort;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "UserName", {
            get: function () {
              return this.privProxyUserName;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Password", {
            get: function () {
              return this.privProxyPassword;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.ProxyInfo = i;
  },
]);
