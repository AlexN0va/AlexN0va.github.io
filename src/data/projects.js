export const projects = [
    {
        id: 'Flight Controller',
        title: 'ESP32 Drone',
        image: '/images/Screenshot 2026-02-08 at 12.51.32 AM.png',
        description:
            'This project integrates wireless control, power management, and a full sensing suite into a single PCB design, achieving a robust and manufacturable drone for under $50 per unit ($32.01).',
        github: 'https://github.com/AlexN0va/esp-32FlightController',
        content: `# ESP32 Drone

## Project Overview

The ESP32 Drone is a custom-designed embedded system I developed for a drone project. This flight controller integrates wireless control, power management, and a full sensing suite into a single PCB design, achieving a robust and manufacturable drone for under $50 per unit ($32.01).

## Motivation

Drone technology has become increasingly popular, and I wanted to create a flight controller that was both affordable and reliable. I also wanted to learn more about embedded systems and wireless communication.

## Technical Specifications

### Hardware Components


### Software Components

## Design Process

### PCB Design

![PCB Layout](/images/drone/drone1.png)

### Testing & Validation

![Testing Setup](/images/drone/drone2.png)

---

*This project demonstrates my ability to design and implement a flight controller that can be used to control a drone wirelessly.*`

    },
    {
        id: 'FSAE-Sensor-Node',
        title: 'FSAE Sensor Node',
        image: '/images/IMG_0840.JPG',
        description:
            'A custom-designed sensor node for Formula SAE, featuring CAN bus communication, multi-sensor integration, and real-time data acquisition.',
        github: 'https://github.com/AlexN0va',
        content: `# FSAE Sensor Node

## Project Overview

The FSAE Sensor Node is a custom-designed embedded system I developed for our Formula SAE electric race car. This telemetry system collects and transmits critical vehicle data in real-time, enabling performance analysis and providing valuable feedback to drivers and engineers.

## Technical Specifications

### Hardware Components

## Design Process

### Circuit Design

The schematic includes:

![Circuit Schematic](/images/sensornode/sensor1.png)

### PCB Layout

## Build & Testing Process

1. **PCB Fabrication**: Ordered from JLCPCB with assembly service
2. **Component Testing**: Verified each sensor interface individually
3. **CAN Network Testing**: Validated communication with other nodes
4. **Environmental Testing**: Tested in temperature chamber and vibration table
5. **On-Vehicle Testing**: Integrated into race car and validated during test sessions

---

*This project demonstrates my ability to design complete embedded systems from circuit design through firmware development and real-world deployment.*`
    },
    {
        id: 'FSAE-PCU-BSPD',
        title: 'FSAE Power Control Unit & Brake System Safety',
        image: '/images/IMG_9326.jpeg',
        description:
            'Safety-critical power distribution and brake system monitoring for a Formula SAE electric race car. Features redundant shutdown circuits, high-current switching, and compliance with FSAE EV safety regulations for protecting drivers and electrical systems.',
        github: 'https://github.com/AlexN0va',
        content: `# FSAE Power Control Unit & BSPD

## Project Overview

The Powertrain Control Unit (PCU) integrates both the Accelerator Pedal Position Sensor (APPS) and the Brake System Plausibility Device (BSPD). It is crucial to the driver's safety.

The APPS monitors pedal position using two different sensors, each with a different slope. This redundancy ensures safety by allowing the system to detect deviations between the sensors' data. If the deviation between the sensor data is more than 10% pedal travel between the sensors, stop power to the motor. Once validated, the APPS converts the pedal signals into torque commands and transmits them over the CAN bus.

The BSPD, mounted on the PCU, serves as a crucial safety mechanism. It triggers a system shutdown if an abnormal condition is detected, such as the brakes being engaged while the motor continues to draw a high current. To monitor motor current, the BSPD uses a Hall Effect Current Sensor (HECS), along with front and rear brake pressure sensors and a brake encoder, to accurately assess brake plausibility. The brake pressure sensors are located on the brake lines of the front and rear wheels and detect the hydraulic pressure applied to the brakes. While driving, if the driver presses the brakes, the brake encoder measures how far the pedal is pressed, and the brake pressure sensors detect and compare the resulting hydraulic pressure with the encoder's reading of the pedal position.

## Technical Specifications

### Power Control Unit (PCU)


### Brake System Plausibility Device (BSPD)

## Design Process

### PCU and BSPD Circuit Design



![PCB Layout](/images/pcuandbspd/pcu2.png)

### Testing & Validation

![Testing Setup](/images/pcuandbspd/pcu1.png)

---

*This project demonstrates my ability to design safety-critical systems that protect human life while meeting stringent regulatory requirements.*`
    },
    {
        id: 'Lamusica',
        title: 'Lamusica - Custom Speaker System',
        image: '/images/lamusica/baka2.png',
        description:
            'Lamusica is a custom-designed speaker system combining electronics engineering and 3D modeling. This project showcases PCB design, circuit analysis, and mechanical engineering to create a functional and aesthetically pleasing audio device.',
        github: 'https://github.com/AlexN0va',
        content: `# Lamusica - Custom Speaker System

## Project Overview
Music. Oh golly, what would I do without music. What would you do without music? Imagine you were in an apocalypse. No speaker, no music :( Alex Nava, however, knows how to design a PCB and speaker. So cool.

## Technical Specifications

### Audio Components
- **MCU + Wireless**: ESP32-WROOM (Bluetooth + Wi-Fi capable)
- **Audio Amplifier**: Adafruit MAX-series Class-D amplifier (5V powered)
- **Power Supply**: 24V DC input with buck converter and LDO

## Design Process

### Circuit Schematic

![Circuit Schematic](/images/Lamusica/baka1.png)

![Circuit Schematic](/images/Lamusica/baka2.png)

## Build Process

1. **PCB Design**: Laid out the circuit in KiCad
2. **PCB Fabrication**: Ordered from JLCPCB
3. **Component Assembly**: Soldered all SMD and through-hole components
4. **Enclosure Printing**: 3D printed the speaker housing
5. **Assembly**: Installed drivers, PCB, and wiring
6. **Testing**: Verified audio quality and frequency response


*This project showcases my ability to design complete systems from concept to finished product.*`
    },
    {
        id: 'Macro-Keyboard',
        title: 'Custom Macro Keyboard PCB',
        image: '/images/Streamdeck/stream1.png',
        description:
            'A custom-designed mechanical macro keyboard PCB featuring hot-swappable switches, RGB backlighting, and programmable macros. Built with QMK firmware for complete customization and designed for productivity and content creation workflows.',
        github: 'https://github.com/AlexN0va',
        content: `# Custom Macro Keyboard PCB

## Project Overview

This custom macro keyboard is a fully programmable input device I designed from scratch, featuring mechanical switches, RGB lighting, and QMK firmware. The project combines PCB design, firmware development, and mechanical engineering to create a productivity tool tailored to my workflow.

## Motivation

As someone who frequently switches between coding, CAD work, and content creation, I wanted a dedicated macro pad that could streamline repetitive tasks. Commercial options were either too expensive or lacked the customization I needed, so I decided to design my own.

## Technical Specifications

### Hardware
- **Microcontroller**: ATmega32U4 (same as Arduino Leonardo)
- **Switches**: Hot-swappable Kailh sockets supporting Cherry MX-style switches
- **Layout**: 3x4 grid (12 keys) with rotary encoder
- **Lighting**: WS2812B RGB LEDs (per-key backlighting)
- **PCB**: 2-layer board with USB-C connector
- **Case**: 3D-printed enclosure with switch plate

## Design Process

### Circuit Design

The schematic includes:
- USB-C interface with proper CC resistors for USB 2.0
- ATmega32U4 with crystal oscillator and reset circuit
- Switch matrix with diodes for anti-ghosting
- RGB LED chain with data signal routing
- Rotary encoder with pull-up resistors

![Circuit Schematic](/images/Streamdeck/stream1.png)
![Circuit Schematic](/images/Streamdeck/stream2.png)

*This project showcases practical PCB design skills and the ability to create custom tools that solve real problems.*`
    },
    {
        id: 'RLN',
        title: 'Robot Arm',
        image: '/images/Screenshot 2026-02-08 at 12.48.05 AM.png',
        description:
            'A blog about my journey with Robot Arms. It is a big work in progress since robot arms are a big passion of mine.',
        github: 'https://github.com/AlexN0va/RoboArm',
        content: 'Write your blog/documentation about RoboLeanard here...'
    },
    {
        id: 'SIC',
        title: 'Segmented Image Compression',
        image: '/images/sic.png',
        description:
            'Segmented Image Compression is an AI-based MRI compression application designed to make it easy and convenient for doctors to transmit MRI images without losing crucial image quality. Leveraging Facebook\'s SAM model, this tool ensures that vital details are preserved during compression. This project was developed as part of the Stanford Compression Forum.',
        github: 'https://github.com/AlexN0va/SICModel',
        content: 'Write your blog/documentation about Segmented Image Compression here...'
    },
    {
        id: 'RallBoll',
        title: 'Rollball. Best 3D ball game',
        image: '/images/rollball.jpg',
        description:
            'RallBoll is a physics-driven Unity game where players navigate a ball through intricate maps, overcoming real-world physics challenges to reach checkpoints. Designed with precise mechanics, it offers a satisfying mix of skill, strategy, and creative problem-solving.',
        github: 'https://alexn0va.itch.io/rallboll?secret=G0BK8rNopB2iKHjRqgukx11tII',
        content: 'Write your blog/documentation about RallBoll here...'
    },
    {
        id: 'FarmPass',
        title: 'FarmPass. crossy road but cowboy',
        image: '/images/farmpass.jpeg',
        description:
            'FarmPass is a charming browser-based game built with JavaScript, offering a laid-back farming simulation inspired by Animal Crossing. Players can cultivate crops, trade goods, and build their dream farm while enjoying a nostalgic twist on community-driven gameplay.',
        github: 'https://alexn0va.github.io/FarmPass/',
        content: 'Write your blog/documentation about FarmPass here...'
    }
]
