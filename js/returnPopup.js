document.addEventListener('DOMContentLoaded', function() {
    // ページがどのように読み込まれたかのフラグ
    var backFlg = window.performance.navigation.type;
    console.log('Back Flag:', backFlg); // デバッグ用にフラグを出力

    // ブラウザバック以外で読み込まれた場合
    if (backFlg < 1) {
        // 履歴に現在のURLを追加保存する
        history.pushState(null, null, location.href);
        console.log('履歴をプッシュしました。'); // デバッグ用
    }

    // ブラウザの戻るボタンが押されたときの処理
    window.addEventListener('popstate', function(event) {
        console.log('Popstateイベントを検出しました。'); // デバッグ用
        var modal = document.querySelector(".js-modal");
        if (modal) {
            modal.style.display = 'block'; // モーダルウィンドウの表示
            console.log('モーダルを表示します。'); // デバッグ用
        } else {
            console.log('モーダルが見つかりません。'); // モーダルが見つからない場合のデバッグ用
        }

        // モーダルウィンドウ内の閉じるリンクのリンク先変更
        var mLink = document.getElementsByClassName("js-modal-close");
        if (mLink.length > 1) {
            mLink[1].setAttribute("onClick", "history.back();return false;");
            console.log('リンク先を前ページに変更。'); // デバッグ用
        }
    });

    // モーダルウィンドウを閉じる処理
    var closeButtons = document.getElementsByClassName('js-modal-close');
    if (closeButtons.length > 0) {
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function(event) {
                var modal = document.querySelector(".js-modal");
                if (modal) {
                    modal.style.display = 'none'; // モーダルを非表示
                    console.log('モーダルを閉じました。'); // デバッグ用
                }
                event.preventDefault();
            });
        }
    } else {
        console.log('closeボタンが見つかりません。'); // デバッグ用
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     // ページがどのように読み込まれたかのフラグ
//     var backFlg = window.performance.navigation.type;

//     // ブラウザバック以外で読み込まれた場合
//     if (backFlg < 1) {
//         // 履歴に現在のURLを追加保存する
//         history.pushState(null, null, location.href);
//     }

//     // ブラウザの戻るボタンが押されたときの処理
//     window.addEventListener('popstate', function(event) {
//         // モーダルウィンドウの表示
//         document.querySelector(".js-modal").style.display = 'block';

//         // モーダルウィンドウ内の閉じるリンクのリンク先変更
//         var mLink = document.getElementsByClassName("js-modal-close");
//         if (mLink.length > 1) {
//             mLink[1].setAttribute("onClick", "history.back();return false;");
//         }
//     });

//     // モーダルウィンドウを閉じる処理
//     var closeButtons = document.getElementsByClassName('js-modal-close');
//     for (var i = 0; i < closeButtons.length; i++) {
//         closeButtons[i].addEventListener('click', function(event) {
//             document.querySelector(".js-modal").style.display = 'none';
//             event.preventDefault();
//         });
//     }
// });
