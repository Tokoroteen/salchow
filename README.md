# salchow公式HP
https://salchow.netlify.app/

# 編集方法
## メンバーカードの追加
`member.html`の`<div class="member-cards">`の中に
```
<card-template img_src="画像へのパス" member_name="メンバーの名前" basic="ポジションと身長" text="略歴（改行を入れたい場合はその場所に<br>と書き込む）"></card-template>
```
を追加する。
>**Warning**
>メンバー画像は正方形にトリミングしたものが望ましい。
