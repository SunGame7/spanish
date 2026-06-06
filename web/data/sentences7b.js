const SENTENCES_DATA = [
    {
        "template": "Ayer el director ________(anunciar) una nueva política para toda la escuela.",
        "answer": "anunció"
    },
    {
        "template": "El verano pasado nosotros ________(descubrir) un restaurante escondido cerca del puerto.",
        "answer": "descubrimos"
    },
    {
        "template": "En 1492 Colón ________(llegar) a América.",
        "answer": "llegó"
    },
    {
        "template": "Hace dos días mis vecinos ________(mudarse) a otra ciudad.",
        "answer": "se mudaron"
    },
    {
        "template": "El viernes tú ________(resolver) el problema antes que todos.",
        "answer": "resolviste"
    },
    {
        "template": "De repente, la alarma ________(interrumpir) la reunión.",
        "answer": "interrumpió"
    },
    {
        "template": "Yo ________(traducir) el documento cuando se apagó la computadora.",
        "answer": "traducía"
    },
    {
        "template": "Los estudiantes ________(debatir) sobre la respuesta cuando entró la profesora.",
        "answer": "debatían"
    },
    {
        "template": "Mi hermana ________(maquillarse) cuando alguien tocó la puerta.",
        "answer": "se maquillaba"
    },
    {
        "template": "Nosotros ________(investigar) el caso cuando apareció una pista nueva.",
        "answer": "investigábamos"
    },
    {
        "template": "Primero el abogado ________(presentar) las pruebas al juez.",
        "answer": "presentó"
    },
    {
        "template": "Luego los testigos ________(contradecir) su versión de los hechos.",
        "answer": "contradijeron"
    },
    {
        "template": "Después el jurado ________(deliberar) durante tres horas.",
        "answer": "deliberó"
    },
    {
        "template": "Finalmente, el juez ________(pronunciar) la sentencia.",
        "answer": "pronunció"
    },
    {
        "template": "Al final de la entrevista, la empresa me ________(ofrecer) el puesto.",
        "answer": "ofreció"
    },
    {
        "template": "La multitud ________(empezar) a gritar cuando el cantante salió al escenario.",
        "answer": "empezó"
    },
    {
        "template": "Yo ________(comenzar) a sospechar algo cuando vi las luces apagadas.",
        "answer": "comencé"
    },
    {
        "template": "De pronto, el bebé ________(ponerse) a llorar sin razón.",
        "answer": "se puso"
    },
    {
        "template": "Al oír la noticia, mis padres ________(echarse) a reír.",
        "answer": "se echaron"
    },
    {
        "template": "Cuando vio la araña, Elena ________(empezar) a correr.",
        "answer": "empezó"
    },
    {
        "template": "Mis primos ________(llegar) al aeropuerto después de medianoche.",
        "answer": "llegaron"
    },
    {
        "template": "El tren ________(salir) de la estación con veinte minutos de retraso.",
        "answer": "salió"
    },
    {
        "template": "Nosotros ________(volver) de la excursión cubiertos de lodo.",
        "answer": "volvimos"
    },
    {
        "template": "Tú ________(entrar) en la sala justo antes del discurso.",
        "answer": "entraste"
    },
    {
        "template": "Los invitados ________(irse) antes de que terminara la tormenta.",
        "answer": "se fueron"
    },

    {
        "template": "La mansión ________(parecer) abandonada, pero todavía tenía luces encendidas.",
        "answer": "parecía"
    },
    {
        "template": "El profesor ________(ser) exigente, pero explicaba todo con paciencia.",
        "answer": "era"
    },
    {
        "template": "Las ventanas ________(estar) rotas y cubiertas de polvo.",
        "answer": "estaban"
    },
    {
        "template": "La ciudad ________(tener) calles estrechas y edificios coloridos.",
        "answer": "tenía"
    },
    {
        "template": "El perro ________(ser) enorme, negro y sorprendentemente tranquilo.",
        "answer": "era"
    },
    {
        "template": "Durante el viaje, mi hermano ________(sentirse) mareado todo el tiempo.",
        "answer": "se sentía"
    },
    {
        "template": "Yo ________(tener) dolor de cabeza mientras estudiaba para el examen.",
        "answer": "tenía"
    },
    {
        "template": "Los atletas ________(estar) agotados después de tantas prácticas.",
        "answer": "estaban"
    },
    {
        "template": "Mi abuela ________(padecer) una tos terrible ese invierno.",
        "answer": "padecía"
    },
    {
        "template": "Tú ________(sentirse) débil porque no habías desayunado.",
        "answer": "te sentías"
    },
    {
        "template": "Nosotros ________(estar) emocionados por la competencia regional.",
        "answer": "estábamos"
    },
    {
        "template": "Ella ________(tener) miedo de hablar frente a tanta gente.",
        "answer": "tenía"
    },
    {
        "template": "Mis padres ________(sentirse) orgullosos cuando vieron mi premio.",
        "answer": "se sentían"
    },
    {
        "template": "Yo ________(estar) furioso porque nadie escuchaba mis ideas.",
        "answer": "estaba"
    },
    {
        "template": "Los niños ________(parecer) confundidos durante la explicación.",
        "answer": "parecían"
    },
    {
        "template": "Cuando mi padre vivía en Perú, ________(tener) dieciséis años.",
        "answer": "tenía"
    },
    {
        "template": "En esa foto, mi hermana ________(tener) apenas tres meses.",
        "answer": "tenía"
    },
    {
        "template": "Nosotros ________(ser) demasiado jóvenes para entender la situación.",
        "answer": "éramos"
    },
    {
        "template": "Cuando tú empezaste a tocar piano, ________(tener) siete años.",
        "answer": "tenías"
    },
    {
        "template": "Mis abuelos ________(ser) adolescentes cuando se conocieron.",
        "answer": "eran"
    },
    {
        "template": "Cuando terminó la película, ________(ser) casi las once.",
        "answer": "eran"
    },
    {
        "template": "________(ser) la una de la mañana cuando por fin llegamos al hotel.",
        "answer": "Era"
    },
    {
        "template": "Mientras caminábamos por el centro, ________(ser) las cinco y media.",
        "answer": "eran"
    },
    {
        "template": "Cuando empezó el incendio, ________(ser) mediodía.",
        "answer": "era"
    },
    {
        "template": "Ya ________(ser) muy tarde cuando nos dimos cuenta del error.",
        "answer": "era"
    },
    {
        "template": "Aquel día ________(ser) el quince de septiembre.",
        "answer": "era"
    },
    {
        "template": "El accidente ________(ocurrir) el trece de marzo.",
        "answer": "ocurrió"
    },
    {
        "template": "La conferencia ________(ser) el lunes pasado.",
        "answer": "fue"
    },
    {
        "template": "Cuando recibimos la carta, ________(ser) el primer día de vacaciones.",
        "answer": "era"
    },
    {
        "template": "La independencia de México ________(celebrarse) el dieciséis de septiembre.",
        "answer": "se celebra"
    },

    {
        "template": "Cada verano mi familia ________(alquilar) una cabaña cerca del lago.",
        "answer": "alquilaba"
    },
    {
        "template": "De niño, yo ________(coleccionar) piedras raras y monedas antiguas.",
        "answer": "coleccionaba"
    },
    {
        "template": "Todos los sábados nosotros ________(desayunar) en el mismo café.",
        "answer": "desayunábamos"
    },
    {
        "template": "Mi abuelo siempre ________(contar) historias exageradas sobre su juventud.",
        "answer": "contaba"
    },
    {
        "template": "A menudo ustedes ________(practicar) discursos antes de las presentaciones.",
        "answer": "practicaban"
    },
    {
        "template": "Cuando vivía en Madrid, yo ________(perderse) en el metro con frecuencia.",
        "answer": "me perdía"
    },
    {
        "template": "Antes, los estudiantes ________(memorizar) poemas para la clase de literatura.",
        "answer": "memorizaban"
    },
    {
        "template": "Cada noche el guardia ________(vigilar) la entrada del museo.",
        "answer": "vigilaba"
    },
    {
        "template": "Normalmente tú ________(entregar) los trabajos antes de la fecha límite.",
        "answer": "entregabas"
    },
    {
        "template": "Cuando éramos pequeños, nosotros ________(construir) fortalezas con cajas.",
        "answer": "construíamos"
    },

    {
        "template": "El detective ________(examinar) la habitación cuando encontró una nota secreta.",
        "answer": "examinaba"
    },
    {
        "template": "Yo ________(cruzar) la calle cuando escuché un grito.",
        "answer": "cruzaba"
    },
    {
        "template": "Los músicos ________(afinar) sus instrumentos cuando se fue la luz.",
        "answer": "afinaban"
    },
    {
        "template": "La científica ________(observar) las muestras cuando descubrió algo extraño.",
        "answer": "observaba"
    },
    {
        "template": "Nosotros ________(discutir) el plan cuando cambió la situación.",
        "answer": "discutíamos"
    },
    {
        "template": "El político ________(responder) a la pregunta cuando la audiencia lo interrumpió.",
        "answer": "respondía"
    },
    {
        "template": "Tú ________(buscar) tus llaves cuando sonó el teléfono.",
        "answer": "buscabas"
    },
    {
        "template": "Mis amigos ________(navegar) por internet cuando encontraron la noticia.",
        "answer": "navegaban"
    },
    {
        "template": "La enfermera ________(revisar) los documentos cuando llegó el doctor.",
        "answer": "revisaba"
    },
    {
        "template": "Yo ________(ensayar) mi papel cuando olvidé una línea importante.",
        "answer": "ensayaba"
    }
];
