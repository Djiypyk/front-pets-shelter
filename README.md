# 🐾 Pets Shelter

Современное веб-приложение для приюта домашних животных, построенное с использованием современного стека технологий React.

## 🚀 Технологии

### Frontend
- **React 19** - UI библиотека
- **TypeScript** - типизированный JavaScript
- **Vite** - сборщик и dev-сервер
- **Tailwind CSS** - utility-first CSS фреймворк

### Состояние и роутинг
- **Redux Toolkit** - управление состоянием приложения
- **React Router v7** - маршрутизация
- **React Error Boundary** - обработка ошибок

### Архитектура
- **Feature-Sliced Design (FSD)** - архитектурная методология
- **ESM модули** - современная модульная система

### Инструменты разработки
- **ESLint** - линтер для JavaScript/TypeScript
- **Yarn** - пакетный менеджер

## 📋 Требования

- **Node.js** >= 22.12.0
- **Yarn**

## 🛠 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd pets-shelter
```

### 2. Установка зависимостей
```bash
# Используя Yarn (рекомендуется)
yarn install


### 3. Запуск в режиме разработки
```bash
# Yarn
yarn dev


Приложение будет доступно по адресу: http://localhost:3000

### 4. Сборка для продакшена
```bash
# Yarn
yarn build


### 5. Предварительный просмотр сборки
```bash
# Yarn
yarn preview


## 📁 Структура проекта

 src/
├── 1-app/ # Конфигурация приложения
│ ├── main.tsx # Точка входа
│ ├── store/ # Redux store
│ └── routes/ # Роутинг
├── 2-layouts/ # Макеты страниц
├── 3-pages/ # Страницы приложения
├── 6-entities/ # Бизнес-сущности
└── 7-shared/ # Переиспользуемые компоненты
├── api/ # API слой
├── lib/ # Утилиты
└── ui/ # UI компоненты

## 🤝 Разработка

### Типы веток и коммитов

#### 🚀 Новые функции (Features)
```bash
# Создание ветки для новой функции
git checkout -b feature/add-pet-adoption dev

# Примеры коммитов
git commit -m "feat: add pet adoption form"
git commit -m "feat: implement pet search filters"
```

#### 🐛 Исправления багов (Bugfixes)
```bash
# Создание ветки для исправления бага
git checkout -b fix/login-validation

# Примеры коммитов
git commit -m "fix: resolve login form validation issue"
git commit -m "fix: correct pet image loading error"
```

#### ♻️ Рефакторинг (Refactoring)
```bash
# Создание ветки для рефакторинга
git checkout -b refactor/user-auth-logic

# Примеры коммитов
git commit -m "refactor: extract auth logic to separate hook"
git commit -m "refactor: optimize pet list rendering"
```

#### 🎨 Улучшения UI/UX (Improvements)
```bash
# Создание ветки для улучшений
git checkout -b improve/navigation-design

# Примеры коммитов
git commit -m "style: update navigation component design"
git commit -m "improve: enhance mobile responsiveness"
```

#### 📝 Документация (Documentation)
```bash
# Создание ветки для документации
git checkout -b docs/api-documentation

# Примеры коммитов
git commit -m "docs: add API endpoints documentation"
git commit -m "docs: update installation guide"
```

#### ⚡ Оптимизация производительности (Performance)
```bash
# Создание ветки для оптимизации
git checkout -b perf/image-optimization

# Примеры коммитов
git commit -m "perf: optimize image loading with lazy loading"
git commit -m "perf: implement virtualization for pet lists"
```

#### 🔧 Настройки и конфигурация (Chore)
```bash
# Создание ветки для технических изменений
git checkout -b chore/update-dependencies

# Примеры коммитов
git commit -m "chore: update React to version 19"
git commit -m "chore: configure ESLint rules"
```

### Workflow разработки

1. **Создайте ветку от `dev`:**
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b [type]/[description]
   ```

2. **Внесите изменения и зафиксируйте:**
   ```bash
   git add .
   git commit -m "[type]: [description]"
   ```

3. **Отправьте изменения:**
   ```bash
   git push origin [branch-name]
   ```

4. **Создайте Pull Request** в `dev` ветку

5. **После ревью и мержа** удалите локальную ветку:
   ```bash
   git checkout dev
   git pull origin dev
   git branch -d [branch-name]
   ```

### Соглашения по именованию

#### Ветки:
- `feature/description` - новые функции
- `fix/description` - исправления багов
- `refactor/description` - рефакторинг кода
- `improve/description` - улучшения UI/UX
- `docs/description` - документация
- `perf/description` - оптимизация
- `chore/description` - технические изменения

#### Коммиты (Conventional Commits):
- `feat:` - новая функция
- `fix:` - исправление бага
- `refactor:` - рефакторинг
- `style:` - изменения стилей/форматирования
- `docs:` - изменения документации
- `perf:` - улучшения производительности
- `test:` - добавление тестов
- `chore:` - технические изменения
- `ci:` - изменения CI/CD