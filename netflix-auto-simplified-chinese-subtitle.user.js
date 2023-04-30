// ==UserScript==
// @name         Netflix Auto Simplified Chinese Subtitle
// @namespace    https://openai.com/
// @version      0.1
// @description  Automatically set Netflix subtitles to Simplified Chinese
// @author       OpenAI
// @match        *://*.netflix.com/watch/*
// @updateURL      YOUR_UPDATE_URL_HERE
// @downloadURL    YOUR_DOWNLOAD_URL_HERE
// @supportURL     YOUR_SUPPORT_URL_HERE (Optional)
// @require        https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @run-at         document-end
// @grant          GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // 等待视频播放器加载
    function waitForPlayer() {
        const videoPlayer = document.querySelector('.VideoContainer video');
        if (videoPlayer) {
            setTimeout(setSimplifiedChineseSubtitles, 3000);
        } else {
            setTimeout(waitForPlayer, 1000);
        }
    }

    // 设置简体中文字幕
    function setSimplifiedChineseSubtitles() {
        const subtitleButton = document.querySelector('[data-uia="player-settings-button-subtitles"]');
        if (subtitleButton) {
            subtitleButton.click();
            const subtitleMenu = document.querySelector('.subtitles-list');
            if (subtitleMenu) {
                const simplifiedChineseOption = Array.from(subtitleMenu.children).find(el => el.textContent.includes('简体中文'));
                if (simplifiedChineseOption) {
                    simplifiedChineseOption.click();
                }
            }
            subtitleButton.click();
        } else {
            setTimeout(setSimplifiedChineseSubtitles, 1000);
        }
    }

    waitForPlayer();
})();
