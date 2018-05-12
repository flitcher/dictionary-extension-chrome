// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


console.log('background running!!!');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab);
}
