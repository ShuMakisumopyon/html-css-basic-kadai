// btnというidを持つHTML要素を取得し、定数btnに代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数textに代入する
const text = document.getElementById('text');

// HTML要素（btn）がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // 2秒後に文章を書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
})