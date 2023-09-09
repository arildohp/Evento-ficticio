AOS.init();

const dataDoEvento = new Date("dec 2, 2022  19:00:00");
const timeStampDoEvento = dataDoEvento.getTime;

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 100*60*60*24;
    const horaEmMS = 100*60*60;
    const minutoEmMs = 100*60;
    
    const diasAteOEvento = math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const minutosAteOEvento = math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMs);
    const segundosAteOEvento = math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoEmMs}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML =  'Evento expirado';
    }
}, 1000);