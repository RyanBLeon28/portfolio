export const projectsData = [
    {
        id: 1,
        title: "Monitoramento IoT de Correias Transportadoras",
        description: "Sistema industrial ponta a ponta (end-to-end) para telemetria em tempo real. No nível de campo, desenvolvi o firmware em C/C++ para microcontroladores, utilizando comunicação LoRa para transmissão de dados em ambientes industriais hostis. Na camada de infraestrutura, atuei diretamente na configuração de servidores Linux e proxies reversos para garantir o roteamento seguro e eficiente dos dados. O backend da aplicação foi arquitetado em PHP (Laravel) com banco PostgreSQL, consumido por um dashboard interativo construído em React/TypeScript.",
        tech: ["IoT / LoRa", "C/C++", "Linux Server", "Laravel", "React"],
        image: [
            "/images/mextec5.jpeg",
            "/images/mextec3.jpeg",
            "/images/mextec2.jpeg",
            "/images/mextec1.jpeg"
        ]
    },
    {
        id: 2,
        title: "Aplicativo IoT: Lava-Louças Automatizada",
        description: "Desenvolvimento do aplicativo mobile (focado em Android) utilizando React Native para o monitoramento e controle de um equipamento inovador de lavagem. O núcleo técnico do projeto consistiu em estabelecer uma comunicação bidirecional confiável com o hardware da máquina (microcontrolador em C/C++). A arquitetura implementa Bluetooth Low Energy (BLE) para o pareamento seguro e setup inicial offline, e WebSockets para a transmissão de telemetria e execução de comandos em tempo real com baixíssima latência.",
        tech: ["React Native", "Android", "BLE", "WebSockets", "IoT", "C/C++"],
        image: [
            "/images/maoExtra.jpeg",
            "/images/maoExtra.jpeg"
        ]
    },
    // {
    //     id: 3,
    //     title: "SDN & eBPF Security",
    //     description: "Pesquisa em mitigação de ataques DDoS processando pacotes em alta velocidade com eBPF/XDP.",
    //     tech: ["SDN", "eBPF/XDP", "NetSec"],
    //     image: "https://via.placeholder.com/400x400/312e81/818cf8?text=NetSec+Arch"
    // },
    {
        id: 6,
        title: "Estação Meteorológica Microcontrolada",
        description: "Criação de uma estação meteorológica realizando a calibração de Anemômetro, e coleta de temperatura, humidades, direção do vento, entre outras variáveis. https://github.com/RyanBLeon28/Estacao-Meteorologica",
        tech: ["C/C++", "Grafana", "LoRa", "InfluxDB", "PCB"],
        image: [
            "/images/estacao5.jpeg",
            "/images/estacao6.jpeg",
            "/images/estacao3.jpeg",
            "/images/estacao2.jpeg",
            "/images/estacao1.jpeg",
        ]
    },
    {
        id: 11,
        title: "IP Query: Plataforma de Threat Intelligence",
        description: "Ferramenta de cibersegurança para automação e análise de ameaças (OSINT). O sistema recebe relatórios em formato PDF, realiza o parsing para extração de endereços IP e consulta APIs abertas de reputação em tempo real. Os dados processados são renderizados em um dashboard analítico no frontend, apresentando a geolocalização dos nós em um mapa de calor (heatmap). A aplicação classifica automaticamente o nível de risco e a origem geográfica dos IPs, facilitando a identificação rápida de tráfego malicioso.",
        tech: ["Cybersecurity", "OSINT APIs", "Data Viz / Maps", "Node.js", "React", "PDF Parsing"],
        image: "/images/IPquery.jpeg"
    },
    {
        id: 7,
        title: "Sistema de Chat Distribuído",
        description: "Desenvolvimento do backend em Go para uma aplicação de chat em tempo real com foco em alta disponibilidade e tolerância a falhas. A arquitetura utiliza NGINX como load balancer distribuindo conexões WebSocket entre múltiplos servidores. Para resolver o sincronismo de estado, implementei o padrão Publish/Subscribe usando Redis, garantindo que usuários na mesma sala recebam mensagens instantaneamente, mesmo conectados a instâncias diferentes. O sistema conta com failover automático (redirecionando usuários se um servidor cair) e persistência em MongoDB.",
        tech: ["Go", "Redis", "NGINX", "WebSockets", "MongoDB"],
        image: "/images/chatOnline2.jpeg"
    },
    {
        id: 5,
        title: "Sistema Embarcado para Controle de Presença",
        description: "Desenvolvimento de uma solução em hardware e firmware para automação de chamadas em sala de aula. O projeto foi construído do zero (end-to-end), abrangendo todo o ciclo de engenharia eletrônica: design de esquemáticos, roteamento e montagem da Placa de Circuito Impresso (PCB) utilizando KiCad. O firmware do microcontrolador foi totalmente desenvolvido em C/C++, implementando a lógica de validação de leitura, processamento de dados de sensores e gerenciamento dos estados do hardware de forma eficiente.",
        tech: ["Embedded Systems", "PCB Design", "KiCad", "C/C++", "Microcontrollers"],
        image: [
            "/images/sistemaPresenca.jpeg",
            "/images/controleDePresenca.jpeg"
        ]
    },
    {
        id: 12,
        title: "Análise Comparativa de Algoritmos TCP",
        description: "Estudo prático de desempenho e controle de congestionamento na pilha TCP/IP do kernel Linux. A pesquisa avaliou o comportamento dos algoritmos TCP Reno, CUBIC (baseados em perda) e BBR (baseado em atraso/gargalo). Foram realizados testes de estresse e medições de pacotes transmitidos em diferentes cenários de limitação de banda (10Mbps, 50Mbps e 100Mbps), analisando a eficiência de cada flavor na otimização de vazão (throughput) e mitigação de latência.",
        tech: ["TCP/IP", "Linux Kernel", "BBR", "Networking", "Performance Analysis"],
        image: [
            "/images/10mbps.png",
            "/images/50mbps.png",
            "/images/100mbps.png"
        ]
    },
    {
        id: 4,
        title: "Sistema Operacional",
        description: "Construção prática dos pilares fundamentais de um Sistema Operacional. O projeto foi estruturado em quatro módulos de baixo nível: escalonamento e gerenciamento de processos (CPU), esquemas de alocação e gerenciamento de memória (paginação/virtualização), controle de Entrada/Saída (I/O) e estruturação de sistemas de arquivos. A implementação exigiu domínio sobre concorrência, prevenção de deadlocks e a camada de abstração entre o hardware e o espaço de usuário em ambiente Linux.",
        tech: ["Linux Kernel Concepts", "C", "Process Scheduling", "Memory Management", "File Systems"],
        image: "/images/SO.jpg"
    },
    {
        id: 8,
        title: "Semáforo em FPGA",
        description: "Criação de um chat para a disciplina de sistemas distribuídos, focando no ...",
        tech: ["FPGA", "Sistemas Digitais", "VHDL"],
        image: "https://via.placeholder.com/400x400/0f172a/38bdf8?text=LubriLaudo"
    },
    {
        id: 9,
        title: "Contador em FPGA",
        description: "Criação de um chat para a disciplina de sistemas distribuídos, focando no ...",
        tech: ["FPGA", "Sistemas Digitais", "VHDL"],
        image: "/images/FPGA.jpeg"
    },
    {
        id: 10,
        title: "iMenu: Plataforma Mobile de Cardápio Digital",
        description: "Desenvolvimento full-stack de uma solução comercial voltada para a modernização do setor gastronômico. O projeto foca na experiência do usuário (UI/UX) através de um aplicativo mobile responsivo construído com React Native. A arquitetura de backend em Node.js gerencia a lógica de negócios e integrações, enquanto o banco de dados NoSQL (MongoDB) foi adotado para permitir alta flexibilidade na modelagem de catálogos dinâmicos, suportando variações complexas de itens, categorias e preços.",
        tech: ["React Native", "Node.js", "MongoDB", "Mobile App", "Full-Stack"],
        image: "https://via.placeholder.com/400x400/0f172a/38bdf8?text=iMenu" // Lembre-se de trocar pelo caminho da sua imagem real
    }
];