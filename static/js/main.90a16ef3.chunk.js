(this.webpackJsonphappybirthday = this.webpackJsonphappybirthday || []).push([
  [0],
  {
    22: function (e, t, c) {},
    23: function (e, t, c) {},
    30: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        s = c.n(n),
        r = c(14),
        a = c.n(r),
        i = (c(22), c(15)),
        j = c(2),
        o = c(9),
        d = (c(23), c(1)),
        u = new Date("Dec 18, 2021 00:00:00").getTime();
      function b() {
        var e = Object(n.useState)(0),
          t = Object(o.a)(e, 2),
          c = t[0],
          s = t[1],
          r = Object(n.useState)(0),
          a = Object(o.a)(r, 2),
          i = a[0],
          j = a[1],
          b = Object(n.useState)(0),
          l = Object(o.a)(b, 2),
          O = l[0],
          f = l[1],
          p = Object(n.useRef)();
        return (
          Object(n.useEffect)(function () {
            p = setInterval(function () {
              var e = new Date().getTime(),
                t = u - e;
              if (t < 0) clearInterval(p.current);
              else {
                var c = Math.floor((t % 864e5) / 36e5),
                  n = Math.floor((t % 36e5) / 6e4),
                  r = Math.floor((t % 6e4) / 1e3);
                s(c), j(n), f(r);
              }
            }, 1e3);
          }),
          Object(d.jsx)("div", {
            className: "cnt-container",
            children: Object(d.jsxs)("div", {
              className: "countdown-wrapper",
              children: [
                Object(d.jsxs)("div", {
                  className: "countdown-item",
                  children: [
                    Object(d.jsx)(h, { radius: x(c, 24, 0, 360, 0) }),
                    c,
                    Object(d.jsx)("span", { children: "hours" }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "countdown-item",
                  children: [
                    Object(d.jsx)(h, { radius: x(i, 60, 0, 360, 0) }),
                    i,
                    Object(d.jsx)("span", { children: "minutes" }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "countdown-item",
                  children: [
                    Object(d.jsx)(h, { radius: x(O, 60, 0, 360, 0) }),
                    O,
                    Object(d.jsx)("span", { children: "seconds" }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var h = function (e) {
        var t = e.radius;
        return Object(d.jsxs)("svg", {
          className: "countdown-svg",
          children: [
            Object(d.jsx)("circle", {
              cx: "50",
              cy: "50",
              r: "46",
              stroke: "#999",
              "stroke-width": "1",
              fill: "none",
            }),
            Object(d.jsx)("path", {
              fill: "none",
              stroke: "#333",
              strokeWidth: "5",
              d: O(50, 50, 48, 0, t),
            }),
          ],
        });
      };
      function l(e, t, c, n) {
        var s = ((n - 90) * Math.PI) / 180;
        return { x: e + c * Math.cos(s), y: t + c * Math.sin(s) };
      }
      function O(e, t, c, n, s) {
        var r = l(e, t, c, s),
          a = l(e, t, c, n),
          i = s - n <= 180 ? "0" : "1";
        return ["M", r.x, r.y, "A", c, c, 0, i, 0, a.x, a.y].join(" ");
      }
      function x(e, t, c, n, s) {
        return ((e - t) * (s - n)) / (c - t) + n;
      }
      function f() {
        return Object(d.jsx)(d.Fragment, {});
      }
      var p = function () {
        return Object(d.jsx)(i.a, {
          children: Object(d.jsxs)(j.c, {
            children: [
              Object(d.jsx)(j.a, {
                exact: !0,
                path: "/",
                children: Object(d.jsx)(b, {}),
              }),
              Object(d.jsx)(j.a, {
                path: "/happybirthday/home",
                children: Object(d.jsx)(f, {}),
              }),
            ],
          }),
        });
      };
      a.a.render(
        Object(d.jsx)(s.a.StrictMode, { children: Object(d.jsx)(p, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[30, 1, 2]],
]);
//# sourceMappingURL=main.90a16ef3.chunk.js.map
