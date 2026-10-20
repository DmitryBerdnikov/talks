# React-примеры к презентации Mantine

Самостоятельное Vite-приложение внутри pnpm workspace презентации. Использует React 19.2.8 и Mantine 9.7.1 — те же версии, на которых готовились примеры. Зависимостей от соседнего репозитория `ui-libs` нет.

Из корня репозитория:

```sh
pnpm install --frozen-lockfile
pnpm dev:examples
```

Каталог примеров: http://localhost:4302. Презентация запускается отдельно командой `pnpm dev` на http://localhost:3030.

Если порт 4302 занят старым демо, останови его либо запусти новый экземпляр на другом порту:

```sh
pnpm dev:examples --port 4303
```

## Экраны и исходники

| Маршруты                                                                                                                   | Исходники                               |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `/core-showcase`                                                                                                           | `src/slides/core-showcase.tsx`          |
| `/layout-showcase`                                                                                                         | `src/slides/layout-showcase.tsx`        |
| `/extensions-showcase`                                                                                                     | `src/slides/extensions-showcase.tsx`    |
| `/customization-showcase`                                                                                                  | `src/slides/customization-showcase/`    |
| `/input-base`, `/input-with-props`, `/input-anatonomy`, `/input-styles-api`, `/input-data-attribute`, `/input-style-props` | `src/components-styling/`               |
| `/polymorphic`, `/custom-component`                                                                                        | `src/useful-features/`                  |
| `/base`, `/container`, `/grid`                                                                                             | `src/pages/`                            |
| `/test-form`, `/team-form`, `/schema-sync`                                                                                 | `src/pages/`, `src/features/team-form/` |
| `/examples/users`, `/examples/users-custom`, `/examples/feedback`, `/examples/product`                                     | `src/pages/examples/`                   |
| `/examples/card`, `/examples/card-classnames`, `/examples/card-button`, `/examples/card-style-props`                       | `src/pages/card-page-*.tsx`             |

Изображения и стили showcase лежат рядом с компонентами. Каждый раздел загружается отдельно и сохраняет собственный MantineProvider.

Компоненты перенесены из `ui-libs/apps/mantine`; старые копии страниц удалены. Учебная страница Splitter с черновыми экспериментами и сценарии сравнения других UI-библиотек не включены.

Текущие скриншоты слайдов остаются статическими файлами в `slides/`. Изменение React-примера не переснимает их автоматически. Grid использует фотографии Unsplash, для которых нужен интернет.

## Проверки

```sh
pnpm typecheck:examples
pnpm build:examples
pnpm build:all
```

Результат сборки React-примеров: `examples/react/dist/`. Сборка презентации: корневой `dist/`. Форматирование выполняется общими командами `pnpm format` и `pnpm format:check`.

Кастомная таблица (`/examples/users-custom`) использует ту же разметку, данные и поведение, что `/examples/users`. Локальная тема задаётся в `src/pages/examples/users-table/users-theme.ts`; дефолтный вариант — в `src/pages/examples/users-table/default-users-page.tsx`, кастомный — в `src/pages/examples/users-table/custom-users-page.tsx`, общая таблица — в `src/pages/examples/users-table/users-page.tsx`. Оформление выполнено через тему Mantine, props и Styles API без отдельного файла стилей.

Текущий живой вариант кастомной таблицы использует малиновый акцент на белом фоне, светлую розовую шапку, яркие зелёные, синие и розово-красные статусы и цветные метки ролей. Общие размеры обеих версий совпадают; дефолтная тема сохранена. Скриншот в презентации пока показывает предыдущую версию и будет обновлён после ревью автора.
