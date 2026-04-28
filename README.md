# Coworking 

## Библиотеки

- **`axios`** 
- **`zod`**
- **`zustand`**
- **`react-router`**
- **`react-hook-form`**
- **`@hookform/resolvers`**
- **`@tanstack/react-query`**


## Учётные записи после сида

| Email | Пароль | Роль |
|--------|--------|------|
| manager@example.com | manager123 | manager |
| client@example.com | client123 | client |
| guest@example.com | guest123 | guest |

## Основные эндпоинты

| Путь | Описание |
|------|----------|
| `/health` | Проверка |
| `/auth/register` | Регистрация → `client` |
| `/auth/login` | Вход |
| `/auth/refresh` | Новый access по `refreshToken` |
| `/auth/logout` | Выход, нужен `Bearer` |
| `/users/me` | Профиль |
| `/spaces/popular?limit=3` | Популярные зоны |
| `/spaces` | Каталог (фильтры как в var2) |
| `/spaces/:id` | Зона |
| `/spaces`, `/spaces/:id` | CRUD зон — **manager** |
| `/bookings` | **client/guest** — свои; **manager** — все |
| `/bookings` | Бронь — **client** или **manager** |
| `/bookings/:id/cancel` | Отмена `pending` — владелец или **manager** |
| `/bookings/:id/status` | `approved` / `rejected` — **manager** |
| `/reviews?spaceId=` | Публично, без скрытых |
| `/reviews/manage?spaceId=` | Все отзывы — **manager** |
| `/reviews` | Отзыв — **client** или **manager** |
| `/reviews/:id` | Скрыть отзыв — **manager** |
| `/reviews/:id` | Удалить — **manager** |

