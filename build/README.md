# Rosbank Newsletter

> Шаблон письма росбаннка
> alt в изображения и title в ссылках нужны чтобы не попадать в спам
> {{map_token}} == pk.eyJ1IjoiY3liZXJib2JlciIsImEiOiJjamZqOWNjZHA1bnhvMnJudmRmMzhyYzZyIn0.QgJ9bFyfn5WWUXWn9x2ngg
## Ссылка на карту

```html
    <a href="https://yandex.ru/maps/?pt={lon},{lat}&z=17&l=map" target="_blank" title="{Office address} - открыть в «Яндекс Картах»">
```

На выходе

```html
    <a href="https://yandex.ru/maps/?pt=37.648456,55.772168&z=17&l=map" target="_blank" title="Москва, ул. Маши Порываевой 34 - открыть в «Яндекс Картах»">
```


## Mapbox Static Api

```html
    <img class="map" src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l-circle+e60028({lon},{lat})/{lon},{lat},16,0,0/580x450?access_token=pk.eyJ1IjoiY3liZXJib2JlciIsImEiOiJjamZqOWNjZHA1bnhvMnJudmRmMzhyYzZyIn0.QgJ9bFyfn5WWUXWn9x2ngg" mc:edit="article_1_image" class="image image--upper" width="580" alt="{Office address}" />
```

На выходе

```html
   <img class="map" src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l-circle+e60028(37.648456,55.772168)/37.648456,55.772168,16,0,0/580x450?access_token=pk.eyJ1IjoiY3liZXJib2JlciIsImEiOiJjamZqOWNjZHA1bnhvMnJudmRmMzhyYzZyIn0.QgJ9bFyfn5WWUXWn9x2ngg" mc:edit="article_1_image" class="image image--upper" width="580" alt="Москва, ул. Маши Порываевой 34" />
```

## Итерируемый документ

```html
    <div class="body-list">
        <p class="list-header">При наличии на руках справки 2-НДФЛ</p>
        <div class="list">
            <div class="list-marker"></div>
            <div class="list-text">Справка 2-НДФЛ</div>
        </div>
        <div class="list">
            <div class="list-marker"></div>
            <div class="list-text">Паспорт гражданина РФ</div>
        </div>
    </div>
```