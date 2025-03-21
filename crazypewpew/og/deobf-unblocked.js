function unblockedGetParentUrl() {
    var _0x35c9df = parent !== window;
    var _0x4894eb = null;
    if (_0x35c9df) {
      _0x4894eb = document.referrer;
    }
    if (_0x4894eb != null && !_0x4894eb.includes("http")) {
      return null;
    }
    return _0x4894eb;
  }
  function unblockedRedirect(_0x25a258) {
    return false;
  }
  function unblockedOnLoadX(_0x47aac0) {
    if (_0x47aac0 !== undefined) {
      let _0x59028f = _0x47aac0.getElementById("links2");
      if (_0x59028f !== undefined) {
        if (window.showLinks) {
          _0x59028f.hidden = false;
          _0x59028f.innerHTML += "<ul><li><a href='https://unblocked-games.s3.amazonaws.com/index.html' target='_blank'>Unblocked</a></l><li><a href='https://www.julgames.com/' target='_blank'>JulGames.com</a></l></ul>";
        }
      }
    }
  }
  function processJSONPResponse(_0x4c7952) {}
  function unblockedOnLoadY(_0x45acad, _0x1996cb, _0x350116) {
    if (_0x45acad !== undefined) {
      let _0x15de49 = _0x45acad.getElementById("gameFrame");
      if (_0x15de49 !== undefined) {
        const _0x39c483 = unblockedGetParentUrl();
        if (_0x39c483 == null) {
          console.log('Link');
          _0x15de49.src = _0x350116;
          return;
        }
        console.log('FN');
        _0x15de49.src = _0x350116;
      }
    }
  }