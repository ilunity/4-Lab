# Doka Expert


- <a href="#intro">Intro</a>
- <a href="#structure">Project structure</a>
- <a href="#usage">Usage</a>
- <a href="#libraries">Python libraries</a>

---


## <a name="intro"></a> Intro

Doka Expert - Экспертная система, предугадывающая исход матча в игре Dota 2 в онлайн режиме.


## <a name="structure"></a> Project structure

```
dist  
  DokaExpert.exe    <-- исполняемый файл 
frontend            <-- файлы интерфейса
python
  expert_system.py  <-- исходный код алгоритма ЭС 
index.py            <-- скрипт, запускающий программу
```


## <a name="usage"></a> Usage

Готовая к использованию программа: [DokaExpert.exe](./dist/DokaExpert.exe)  
Программа запускается через браузер, установленный по умолчанию.


## <a name="libraries"></a> Python libraries   

Используемые в проекте python библиотеки:
1. [eel](https://github.com/ChrisKnott/Eel)