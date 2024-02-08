(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"class":"Player","data":{"name":"Player590","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"gap":10,"definitions": [{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_camera","media":"this.panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","zoomEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_8D484BD2_874F_9F0A_41B6_9B2A95E0D6FA","id":"panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_camera"},{"thumbnailUrl":"media/panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_t.jpg","id":"panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE","hfovMax":130,"class":"Panorama","hfov":360,"hfovMin":"150%","label":trans('panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE.label'),"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8D08F734_874F_970E_41C7_3F4E8AF84FEE_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"master bath"},"vfov":180},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"paddingLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","progressHeight":10,"toolTipFontStyle":"normal","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipShadowSpread":0,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"progressBorderSize":0,"subtitlesBottom":50,"progressLeft":0,"toolTipShadowColor":"#333333","playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","height":"100%","vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"surfaceReticleOpacity":0.6,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_8D484BD2_874F_9F0A_41B6_9B2A95E0D6FA"}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"width":"100%","paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","defaultVRPointer":"laser","id":"rootPlayer","scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","scripts":{"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoForward":TDV.Tour.Script.historyGoForward,"translate":TDV.Tour.Script.translate,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"registerKey":TDV.Tour.Script.registerKey,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"existsKey":TDV.Tour.Script.existsKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setValue":TDV.Tour.Script.setValue,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setLocale":TDV.Tour.Script.setLocale,"getOverlays":TDV.Tour.Script.getOverlays,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"start":"this.init()","downloadEnabled":false,"borderSize":0,"minWidth":20,"shadow":false,"minHeight":20,"backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Feb 8 2024