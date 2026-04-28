# Coworking API — вариант 1 (lab-8/var1)
```

## Учётные записи после сида

| Email | Пароль | Роль |
|--------|--------|------|
| manager@example.com | manager123 | manager |
| client@example.com | client123 | client |
| guest@example.com | guest123 | guest |

## Основные эндпоинты

| Метод | Путь | Описание |
|--------|------|----------|
| GET | `/health` | Проверка |
| POST | `/auth/register` | Регистрация → `client` |
| POST | `/auth/login` | Вход |
| POST | `/auth/refresh` | Новый access по `refreshToken` |
| POST | `/auth/logout` | Выход, нужен `Bearer` |
| GET | `/users/me` | Профиль |
| PATCH | `/users/me` | Профиль |
| GET | `/spaces/popular?limit=3` | Популярные зоны |
| GET | `/spaces` | Каталог (фильтры как в var2) |
| GET | `/spaces/:id` | Зона |
| POST/PUT/DELETE | `/spaces`, `/spaces/:id` | CRUD зон — **manager** |
| GET | `/bookings` | **client/guest** — свои; **manager** — все |
| POST | `/bookings` | Бронь — **client** или **manager** |
| PATCH | `/bookings/:id/cancel` | Отмена `pending` — владелец или **manager** |
| PATCH | `/bookings/:id/status` | `approved` / `rejected` — **manager** |
| GET | `/reviews?spaceId=` | Публично, без скрытых |
| GET | `/reviews/manage?spaceId=` | Все отзывы — **manager** |
| POST | `/reviews` | Отзыв — **client** или **manager** |
| PATCH | `/reviews/:id` | Скрыть отзыв — **manager** |
| DELETE | `/reviews/:id` | Удалить — **manager** |

