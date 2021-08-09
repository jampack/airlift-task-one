# Standalone App

### Requirements

1. NodeJS
2. Redis Server
3. MongoDB

### Running the App

1 Configure ``.env`` according to your setup
2. ``npm install``
3. ``npm run start`` OR ``npm run start:dev``(Hot reload)
4. Api will be hosted on ``http://localhost:3000`` OR ``http://127.0.0.1:3000``


# Containerized Setup(Preferred)

### Requirements

1. NodeJS
2. Docker

### Running the App

1. Execute ``npm run d`` OR ``yarn d``(Will take a while to download images and setup everything)
2. Api will be hosted on ``http://localhost:8080`` OR ``http://127.0.0.1:8080``
3. HAPROXY stats UI will be hosted on ``http://localhost:70`` OR ``http://127.0.0.1:70``

### About this setup

1. It Runs 2 copies of the APP
2. Installs HAPROXY to load balance the 2 copies of App
3. Installs Redis and MongoDB


# Jmeter Test Plan & API Document

1. **Jmeter test plan is attached with the source in extras directory by the name ``Airlift_task_one_test_plan.jmx``**

2. **Insomnia API collection is attached with the source in extras directory by the name ``Airlift-TaskOne-Insomnia_2021-08-09.json``**
