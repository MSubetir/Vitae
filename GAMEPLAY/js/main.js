
let perguntas = {
	5001:{
		justify: "Afogado em dinheiro.",
		img: "doc/avatares/mortes/onda.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5002:{
		justify: "Ataque cardíaco.",
		img: "doc/avatares/mortes/cardiaco.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5003:{
		justify: "Doença Iatrogênica.",
		img: "doc/avatares/mortes/iatrogenia.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5004:{
		justify: "Assasinado.",
		img: "doc/avatares/mortes/assasinato.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},

	5005:{
		justify: "Faltou-lhe recursos.",
		img: "doc/avatares/mortes/pobre.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5006:{
		justify: "Insuficiência cardíaca.",
		img: "doc/avatares/mortes/insuficiencia.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5007:{
		justify: "Doença Imunológica.",
		img: "doc/avatares/mortes/imuno.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5008:{
		justify: "Isolamento social afetou as funções cognitivas.",
		img: "doc/avatares/mortes/depre.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5009:{
		justify: "Peste negra.",
		img: "doc/avatares/mortes/peste.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	
	5010:{
		justify: "Triunfo do mal",
		img: "doc/avatares/mortes/leandro.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
	},
	5011:{
		justify: "E N D",
		img: "doc/avatares/mortes/fim.png",
		alternatives: {
			a: {values: [0, 0, 0, 0]},
			b: {values: [0, 0, 0, 0]}
		},
    },



    4001:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Um principe é dotado de virtude. Aja como tal e o selo receberá",
		alternatives: {
			a: {
				answer: "Que virtude?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Certo", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 4101
	},
	4101:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "A coexistência de dois pólos é a chave..",
		alternatives: {
			a: {
				answer: "Que pólos?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Certo..", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 4002,
		next_b: 4002
    },
    4002:{
        person: "",
		img: "doc/avatares/portal.gif",
		choice: "A realidade a sua volta é alterada..",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			}
        },
    },
    4003:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Alteza!, estamos sob ataque. Bandidos estão atacando diversos feudos",
		alternatives: {
			a: {
				answer: "Intervir", 
				values: [0, 0, 0, -20], 
			},
			b: {
				answer: "Os camponeses sabem se cuidar", 
				values: [0, 0, 0, 20]
			}
        },
	},
	4004:{
        person: "camponês",
		img: "doc/avatares/orgulho_feudal.png",
		choice: "Meu lorde.. Minha casa e terras foram devastadas com as invasões",
		alternatives: {
			a: {
				answer: "Trabalhe e compre outras", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Indenizar pobretão", 
				values: [0, 0, 0, -20]
			}
        },
	},
	4005:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Alteza, animais selvagens foram avistados nas proximidades",
		alternatives: {
			a: {
				answer: "Mande as tropas", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Eu mesmo caçarei", 
				values: [0, 0, 0, 0]
			}
		},
		next_b: 4103
	},
	4103:{
		person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "A caçada foi um sucesso. O que devemos fazer com o alimento?",
		alternatives: {
			a: {
				answer: "Prepare um banquete para mim", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Distribua para a população", 
				values: [0, 0, 0, -20]
			}
		},
		next_a: 4006,
		next_b: 4006
	},
	4006:{
        person: "comerciante",
		img: "doc/avatares/trader.png",
		choice: "Senhor. A colheita foi um desastre e afetou o comércio do feudo.",
		alternatives: {
			a: {
				answer: "Esperemos pela próxima", 
				values: [0, 0, 0, -20], 
			},
			b: {
				answer: "Aumentar impostos", 
				values: [0, 0, 0, 20]
			}
		},
	},
	4007:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Alteza!. Inúmeros camponeses estão se reunindo em frente ao castelo",
		alternatives: {
			a: {
				answer: "Envie as tropas", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Atender reinvidicações", 
				values: [0, 0, 0, -20]
			}
		},
	},
	4008:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Parabéns. Priorizou a mútua presença do amor e temor em seu curto governo",
		alternatives: {
			a: {
				answer: "Obrigado..", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Achei fácil", 
				values: [0, 0, 0, 0]
			}
		}
	},
	4009:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Entretando agora que começa o desafio. A PESTE se aproxima, trazendo consigo a revolta..",
		alternatives: {
			a: {
				answer: "Que peste?", 
				values: [0, 0, 0, 0], 
				effect:{
					description: "Peste negra",
					img: "doc/efeitos/peste.png",
					values: [0, 0, 0, 0.04],
					days: "?"
				}
			},
			b: {
				answer: "Que revolta?", 
				values: [0, 0, 0, 0],
				effect:{
					description: "Peste negra",
					img: "doc/efeitos/peste.png",
					values: [0, 0, 0, 0.04],
					days: "?"
				}
			}
		}
	},
	4010:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Alteza!!. A situação alarmante requer aumento de impostos!",
		alternatives: {
			a: {
				answer: "Aumentar impostos", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Aumentar impostos", 
				values: [0, 0, 0, 20]
			}
		},
	},
	4011:{
        person: "henrico",
		img: "doc/avatares/orgulho_feudal.png",
		choice: "rei. Necessitamos de maiores parcelas da produção agrícola",
		alternatives: {
			a: {
				answer: "Guardas!", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Fiquem com o alimento", 
				values: [0, 0, 0, -20]
			}
		},
	},
	4012:{
        person: "henrico",
		img: "doc/avatares/fato.gif",
		choice: "A epidemia continua a matar milhares",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			}
		},
	},
	4013:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Existe certo risco, mas podemos tratar os pestilentos",
		alternatives: {
			a: {
				answer: "Trate", 
				values: [0, 0, 0, -20], 
			},
			b: {
				answer: "Não permito a entrada", 
				values: [0, 0, 0, 20]
			}
		},
	},
	4014:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Senhor!! Camponeses arombaram o armazem e estão roubando os estoques",
		alternatives: {
			a: {
				answer: "Enviar as tropas", 
				values: [0, 0, 0, 20], 
				effect:{
					cura: true
				}
			},
			b: {
				answer: "Distribua parte do estoque", 
				values: [0, 0, 0, -20],
				effect:{
					cura: true
				}
			}
		},
	},
	4015:{
        person: "henrico",
		img: "doc/avatares/ira_feudal.png",
		choice: "Alteza.. Seu poder se reduziu a nada. revoltosos dominaram a cidade.",
		alternatives: {
			a: {
				answer: "O que?", 
				values: [0, 0, 0, 0], 
				
			},
			b: {
				answer: "O que?", 
				values: [0, 0, 0, 0],
				
			}
		},
	},
	4016:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Desde o início seu reinado estava condenado..",
		alternatives: {
			a: {
				answer: "Fiz o meu melhor", 
				values: [0, 0, 0, 0],
			},
			b: {
				answer: "Foi inevitável", 
				values: [0, 0, 0, 0]
			}
		}
	},
	4017:{
        person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Contudo, seus atos foram dignos de um Príncipe. Você aceita o SELO DAS RELAÇÕES?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 0, 0, 0],
				effect:{
					seal: "sociologia"
				}
			},
			b: {
				answer: "Obrigado, mas Não me sinto digno", 
				values: [0, 0, 0, 0]
			}
		}
	},
	4018:{
        person: "",
		img: "doc/avatares/portal.gif",
		choice: "A realidade a sua volta volta ao normal..",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			}
        },
	},
	

	3001:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Maldito! Ousa me desafiar?",
		alternatives: {
			a: {
				answer: "Sim!", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Talvez na próxima", 
				values: [0, 0, 0, 0]
			}
		},
		next_b: 999
	},
	3002:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Então que o duelo se inicie!",
		alternatives: {
			a: {
				answer: "Duelo?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Estou pronto", 
				values: [0, 0, -25, 0]
			}
		},
		next_b: 3008
	},
	3003:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Ambos iremos duelar até a morte",
		alternatives: {
			a: {
				answer: "Morte??", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Beleza", 
				values: [0, 0, -25, 0]
			}
		},
		next_b: 3008
	},
	3004:{
        person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Até zerar seus pontos do coração..",
		alternatives: {
			a: {
				answer: "Entendo", 
				values: [0, 0, -25, 0], 
			},
			b: {
				answer: "Você por aqui?", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 3008
	},
	3005:{
        person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Como sempre.. Serei o juiz de batalha",
		alternatives: {
			a: {
				answer: "Pode começar juiz!", 
				values: [0, 0, -25, 0], 
			},
			b: {
				answer: "Quais são as regras?", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 3008
	},
	3006:{
        person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Ataques tem 20 pontos de dano. Descansar regenera 10. Caso contra-ataque, ambos perdem 15. Ademais, pode tentar defender..",
		alternatives: {
			a: {
				answer: "Pode começar juiz!", 
				values: [0, 0, -25, 0], 
			},
			b: {
				answer: "Tentar?", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 3008
	},
	3007:{
        person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Caso funcionem, você sofre apenas 25% do dano. Contudo, se falhar leva o dano total. São o divisor de águas...",
		alternatives: {
			a: {
				answer: "Só lhe resta começar a luta", 
				values: [0, 0, -49, 0], 
			},
			b: {
				answer: "Entendi as regras", 
				values: [0, 0, -49, 0]
			}
		},
	},
	3008:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Acabarei contigo, Maldito!",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				}
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
	},


	3009:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 5, 0], 
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3011,
		next_b: 3013
	},
	3010:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 20, 0], 
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3012,
		next_b: 3013
	},

	3011:{
        person: "",
		img: "doc/avatares/sucess.gif",
		choice: "Defesa Bem Sucedida",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3013,
		next_b: 3013,
	},
	3012:{
        person: "",
		img: "doc/avatares/fail.gif",
		choice: "Defesa Falhou",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3013,
		next_b: 3013,
	},


	3013:{
        person: "blaron",
		img: "doc/avatares/baron-defesa.png",
		choice: "Blaron descansa",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 3017,
		next_b: 3015
	},
	3014:{
        person: "blaron",
		img: "doc/avatares/baron-defesa.png",
		choice: "Blaron descansa",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0] 
			}
		},
		next_a: 3017,
		next_b: 3016
	},

	3015:{
        person: "",
		img: "doc/avatares/normal.gif",
		choice: "Blaron defende",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3017,
		next_b: 3017,
	},
	3016:{
        person: "",
		img: "doc/avatares/critical.gif",
		choice: "Dano crítico",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3017,
		next_b: 3017,
	},


	3017:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 5, 0]
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3019,
		next_b: 3021
	},
	3018:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 20, 0]
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3020,
		next_b: 3021
	},

	3019:{
        person: "",
		img: "doc/avatares/sucess.gif",
		choice: "Defesa Bem Sucedida",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3021,
		next_b: 3021,
	},
	3020:{
        person: "",
		img: "doc/avatares/fail.gif",
		choice: "Defesa Falhou",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3021,
		next_b: 3021,
	},


	3021:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 5, 0]
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3023,
		next_b: 3025
	},
	3022:{
        person: "blaron",
		img: "doc/avatares/baron-ataque.png",
		choice: "Blaron lhe ataca",
		alternatives: {
			a: {
				answer: "Defender", 
				values: [0, 0, 20, 0]
			},
			b: {
				answer: "Contra atacar", 
				values: [0, 0, 15, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3024,
		next_b: 3025
	},

	3023:{
        person: "",
		img: "doc/avatares/sucess.gif",
		choice: "Defesa Bem Sucedida",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3025,
		next_b: 3025,
	},
	3024:{
        person: "",
		img: "doc/avatares/fail.gif",
		choice: "Defesa Falhou",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3025,
		next_b: 3025,
	},


	3025:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Blaron recua",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 3029,
		next_b: 3027
	},
	3026:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Blaron recua",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0] 
			}
		},
		next_a: 3029,
		next_b: 3028
	},

	3027:{
        person: "",
		img: "doc/avatares/normal.gif",
		choice: "Blaron defende",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3029,
		next_b: 3029,
	},
	3028:{
        person: "",
		img: "doc/avatares/critical.gif",
		choice: "Dano crítico",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3029,
		next_b: 3029,
	},


	3029:{
        person: "blaron",
		img: "doc/avatares/baron-defesa.png",
		choice: "Blaron descansa",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 3009,
		next_b: 3031
	},
	3030:{
        person: "blaron",
		img: "doc/avatares/baron-defesa.png",
		choice: "Blaron descansa",
		alternatives: {
			a: {
				answer: "Descansar", 
				values: [0, 0, -10, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "Atacar", 
				values: [0, 0, 0, 0] 
			}
		},
		next_a: 3009,
		next_b: 3032
	},

	3031:{
        person: "",
		img: "doc/avatares/normal.gif",
		choice: "Blaron defende",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		},
		next_a: 3009,
		next_b: 3009,
	},
	3032:{
        person: "",
		img: "doc/avatares/critical.gif",
		choice: "Dano crítico",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
				effect:{
					random: true
				} 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				} 
			}
		},
		next_a: 3009,
		next_b: 3009,
	},


	3034:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Eu não deveria ter lhe subestimado..",
		alternatives: {
			a: {
				answer: "Achei fácil", 
				values: [0, 0, 0, 0]
			},
			b: {
				answer: "Foi um ótimo oponente..", 
				values: [0, 0, 0, 0]
			}
		},
	},
	3035:{
        person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Superaste-me como Guereiro. Aceitas o SELO DA VITALIDADE?",
		alternatives: {
			a: {
				answer: "Aceito", 
				values: [0, 0, 0, 0],
				effect:{
					seal: "edf"
				}
			},
			b: {
				answer: "Negativo", 
				values: [0, 0, 0, 0]
			}
		},
	},


	2001:{
        person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Ok. Seu corpo necessita de energia para manter-se ativo..!",
		alternatives: {
			a: {
				answer: "De onde vem essa energia?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0]
			}
		},
	},
    2002:{
        person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Essa energia vem dos alimentos, os quais agem como combustível",
		alternatives: {
			a: {
				answer: "Devo comer muito para ter muita energia?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Igual um carro? -.-", 
				values: [0, 0, 0, 0]
			}
		},
    },
    2003:{
        person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Um bom balanço energético vem do equilíbrio entre a ingestão alimentar e o gasto energético",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0]
			}
		},
	},
	2004:{
        person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Tens um desafio. A cada 4 períodos deve realizar uma corida para gastar energia. A quilometragem é aleatória",
		alternatives: {
			a: {
				answer: "Cuidando da alimentação e energia..?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Desafio aceito!", 
				values: [0, 0, 0, 0]
			}
		},
		next_b: 2006
	},
	2005:{
        person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Durante os períodos escolha os alimentos de maneira saudável e moderada, caso contrário, perdera desempenho",
		alternatives: {
			a: {
				answer: "Ok", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Ok", 
				values: [0, 0, 0, 0]
			}
        },
	},

	2006:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Panetone ou Baguete",
		alternatives: {
			a: {
				answer: "Panetone", 
				values: [0, -14, 0, 0], 
				effect:{
					bad: true
				}
			},
			b: {
				answer: "Baguete", 
				values: [0, -4, 0, 0]
			}
        },
	},
	2007:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Macarrão cozido ou Macarrão com molho de tomate e queijo",
		alternatives: {
			a: {
				answer: "Macarrão cozido", 
				values: [0, -15, 0, 0], 
			},
			b: {
				answer: "Macarrão com molho de tomate e queijo", 
				values: [0, -10, 0, 0],
				
			}
        },
	},
	2008:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Melancia ou Banana",
		alternatives: {
			a: {
				answer: "Melancia", 
				values: [0, -2, 0, 0], 
				
			},
			b: {
				answer: "Banana", 
				values: [0, -10, 0, 0],
				effect:{
					bad: true
				}
			}
        },
	},
	2009:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Estrogonofe ou Feijoada",
		alternatives: {
			a: {
				answer: "Estrogonofe", 
				values: [0, -15, 0, 0], 
				effect:{
					bad: true
				}
			},
			
			b: {
				answer: "Feijoada", 
				values: [0, -13, 0, 0],
			}
        },
	},

	2010:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Picanha ou maminha",
		alternatives: {
			a: {
				answer: "Picanha", 
				values: [0, -14, 0, 0], 
				effect:{
					bad: true
				}
			},
			b: {
				answer: "Maminha", 
				values: [0, -7, 0, 0]
			}
        },
	},
	2011:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Mortadela de frango ou normal",
		alternatives: {
			a: {
				answer: "Mortadela de frango", 
				values: [0, -4, 0, 0], 
			},
			b: {
				answer: "Mortadela normal", 
				values: [0, -8, 0, 0],
				effect:{
					bad: true
				}
				
			}
        },
	},
	2012:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Bolacha de chocolate ou de morango",
		alternatives: {
			a: {
				answer: "Bolacha de chocolate", 
				values: [0, -7, 0, 0], 
				effect:{
					bad: true
				}
			},
			b: {
				answer: "Bolacha de morango", 
				values: [0, -7, 0, 0],
				effect:{
					bad: true
				}
			}
        },
	},
	2013:{
		person: "clistal",
		img: "doc/avatares/comerciante.png",
		choice: "Halls diet ou Halls normal",
		alternatives: {
			a: {
				answer: "Halls diet", 
				values: [0, -8, 0, 0], 
			},
			b: {
				answer: "Halls", 
				values: [0, -16, 0, 0],
				effect:{
					bad: true
				}
			}
		},
		
	},
	
	2014:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Pé-de-moleque ou Paçoca",
		alternatives: {
			a: {
				answer: "Pé-de-moleque", 
				values: [0, -5, 0, 0], 
			},
			b: {
				answer: "Paçoca", 
				values: [0, -10, 0, 0],
				effect:{
					bad: true
				}
			}
        },
	},
	2015:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Leite de búfalo ou integral",
		alternatives: {
			a: {
				answer: "Leite de búfalo", 
				values: [0, -25, 0, 0], 
				effect:{
					bad: true
				}
			},
			b: {
				answer: "Leite integral", 
				values: [0, -15, 0, 0],
			}
        },
	},
	2016:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Ovo cozido ou Ovo frito",
		alternatives: {
			a: {
				answer: "Ovo cozido", 
				values: [0, -7, 0, 0], 
			},
			b: {
				answer: "Ovo frito", 
				values: [0, -11, 0, 0],
				effect:{
					bad: true
				}
			}
        },
	},
	2017:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Batata doce assada ou frita",
		alternatives: {
			a: {
				answer: "Batata-doce assada", 
				values: [0, -14, 0, 0], 
			},
			b: {
				answer: "Batata-doce frita", 
				values: [0, -38, 0, 0],
				effect:{
					bad: true
				}
			}
		},
	},
	

	2019:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Parabéns. Ótimos fenótipos. Com a rotina certa eles podem se desenvolver muito mais...",
		alternatives: {
			a: {
				answer: "Obrigado ^-^", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Me tornarei o mais rápido", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 2020
		
	},
	2020:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Claro que vai, ksskskksksksksks :3",
		alternatives: {
			a: {
				answer: "-.-", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "@_@", 
				values: [0, 0, 0, 0],
			}
		},
		
	},
	2021:{
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Lhe ofereço o SELO DA ENERGIA. Aceitas?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 0, 0, 0], 
				effect:{
					seal: "biologia"
				},
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 0],
			}
		},
		
	},


	2101:{
		person: "distância",
		img: "doc/avatares/run.gif",
		choice: "5KM",
		alternatives: {
			a: {
				answer: "|Correr|", 
				values: [0, 20, 0, 0], 
			},
			b: {
				answer: "|Correr|", 
				values: [0, 20, 0, 0],
			}
		},
		next_a: 2006,
		next_b: 2006
	},
	2102:{
		person: "distância",
		img: "doc/avatares/run.gif",
		choice: "10KM",
		alternatives: {
			a: {
				answer: "|Correr|", 
				values: [0, 30, 0, 0], 
			},
			b: {
				answer: "|Correr|", 
				values: [0, 30, 0, 0],
			},
		},
		next_a: 2006,
		next_b: 2006
	},
	2103:{
		person: "distância",
		img: "doc/avatares/run.gif",
		choice: "15KM",
		alternatives: {
			a: {
				answer: "|Correr|", 
				values: [0, 50, 0, 0], 
			},
			b: {
				answer: "|Correr|", 
				values: [0, 50, 0, 0],
			}
		},
		next_a: 2006,
		next_b: 2006
	},


	1001:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Então primeiramente me cumprimente",
		alternatives: {
			a: {
				answer: "Fazer continência", 
				values: [0, 0, 0, 0]
			},
			b: {
				answer: "Aperto de mão", 
				values: [0, 0, 0, 0]
			}
		}
	},
	1002:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Antes de iniciarmos.. Você acredita no sucesso de investimentos?",
		alternatives: {
			a: {
				answer: "Depende do contexto", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			},
			b: {
				answer: "Acredito 100%", 
				values: [0, 0, 0, 0],
				effect:{
					random: true
				}
			}
		}
	},
	1003:{
        person: "trader",
		img: "doc/avatares/trader.png",
		choice: "Ei amigoo! O que acha de investir na minha empresa de balas de goma. Garanto o sucesso..",
		alternatives: {
			a: {
				answer: "Irei lhe apoiar", 
				values: [0, 0, 0, 0],
				effect:{
					description: "Falência",
					img: "doc/efeitos/falencia.png",
					values: [0.1, 0, 0, 0],
					days: "∞"
				}
			},
			b: {
				answer: "Dessa vez não", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 1101,
		next_b: 1005
	},
	1004:{
        person: "trader",
		img: "doc/avatares/trader.png",
		choice: "Ei amigoo! O que acha de investir na minha empresa de balas de goma. Garanto o sucesso..",
		alternatives: {
			a: {
				answer: "Irei lhe apoiar", 
				values: [0, 0, 0, 0],
				effect:{
					description: "Sucesso imparável",
					img: "doc/efeitos/sucesso.png",
					values: [-0.1, 0, 0, 0],
					days: "∞"
				}
			},
			b: {
				answer: "Dessa vez não", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 1101
	},
	1101:{
        person: "trader",
		img: "doc/avatares/trader.png",
		choice: "Deseja cancelar nosso contrato?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, 0, 0, 0]
			},
			b: {
				answer: "Sim", 
				values: [0, 0, 0, 0],
				effect:{
					cura:true
				}
			}
		},
		next_a: 1005,
		next_b: 1005
	},
	1005:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Agora iremos iniciar o desafio",
		alternatives: {
			a: {
				answer: "Pode iniciar", 
				values: [0, 0, 0, 0],
			},
			b: {
				answer: "Como ele funciona?", 
				values: [0, 0, 0, 0]
			}
		},
		next_b: 1103
	},
	1103:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Será proposto uma série de questões. Cada acerto lhe assegura 20% de pontos, contudo, cada ero lhe tira 20%",
		alternatives: {
			a: {
				answer: "Certo", 
				values: [0, 0, 0, 0]
			},
			b: {
				answer: "Mais alguma regra?", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 1006,
	},
	1104:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Você tem 20 segundos para responder cada questão",
		alternatives: {
			a: {
				answer: "Vamos lá", 
				values: [0, 0, 0, 0]
			},
			b: {
				answer: "Vamos lá", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 1006,
		next_b: 1006,
	},
	1006:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Dois pais e dois filhos tomaram café da manhã. Cada um comeu dois ovos. Quantos ovos foram consumidos?",
		alternatives: {
			a: {
				answer: "8", 
				values: [20, 0, 0, 0],
			},
			b: {
				answer: "6", 
				values: [-20, 0, 0, 0]
			}
		},
	},
	1007:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "3 Gatos matam 3 ratos em 3 minutos. Quanto tempo é necessário para que 100 Gatos matem 100 ratos?",
		alternatives: {
			a: {
				answer: "100", 
				values: [20, 0, 0, 0],
			},
			b: {
				answer: "3", 
				values: [-20, 0, 0, 0]
			}
		},
	},
	1008:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Uma Garafa com rolha custa r$1,10. A Garafa custa $1,00 a mais que a rolha. Quanto custa a rolha?",
		alternatives: {
			a: {
				answer: "r$0,05", 
				values: [-20, 0, 0, 0],
			},
			b: {
				answer: "r$0,10", 
				values: [20, 0, 0, 0]
			}
		},
	},
	1009:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Uma Mãe divide $30,00 entre 2 Filhas. Que horas são? kk",
		alternatives: {
			a: {
				answer: "15:30", 
				values: [20, 0, 0, 0],
			},
			b: {
				answer: "13:45", 
				values: [-20, 0, 0, 0]
			}
		},
	},
	1010:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Em um avião há 4 romanos e 1 Inglês. Qual o nome da aeromoça?",
		alternatives: {
			a: {
				answer: "Ivone", 
				values: [-20, 0, 0, 0],
			},
			b: {
				answer: "Judite", 
				values: [20, 0, 0, 0]
			}
		},
	},
	1011:{
        person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Parabéns, Seu raciocínio é capaz e digno. Deseja o SELO DO CAPITAL",
		alternatives: {
			a: {
				answer: "Sim!", 
				values: [0, 0, 0, 0],
				effect:{
					seal: "matematica"
				}
			},
			b: {
				answer: "Me sinto honrado, mas Não..", 
				values: [0, 0, 0, 0]
			}
		},
	},

	
	1: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "És novo aqui?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, 0, 0, 0],
			},
			b: {
				answer: "Sim", 
				values: [0, 0, 0, 0],
				
			}
        },
        next_b: 101,
    },
    101: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Então você é o louco…, Quer dizer, herói, que resolveu enfrentar essa sociedade instável?",
		alternatives: {
			a: {
				answer: "Não..", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Sim?", 
				values: [0, 0, 0, 0],
			}
		}
    },
    102: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Agora é sua responsabilidade recuperar o equilíbrio perdido. Boa sorte..",
		alternatives: {
			a: {
				answer: "O quê?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Obrigado", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 199,
		next_b: 199
	},
	199: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Álias, como devo te chamar?",
		alternatives: {
			a: {
				answer: "Escolher nome", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Escolher nome", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 2,
		next_b: 2
    },
    2: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Mantenha os 4 pilares em equilíbrio para não cair em desgraça",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0]
			}
		}
	},
	
	96: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Você está pronto pra começar?",
		alternatives: {
			a: {
				answer: "De novo não..", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Você de novo?", 
				values: [0, 0, 0, 0]
			}
		}
	},
	97: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Parece que você precisará morrer inúmeras vezes",
		alternatives: {
			a: {
				answer: "Ajude-me", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não quero morrer", 
				values: [0, 0, 0, 0]
			}
		}
	},
	98: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Para acabar com esse loop você deve encontrar os 4 selos..",
		alternatives: {
			a: {
				answer: "Que selos?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Onde?", 
				values: [0, 0, 0, 0]
			}
		}
	},
	99: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Econômia, Energia, Vitalidade, Relações. Me entregue todos e estará livre..",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 0]
			}
		}
	},

    3: {
		person: "despertador",
		img: "doc/avatares/despertador.png",
		choice: "BIIP, BIIP. Atrasado para o colégio",
		alternatives: {
			a: {
				answer: "Cozinhar em casa", 
				values: [0, -15, -25, 0], 
			},
			b: {
				answer: "Comprar comida no colégio", 
				values: [20, -15, 10, 0],
			}
        },
        next_a: 104,
    },
    104:{
        person: "professor",
		img: "doc/avatares/professor.png",
		choice: "Seu elemento. Faltastes na minha aula `-´",
		alternatives: {
			a: {
				answer: "Mas..", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "Perdão..", 
				values: [0, 0, 0, 20]
			}
        }
    },

    4: {
		person: "henrique",
		img: "doc/avatares/ira.png",
		choice: "Deveríamos tirar uma onda com o professor! Ele está passando muito conteúdo",
		alternatives: {
			a: {
				answer: "Deixa comigo", 
				values: [0, 20, 0, -25], 
			},
			b: {
				answer: "Acho melhor não", 
				values: [0, 0, 0, 25]
			}
		},
    },

    5: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Ei amigo!! Quer melhorar seu dia? Se sentir enérgico? Compre meus doces!",
		alternatives: {
			a: {
				answer: "Dessa vez não", 
				values: [0, 0, 0, 25], 
			},
			b: {
				answer: "Sim! Aceito as balas de goma", 
				values: [20, -25, 0, 0],
			}
        },
        next_a: 106,
        next_b: 108
    },
    106:{
        person: "",
		img: "doc/avatares/fato.gif",
		choice: "Os vendedores passam a ficar desmotivados",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			},
        }
    },
    108:{
        person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "OPA, Me dá um pedaço!?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, -10, 0, 0], 
			},
			b: {
				answer: "Só um pedacinho", 
				values: [0, 0, 0, 0]
			}
		},
		next_a: 999
    },
    109:{
        person: "",
		img: "doc/avatares/fato.gif",
		choice: "Seu alimento é completamente consumido",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			}
        }
    },

    6: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "O almoço estava uma delícia, entretanto, extremamente gorduroso",
		alternatives: {
			a: {
				answer: "Ir almoçar", 
				values: [0, -30, 30, 0], 
			},
			b: {
				answer: "Gorduroso?", 
				values: [0, 0, 0, 0]
			}
        },
        next_b: 111
    },
    111:{
        person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "Isso. Ultrapassou a recomendação diária de 2 colheres de óleo",
		alternatives: {
			a: {
				answer: "Ir almoçar", 
				values: [0, -30, 30, 0], 
			},
			b: {
				answer: "Desistir", 
				values: [0, 0, 0, 0]
			},
		},
		next_b: 999
	},
	112:{
        person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "OPA! Quer me dar um pouco do seu almoço?",
		alternatives: {
			a: {
				answer: "Pode pegar", 
				values: [0, 15, -15, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, -10, 10, 0]
			}
        }
	},
	
	7: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Ahh, que preguiça de ir pra aula",
		alternatives: {
			a: {
				answer: "Incentivar", 
				values: [0, 10, 0, -25], 
			},
			b: {
				answer: "Seguir sozinho", 
				values: [0, 0, 0, 0]
			}
        },
        next_a: 114
	},
	114:{
        person: "professor",
		img: "doc/avatares/professor.png",
		choice: "Atrasado! `-´",
		alternatives: {
			a: {
				answer: "Eu estava ajudando..", 
				values: [0, 0, 0, 20], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 20]
			}
        }
	},

	8: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "Topa ir jogar um fut (futebol)?",
		alternatives: {
			a: {
				answer: "Sempre", 
				values: [0, 0, 0, -25], 
			},
			b: {
				answer: "Deixa pra depois", 
				values: [0, 0, 0, 25]
			}
		},
		next_a: 116
	},
	116: {
		person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Te entrego depois que fizer 50 polichinelos",
		alternatives: {
			a: {
				answer: "Ok", 
				values: [0, 20, -5, -0],
				effect:{
					description: "Dor no corpo",
					img: "doc/efeitos/dor.png",
					values: [0, 0.03, 0.02, 0],
					days: "2"
				}
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 20]
			}
		},
		next_b: 999
	},
	117: {
		person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "O maldito! Não perca ela",
		alternatives: {
			a: {
				answer: "Beleza!", 
				values: [0, 30, -15, -10], 
			},
			b: {
				answer: "...", 
				values: [0, 30, -15, 0]
			}
		},
	},
	118: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Vocês partem para o jogo",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0]
			}
		},
	},

	9: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Ajude-me a acabar com o comércio de doces",
		alternatives: {
			a: {
				answer: "Ajudo", 
				values: [20, 0, 0, -25], 
			},
			b: {
				answer: "Nunca", 
				values: [0, 0, 0, 25]
			}
		},
	},

	10: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "My friend! Aceita um balinha, uma tortuguita?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, 0, 0, 25], 
			},
			b: {
				answer: "Claro", 
				values: [20, -25, 0, 0],
			}
        },
	},

	11: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Você encontra $10 no chão",
		alternatives: {
			a: {
				answer: ":)", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: ":)", 
				values: [0, 0, 0, 0],
			}
        },
		next_a: 119,
		next_b: 119
	},
	119: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "Bah, vi esse dinheiro antes",
		alternatives: {
			a: {
				answer: "Pode pegar", 
				values: [25, 0, 0, -30], 
			},
			b: {
				answer: "É meu", 
				values: [-25, 0, 0, 30],
			}
        },
		next_a: 999,
	},
	120: {
		person: "henrique",
		img: "doc/avatares/ira.png",
		choice: "Na verdade eu derrubei ele ali!",
		alternatives: {
			a: {
				answer: "Pode pegar", 
				values: [25, 0, 0, -25], 
			},
			b: {
				answer: "É meu!", 
				values: [25, 10, 25, 0],
			}
        },
		next_a: 999,
	},
	121: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Você é agredido e seu dinheiro é levado",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
				effect:{
					description: "Dor no corpo",
					img: "doc/efeitos/dor.png",
					values: [0, 0.03, 0.02, 0],
					days: "2"
				}
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
				effect:{
					description: "Dor no corpo",
					img: "doc/efeitos/dor.png",
					values: [0, 0.03, 0.02, 0],
					days: "2"
				}
			}
        },
		next_a: 999,
	},

	

	12: {
		person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "Minhas mãos encondem algo. Escolha uma",
		alternatives: {
			a: {
				answer: "Esquerda", 
				values: [0, -25, 0, 0], 
			},
			b: {
				answer: "Direita", 
				values: [0, -25, 0, 0],
			}
		},
		next_a: 123,
		next_b: 123,
	},

	//------------------------------------------------------------------------------------
	
	123: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Ambas continham comida para os dois",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},

	13: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "Sabia que o blaron era lutador?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Sim", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 125,
	},
	125: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "Foi um grande campeão, contudo, perdeu pelos métodos agressivos dos adversários",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
			}
		},
	},
	126: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "E os adversário estavam bem preparados, beirando 75 pontos de saúde..",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
			}
		},
	},

	14: {
		person: "blaron",
		img: "doc/avatares/baron.png",
		choice: "Fala ae Frango!",
		alternatives: {
			a: {
				answer: "Desafiar", 
				values: [-10, -10, -10, -10], 
			},
			b: {
				answer: "Ignorar", 
				values: [10, 10, 10, 10],
			}
		},
		next_a: 3001,
	},

	15: {
		person: "luxuria",
		img: "doc/avatares/luxuria.png",
		choice: "Bora pedir um negócinho no Uber eats",
		alternatives: {
			a: {
				answer: "Bora", 
				values: [30, -25, 5, -25], 
			},
			b: {
				answer: "Não", 
				values: [0, 15, 0, 25],
			}
		},
	},

	16: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "Me empresta $1?",
		alternatives: {
			a: {
				answer: "Empresto", 
				values: [25, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 25],
			},
		},
		next_b:129
	},
	129: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "Então 50 centavos",
		alternatives: {
			a: {
				answer: "Empresto", 
				values: [20, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 25],
			},
		},
		next_a: 999
	},
	130: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "25 centavos?",
		alternatives: {
			a: {
				answer: "Empresto", 
				values: [15, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 25],
			},
		},
		next_a: 999
	},
	131: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "O comércio regional reduz suas vendas",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},

	17: {
		person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "Você deveria ter uma alimentação seletiva",
		alternatives: {
			a: {
				answer: "Como?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não preciso", 
				values: [10, 10, 10, 10],
			},
		},
		next_a:133
	},
	133: {
		person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "Desafie a Clistal. Lembre-se de sempre buscar picos de energia..",
		alternatives: {
			a: {
				answer: "O que?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Onde?", 
				values: [0, 0, 0, 0],
			},
		},
	},

	18: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Como estás amigo? Quieres un docito!?",
		alternatives: {
			a: {
				answer: "Quero uma balita de gomita", 
				values: [20, -25, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 25],
			}
        },
	},
	
	19: {
		person: "henrique",
		img: "doc/avatares/ira.png",
		choice: "As outras turmas estão zoando nossos colegas. Devemos nos impor!",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 15, 10, -25], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 35],
				effect:{
					description: "Carma",
					img: "doc/efeitos/carma.png",
					values: [0, 0, 0, 0.02],
					days: "4"
				}
			},
		},
	},

	20: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Aparentemente nossos colegas estão colando durante as provas",
		alternatives: {
			a: {
				answer: "Contemos para o professor", 
				values: [0, 15, 0, -25], 
			},
			b: {
				answer: "Não é problemas meu", 
				values: [-15, 0, 0, 20],
			},
		},
	},

	21: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "Plantas são o reflexo da saúde. Nos ajude no desenvolvimento de áreas verdes",
		alternatives: {
			a: {
				answer: "Claro", 
				values: [25, 0, -10, -25],
				effect:{
					description: "Ambiente agradável",
					img: "doc/efeitos/ambiente.png",
					values: [0, 0, -0.01, 0],
					days: "5"
				} 
			},
			b: {
				answer: "Não ajudarei", 
				values: [0, 0, 15, 25],
			},
		},
	},

	22: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "Nossa turma está desanimada. Deviamos organizar um hamburgão (banquete de hamburgueres)",
		alternatives: {
			a: {
				answer: "Fornecer apoio", 
				values: [25, -15, 10, -35], 
			},
			b: {
				answer: "Dessa vez não", 
				values: [0, 10, 0, 30],
			},
		},
	},

	23: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "A turma vizinha possui notas superiores as nossas, pois investem em cola durante as provas",
		alternatives: {
			a: {
				answer: "Colaremos também", 
				values: [15, -15, 0, 25], 
			},
			b: {
				answer: "Que prática desumana!", 
				values: [0, 15, 0, -25],
			},
		},
	},

	24: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Gostaria de expandir minha variedade de produtos",
		alternatives: {
			a: {
				answer: "Ajudar investimento", 
				values: [25, -10, 0, -25], 
			},
			b: {
				answer: "Me contento com as balinhas", 
				values: [-10, 0, 0, 25],
			},
		},
	},

	25: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "Precisamos nos preparar para a olincac. Especialmente nas corridas..",
		alternatives: {
			a: {
				answer: "Treinar corrida", 
				values: [0, 30, -15, -25], 
			},
			b: {
				answer: "Estamos bem preparados", 
				values: [0, 10, 10, 35],
			},
		},
		next_b: 135
	},
	135: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Sua equipe fica em segundo lugar nas corridas, desanimando a todos",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			},
		},
	},

	26: {
		person: "laura",
		img: "doc/avatares/inveja.png",
		choice: "A tia da cantina está usando muitos conservantes. Isso é loucara",
		alternatives: {
			a: {
				answer: "Falaremos com ela", 
				values: [0, 0, 0, -25], 
			},
			b: {
				answer: "Ela sabe oque faz", 
				values: [0, 0, 25, 25],
			},
		},
		next_a: 137
	},
	137: {
		person: "tia da cantina",
		img: "doc/avatares/tia-cantina.png",
		choice: "Se não usar a comida apodrece. Exitem métodos melhores, porém mais caros",
		alternatives: {
			a: {
				answer: "Pagar métodos", 
				values: [35, 0, -20, -20], 
			},
			b: {
				answer: "Permitir antigos conservantes", 
				values: [0, 0, 25, 25],
				effect:{
					description: "Intoxicação alimentar",
					img: "doc/efeitos/comida-podre.png",
					values: [0, 0, 0, 0.02],
					days: "4"
				}
			},
		},
	},

	27: {
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Um experimento falho no setor liberou mosquitos geneticamente modificados",
		alternatives: {
			a: {
				answer: "Não me importo", 
				values: [0, 0, 0, 25], 
			},
			b: {
				answer: "São perigosos?", 
				values: [0, 0, 0, 0],
			},
		},
		next_b: 139
	},
	139: {
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Se ocorrer a proliferação será um grande problema. Quem deve cuida disso?",
		alternatives: {
			a: {
				answer: "O controle ambiental", 
				values: [15, 15, 0, -20], 
			},
			b: {
				answer: "A informática", 
				values: [30, 0, 0, -20],
			},
		},
	},

	28: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "As outras turmas estão treinando futubol. Devemos ficar melhores",
		alternatives: {
			a: {
				answer: "Pegue a bola de futebol", 
				values: [0, 25, -10, -25], 
			},
			b: {
				answer: "Não há motivo para pânico", 
				values: [0, 10, 10, 35],
			},
		},
		next_b: 141
	},
	141: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Sua equipe fica em último lugar nos jogos de futebol",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			},
		},
	},

	29: {
		person: "professor",
		img: "doc/avatares/professor.png",
		choice: "Parece que um rato perambula pela sua sala. Tenho medo dele",
		alternatives: {
			a: {
				answer: "Deixar o rato ficar", 
				values: [0, 0, 25, 25], 
			},
			b: {
				answer: "Não há motivo para pânico", 
				values: [0, 25, -10, -25],
			},
		},
	},

	30: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Dia ruim? Falta de energia? Compre meus doces!",
		alternatives: {
			a: {
				answer: "Quero uma tortuguita", 
				values: [20, -30, 5, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, -5, 25],
			}
        },
	},

	31: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "Deveriamos enfeitar nossa sala para o natal",
		alternatives: {
			a: {
				answer: "Ajudar na decoração", 
				values: [25, 15, 0, -25], 
			},
			b: {
				answer: "Ajudar na próxima data", 
				values: [0, 0, 0, 0],
			}
		},
		next_b: 143
	},
	143: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "Páscoa?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [25, 15, 0, -25], 
			},
			b: {
				answer: "Outra", 
				values: [0, 0, 0, 0],
			}
		},
		next_a: 999
	},
	144: {
		person: "gabriel r.",
		img: "doc/avatares/luxuria.png",
		choice: "Festa junina?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [25, 15, 0, -25], 
			},
			b: {
				answer: "Não ajudarei", 
				values: [0, -5, 0, 25],
			}
        },
	},

	32: {
		person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "Eu gostaria de comprar produtos saudáveis",
		alternatives: {
			a: {
				answer: "Ajudar no pagamento", 
				values: [25, 0, -10, -25], 
			},
			b: {
				answer: "Não é necessária pagar caro", 
				values: [0, 0, 0, 0],
			}
		},
		next_b: 146
	},
	146: {
		person: "joão paulo",
		img: "doc/avatares/gula.png",
		choice: "Como?",
		alternatives: {
			a: {
				answer: "Ensinar a cozinhar", 
				values: [0, 25, -10, -25], 
			},
			b: {
				answer: "Recomendar lojas", 
				values: [15, 0, -10, -20],
			}
		},
	},

	33: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Te pago pra fazer meu projeto integrador",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [-45, 30, 0, -30], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, -15, 25],
			}
		},
	},

	34: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Ahh, Esqueci minhas coisas na sala",
		alternatives: {
			a: {
				answer: "Pegar as coisas", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Ignorar situação", 
				values: [0, 0, 0, 20],
			}
		},
		next_a: 148
	},
	148: {
		person: "cão",
		img: "doc/avatares/cachorro.png",
		choice: "Au au",
		alternatives: {
			a: {
				answer: "Passar a mão", 
				values: [0, 0, 100, 0], 
			},
			b: {
				answer: "Ignorar animal", 
				values: [0, 0, 0, 0],
			}
		},
	},

	35: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "A chuva de ontem a noite danificou os aparelhos. Deveríamos concertar",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [10, 20, 0, -20], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 10, 25],
			}
		},
	},

	36: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Deveriamos tornar nossa sala mais confortável",
		alternatives: {
			a: {
				answer: "Como?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [-20, 0, 10, 25],
			}
		},
		next_a: 150
	},
	150: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Podesmos estofar as cadeiras ou arrumar o ar condicionado",
		alternatives: {
			a: {
				answer: "Estofar cadeiras", 
				values: [25, 10, -25, 0], 
			},
			b: {
				answer: "Arrumar ar", 
				values: [35, 10, -10, 0],
			}
		},
	},
	
	37: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Promoção! Promoção! Uma tortuguita $5, duas por $10 reais. Promoção!",
		alternatives: {
			a: {
				answer: "Comprar uma", 
				values: [20, -30, 5, 0], 
			},
			b: {
				answer: "Comprar duas", 
				values: [40, -60, 10, 0],
			}
        },
	},
	
	38: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Estou revoltada. Roubaram meu armário",
		alternatives: {
			a: {
				answer: "Chamar cgae (assitência)", 
				values: [15, 0, 0, 20], 
			},
			b: {
				answer: "Buscar bandido", 
				values: [0, 25, 0, -20],
			}
		},
	},

	39: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Quer aprender a equilibrar seus gastos?",
		alternatives: {
			a: {
				answer: "Me ensine", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [10, 10, 10, 10],
			},
		},
		next_a: 152
	},
	152: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Não sou capaz. Contudo, busque pelo Ablel...",
		alternatives: {
			a: {
				answer: "Onde?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Ok", 
				values: [0, 0, 0, 0],
			}
		},
	},

	40: {
		person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Ei, as bala que aquele moleque vende são boas mesmo?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [-10, 0, 0, -20], 
			},
			b: {
				answer: "ablel! Eu te desafio", 
				values: [-10, -10, -10, -10],
			}
		},
		next_b: 1001
	},

	41: {
		person: "clistal",
		img: "doc/avatares/cristal.png",
		choice: "Preciso carregar algumas caixas. Quer me ajudar com seus fenótipos mais novos?",
		alternatives: {
			a: {
				answer: "Claro", 
				values: [0, 20, -5, -30], 
			},
			b: {
				answer: "Só depois de um desafio", 
				values: [-10, -10, -10, -10],
			}
		},
		next_b: 2001
	},

	42: {
		person: "ablel",
		img: "doc/avatares/abel.png",
		choice: "Eu deveria ensinar matemática financeira aos alunos",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [-25, 25, 0, -10], 
			},
			b: {
				answer: "Não", 
				values: [25, 0, 0, 20],
			}
		},
	},

	43: {
		person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Estou iniciando um empresa que vende vinhos do porto",
		alternatives: {
			a: {
				answer: "Investir", 
				values: [25, 0, 0, -10], 
			},
			b: {
				answer: "Tende ao fracasso!", 
				values: [-5, -10, 0, 25],
			}
		},
	},

	44: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Você sabia que pode mudar a playlist no menu de opções?",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não", 
				values: [0, 0, 0, 0],
			}
		},
	},

	45: {
		person: "fablio days",
		img: "doc/avatares/fabio.png",
		choice: "Prefere os ideais de Rousseau ou de Maquiavel?",
		alternatives: {
			a: {
				answer: "Rousseau", 
				values: [0, 0, -10, 0], 
			},
			b: {
				answer: "Prefiro te desafiar", 
				values: [-10, -10, -10, -10],
			}
		},
		next_b: 4001
	},

	46: {
		person: "henrique",
		img: "doc/avatares/ira.png",
		choice: "Deveríamos tirar uma onda com o professor! Ele está passando muito conteúdo",
		alternatives: {
			a: {
				answer: "Deixa comigo", 
				values: [0, 20, 0, -25], 
			},
			b: {
				answer: "Acho melhor não", 
				values: [0, 0, 0, 25]
			}
		},
    },

    47: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "Ei amigo!! Quer melhorar seu dia? Se sentir enérgico? Compre meus doces!",
		alternatives: {
			a: {
				answer: "Dessa vez não", 
				values: [0, 0, 0, 25], 
			},
			b: {
				answer: "Sim! Aceito as balas de goma", 
				values: [20, -25, 0, 0],
			}
        },
        next_a: 106,
        next_b: 108
    },

	48: {
		person: "renata",
		img: "doc/avatares/preguica.png",
		choice: "Ahh, que preguiça de ir pra aula",
		alternatives: {
			a: {
				answer: "Incentivar", 
				values: [0, 10, 0, -25], 
			},
			b: {
				answer: "Seguir sozinho", 
				values: [0, 0, 0, 0]
			}
        },
        next_a: 114
	},

	49: {
		person: "vinicius",
		img: "doc/avatares/orgulho.png",
		choice: "Topa ir jogar um fut?",
		alternatives: {
			a: {
				answer: "Bora", 
				values: [0, 0, 0, -25], 
			},
			b: {
				answer: "Deixa pra depois", 
				values: [0, 0, 0, 25]
			}
		},
		next_a: 116
	},

	9: {
		person: "alice",
		img: "doc/avatares/avareza.png",
		choice: "Ajude-me!!! a acabar com o comércio de doces",
		alternatives: {
			a: {
				answer: "Ajudo", 
				values: [20, 0, 0, -25], 
			},
			b: {
				answer: "Nunca", 
				values: [0, 0, 0, 25]
			}
		},
	},

	50: {
		person: "comerciante",
		img: "doc/avatares/comerciante.png",
		choice: "My friend! Aceita um balinha, uma tortuguita?",
		alternatives: {
			a: {
				answer: "Não", 
				values: [0, 0, 0, 25], 
			},
			b: {
				answer: "Claro", 
				values: [20, -25, 0, 0],
			}
        },
	},

	51: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "Você encontra $40 no chão",
		alternatives: {
			a: {
				answer: ":)", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: ":)", 
				values: [0, 0, 0, 0],
			}
        },
		next_a: 119,
		next_b: 119
	},





	901: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Então você finalmente conseguiu os selos",
		alternatives: {
			a: {
				answer: "Sim", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Duvidou?", 
				values: [0, 0, 0, 0],
			}
		},
	},
	902: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "Fez muito bem em reunir todos",
		alternatives: {
			a: {
				answer: "Entregar selos", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Entregar selos", 
				values: [0, 0, 0, 0],
			}
		},
	},
	903: {
		person: "espírito",
		img: "doc/avatares/ofoda.png",
		choice: "É uma pena que o equilíbrio nunca será restaurado..",
		alternatives: {
			a: {
				answer: "O que??", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Como assim??", 
				values: [0, 0, 0, 0],
			}
		},
	},
	904: {
		person: "",
		img: "doc/avatares/fato.gif",
		choice: "A pele restante sobre o espírito passa a derreter",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	905: {
		person: "espírito",
		img: "doc/avatares/ofoda-caveira.png",
		choice: "Perdão, mas você foi enganado o tempo todo. Agora que possuo os selos sou capaz..",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	906: {
		person: "espírito",
		img: "doc/avatares/ofoda-caveira.png",
		choice: "Acabarei com essa sociedade e nenhum outro héroi me impedirá",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	907: {
		person: "espírito",
		img: "doc/avatares/ofoda-caveira.png",
		choice: "Nem mesmo você. Meu capacho...",
		alternatives: {
			a: {
				answer: "", 
				values: [100, 100, 100, 100], 
			},
			b: {
				answer: "", 
				values: [100, 100, 100, 100],
			}
		},
	},


	910: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Bah, acabou né",
		alternatives: {
			a: {
				answer: "Sim?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Não!", 
				values: [0, 0, 0, 0],
			}
		},
	},
	911: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Parabéns e obrigado por concluir meu jogo",
		alternatives: {
			a: {
				answer: "...", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "...", 
				values: [0, 0, 0, 0],
			}
		},
	},
	912: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Álias, esses são os créditos e menções honrosas..",
		alternatives: {
			a: {
				answer: "Bah", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Hmm", 
				values: [0, 0, 0, 0],
			}
		},
	},
	913: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Primeiro queria agradecer ao professor Rodrigo por ajudar na elaboração do artigo",
		alternatives: {
			a: {
				answer: "Uau", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Uau", 
				values: [0, 0, 0, 0],
			}
		},
	},
	914: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "E ao professor Varela por ajudar e guiar durante a programação dessa coisa que tu jogou",
		alternatives: {
			a: {
				answer: "Uau", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Uau", 
				values: [0, 0, 0, 0],
			}
		},
	},
	915: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "De menções foi isso mesmo.",
		alternatives: {
			a: {
				answer: "Algo mais?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Algo mais?", 
				values: [0, 0, 0, 0],
			}
		},
	},
	916: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "1. Na próxima parte 'Vitae o inimigo agora é outro' ocorrerá a luta contra o espírito",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	917: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "2. Você pode continuar jogando normalmente, buscando easter eggs ou algo do tipo. Se tiver..",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	918: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "3. Caso continue, as lutas para obtenção dos selos e o espírito serão retirados, entretando..",
		alternatives: {
			a: {
				answer: "Entrentanto?", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "Entretanto?", 
				values: [0, 0, 0, 0],
			}
		},
	},
	919: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Como ja deve ter visto você pode reiniciar todo o seu progresso no menu.",
		alternatives: {
			a: {
				answer: "", 
				values: [0, 0, 0, 0], 
			},
			b: {
				answer: "", 
				values: [0, 0, 0, 0],
			}
		},
	},
	920: {
		person: "criador",
		img: "doc/avatares/criador.png",
		choice: "Enfim. É isso. Obrigado novamente se leu até aqui e boa sorte.",
		alternatives: {
			a: {
				answer: "", 
				values: [-100, -100, -100, -100], 
			},
			b: {
				answer: "", 
				values: [-100, -100, -100, -100],
			}
		},
	},
}


//-------------------------------------------------------------------------------------------------

const limit = 100;
const porcentagem = 2 / 10;
const porcentagem_X = 14 / 10;
const opacidade = 1 / 150;
const elastic= 12/10;

const head = document.querySelector("header");
const major = document.querySelector("main");
const leg = document.querySelector("footer");

const svg_dinheiro = document.querySelector("header div svg#cash");
const svg_raio = document.querySelector("header div svg#thunder");
const svg_vida = document.querySelector("header div svg#life");
const svg_relacionamento = document.querySelector("header div svg#relationship");

const avatar = document.querySelector("main div.avatar");
const img = document.querySelector("main div.avatar img");
const reset = document.querySelector("main div.over");
const again = document.querySelector("main div.try");
const again_back = document.querySelector("main div.try a");

const left = document.querySelector("div.left");
const right = document.querySelector("div.right");
const a = document.querySelector("div.left p");
const b = document.querySelector("div.right p");

const preview_dinheiro = document.querySelector("header div svg.preview_cash");
const preview_raio = document.querySelector("header div svg.preview_thunder");
const preview_vida = document.querySelector("header div svg.preview_life");
const preview_relacionamento = document.querySelector("header div svg.preview_relationship");

const danger = document.querySelector("div.danger");
const early = document.querySelector("div.symptom");
const early_detail = document.querySelector("div.symptom h2");

let dinheiro = document.querySelector("#cash rect");
let raio = document.querySelector("#thunder rect");
let vida = document.querySelector("#life rect");
let relacionamento = document.querySelector("#relationship rect");


let posStartX = 0;
let recuperacao =0;
let loop = 0;


let x;

//localStorage.removeItem('z')
if (localStorage.getItem('z') == null)localStorage.setItem('z', 1);


if(localStorage.getItem('z') == 1){
    x = {next: 1};
}else if(localStorage.getItem('z') < 12){
    x = {next: parseInt(localStorage.getItem('z'))};
}else{
    do {
        x = {next: (Math.floor(Math.random() * 52))};
    } while (x.next < 12 || x.next == parseInt(localStorage.getItem('end_mat'))
    || x.next == parseInt(localStorage.getItem('end_bio'))
    || x.next == parseInt(localStorage.getItem('end_edf'))
    || x.next == parseInt(localStorage.getItem('end_soc'))); 
}

/* FIM DO GAME */ if(localStorage.getItem('end') == "true") x.next = 901;
/* Créditos*/ if(localStorage.getItem('credits') == "true") x.next = 910;
/* Orientação */ if (localStorage.getItem('deaths')=="1") x.next = 96;


let left_p = document.querySelector('div.left p');
let right_p = document.querySelector('div.right p');

let texto = document.querySelector('main div.texto h4');
let personagem = document.querySelector('main div.nome');
let sintoma = document.querySelector('main div.symptom h1')
let days = document.querySelector('main div.symptom h2')
let icon = document.querySelector('footer div img')
let cont = document.querySelector('footer div.contador h3')
let periodo = 0;

let song = document.querySelector('audio.song');
let zelda = document.querySelector('audio.start');
let old = document.querySelector('audio.old');
let click = document.querySelector('audio.next');
let limite = document.querySelector('audio.limite');
let passada = document.querySelector('audio.passada');
let escrevendo  = document.querySelector('audio.escrevendo');
let morte  = document.querySelector('audio.morte');
let alarme = document.querySelector('audio.alarme');

let compass = localStorage.getItem('list')
let playlist = ["./doc/list"+compass+"0.mp3", "./doc/list"+compass+"1.mp3", "./doc/list"+compass+"2.mp3",
                                            "doc/list"+compass+"3.mp3", 
                "./doc/list"+compass+"4.mp3", "./doc/list"+compass+"5.mp3", "./doc/list"+compass+"6.mp3"]

let array = '';
let loop_music = 0;
let spotify = 0;
let i = 0;
let last_music = 1;

if(localStorage.getItem('objetivo') == null )localStorage.setItem('objetivo', "0 0 0 0");
let objetivo = localStorage.getItem('objetivo')
objetivo = objetivo.split(" ")
let end_game = 0;

for (let i = 0;  i <= 3; i++) {
        if(objetivo[i] != "0"){
            let fiscal =  document.querySelector('footer div.'+objetivo[i]+' img');
            fiscal.src = 'doc/selos/'+objetivo[i]+'.jpg';
            end_game += 1;
        };
};

if (objetivo[0] != "0")localStorage.setItem('end_mat', 40);
if (objetivo[1] != "0")localStorage.setItem('end_bio', 41);
if (objetivo[2] != "0")localStorage.setItem('end_edf', 14);
if (objetivo[3] != "0")localStorage.setItem('end_soc', 45);




if(end_game == 4){localStorage.setItem('end', true);};
let test = 4



view(x.next);



function view(roteiro) {
    texto.innerHTML = "";
    array = (perguntas[roteiro].choice).split('');
    perguntas[roteiro].choice = '';
 
    array.every(function text(letra, i){
         setTimeout(function(){
            perguntas[roteiro].choice += letra;
            texto.innerHTML = perguntas[roteiro].choice;
            escrevendo.play();
        }, 30*i);
        return true;
    })


    personagem.innerHTML = perguntas[roteiro].person;
    
    img.src = perguntas[roteiro].img;
    

    left_p.innerHTML = perguntas[roteiro].alternatives.b.answer;

    right_p.innerHTML = perguntas[roteiro].alternatives.a.answer;

    if(perguntas[roteiro].person != "")cont.innerHTML = periodo++;
    passada.play();
}

function blind(sentenca) {
    texto.innerHTML = perguntas[sentenca].justify;

    personagem.innerHTML = "";

    img.src = perguntas[sentenca].img;

    left_p.innerHTML = "";

    right_p.innerHTML = "";

    morte.play();
    localStorage.setItem('deaths', parseInt(localStorage.getItem('deaths')) + 1)
    if(periodo > parseInt(localStorage.getItem('survives')))localStorage.setItem('survives', periodo-1);
}

function sequel(descricao, icone, dias){
    let a = " períodos"
    

    sintoma.innerHTML = descricao;

    days.innerHTML = dias.concat(a);

    icon.src = icone;
}

function divine(selo){
    let caminho = document.querySelector('footer div.'+selo+' img');
    caminho.src = 'doc/selos/'+selo+'.jpg';
    
    if(selo == 'matematica')objetivo[0] = selo;
    if(selo == 'biologia')objetivo[1] = selo;
    if(selo == 'edf')objetivo[2] = selo;
    if(selo == 'sociologia')objetivo[3] = selo;

    localStorage.setItem('objetivo', objetivo[0]+" "+objetivo[1]+" "+objetivo[2]+" "+objetivo[3])
}


click.volume = localStorage.getItem('volume_effect');
old.volume = localStorage.getItem('volume_music');
old.currentTime = localStorage.getItem('theme');
zelda.volume = localStorage.getItem('volume_effect');
passada.volume = localStorage.getItem('volume_effect');
escrevendo.volume = localStorage.getItem('volume_effect');
limite.volume = localStorage.getItem('volume_effect');


if((old.volume) > 0)loop_music = setInterval(fade, 42)
function fade(){
    old.volume -= 0.010
	if(old.volume < 0.01){
        old.volume = 0;
        clearInterval(loop_music);
    }
};


select_music();
function select_music(){
    song.volume = localStorage.getItem('volume_game');
    function order(){
        do {
            i = (Math.floor(Math.random() * 6));
            song.src = playlist[i];

        } while (i == last_music);
        last_music = i;

        song.play(); 
        function duration(){
            if(song.played.end(0) >= song.duration){
                clearInterval(stop);
                clearTimeout(spotify);
                spotify = setTimeout(order, 6000);
            };

        }
        stop = setInterval(duration, 250);
    };
    spotify = setTimeout(order, 4000);
}



//-------------------------------------------------------------------------------------------------




let backup = localStorage.getItem('z');
let y= {};
let x_var = {};



let position;
let safe_zone;


avatar.addEventListener("touchstart", function (ev) {
    let finger = ev.changedTouches[0];  
    posStartX = finger.clientX;



    img.classList.remove('return');
    svg_dinheiro.classList.remove('below');
    svg_raio.classList.remove('below');
    svg_vida.classList.remove('below');
    svg_relacionamento.classList.remove('below');
    svg_dinheiro.classList.remove('up');
    svg_raio.classList.remove('up');
    svg_vida.classList.remove('up');
	svg_relacionamento.classList.remove('up');

});



avatar.addEventListener("touchmove", function (ev) {
    let finger = ev.changedTouches[0];



    img.style.setProperty('--trans', `${(finger.clientX - posStartX) * porcentagem_X}px`);
    img.style.setProperty('--rot', `${(finger.clientX - posStartX) * porcentagem}deg`);
    
    if (finger.clientX - posStartX < 0) {
        a.style.setProperty('opacity', 0);

        b.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade * -1}`);
        right.style.setProperty('--elastic', `${(finger.clientX - posStartX) * elastic}px`);



        x_var = esquerda(x.next);
        preview_dinheiro.style.setProperty('opacity', 0);
        preview_raio.style.setProperty('opacity', 0);
        preview_vida.style.setProperty('opacity', 0);
        preview_relacionamento.style.setProperty('opacity', 0);

            if(parseFloat(dinheiro.getAttribute("y"), 10) != x_var.dinheiro) 
            preview_dinheiro.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade * -1}` );

            if(parseFloat(raio.getAttribute("y"), 10) != x_var.energia) 
            preview_raio.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade * -1}` );

            if(parseFloat(vida.getAttribute("y"), 10) != x_var.vitalidade) 
            preview_vida.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade * -1}` );
        
            if(parseFloat(relacionamento.getAttribute("y"), 10) != x_var.relacionamento) 
            preview_relacionamento.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade * -1}` );
    }else{
        b.style.setProperty('opacity', 0);

        a.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade}`);
        left.style.setProperty('--elastic', `${(finger.clientX - posStartX) * elastic}px`);



        x_var = direita(x.next);
        preview_dinheiro.style.setProperty('opacity', 0);
        preview_raio.style.setProperty('opacity', 0);
        preview_vida.style.setProperty('opacity', 0);
        preview_relacionamento.style.setProperty('opacity', 0);

            if(parseFloat(dinheiro.getAttribute("y"), 10) != x_var.dinheiro) 
            preview_dinheiro.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade}` );

            if(parseFloat(raio.getAttribute("y"), 10) != x_var.energia) 
            preview_raio.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade}` );

            if(parseFloat(vida.getAttribute("y"), 10) != x_var.vitalidade) 
            preview_vida.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade}` );
    
            if(parseFloat(relacionamento.getAttribute("y"), 10) != x_var.relacionamento) 
            preview_relacionamento.style.setProperty('opacity', `${(finger.clientX - posStartX) * opacidade}` );
    };

    position = finger.clientX - posStartX;

    
    if(0 > position && position > limit * -1|| 0 < position && position < limit){safe_zone=true;}
    if(0 > position && position < limit * -1 && safe_zone==true || 0 < position && position > limit && safe_zone==true){
        limite.play();
        safe_zone=false;
    }

});



img.addEventListener("transitionend", function (ev) {
    img.style.setProperty('--trans', `0px`);
	img.style.setProperty('--rot', `0deg`);

});


avatar.addEventListener("touchend", function (ev) {
    img.classList.add('return');
    a.style.setProperty('opacity', 0);
    b.style.setProperty('opacity', 0);
    preview_dinheiro.style.setProperty('opacity', 0);
    preview_raio.style.setProperty('opacity', 0);
    preview_vida.style.setProperty('opacity', 0);
    preview_relacionamento.style.setProperty('opacity', 0);

if(x.next < 5000 && position < limit * -1 || position > limit && x.next < 5000){
    



    x = (position < 0) ? esquerda(x.next) : direita(x.next);
    if(x.next < 90) backup = x.next ;


    if(parseFloat(dinheiro.getAttribute("y"), 10) > x.dinheiro) svg_dinheiro.classList.add('up');
    if(parseFloat(dinheiro.getAttribute("y"), 10) < x.dinheiro) svg_dinheiro.classList.add('below');
    svg_dinheiro.classList.remove('effect');
        dinheiro.setAttribute("y", x.dinheiro);

    if(parseFloat(raio.getAttribute("y"), 10) > x.energia) svg_raio.classList.add('up');
    if(parseFloat(raio.getAttribute("y"), 10) < x.energia) svg_raio.classList.add('below');
    svg_raio.classList.remove('effect');
        raio.setAttribute("y", x.energia);

    if(parseFloat(vida.getAttribute("y"), 10) > x.vitalidade) svg_vida.classList.add('up');
    if(parseFloat(vida.getAttribute("y"), 10) < x.vitalidade) svg_vida.classList.add('below');
    svg_vida.classList.remove('effect');    
        vida.setAttribute("y", x.vitalidade);

    if(parseFloat(relacionamento.getAttribute("y"), 10) > x.relacionamento) svg_relacionamento.classList.add('up');
    if(parseFloat(relacionamento.getAttribute("y"), 10) < x.relacionamento) svg_relacionamento.classList.add('below');  
    svg_relacionamento.classList.remove('effect'); 
        relacionamento.setAttribute("y", x.relacionamento);



    x.next = juiz(x.next);

	if(x.next < 1000 || x.next > 5000) x.next = detalhe(x);
    if(x.next > 1000 && x.next < 2000) x.next = money(x);
    if(x.next > 2000 && x.next < 3000) x = energy(x);
    if(x.next > 3000 && x.next < 3036) x.next = life(x);

    if(perguntas[x.next] == undefined){
        if(backup < 12){
            backup++;
            x.next = backup;
        }else{
            do {
                x.next = Math.floor(Math.random() * 52);
            } while (x.next < 12 || x.next == parseInt(localStorage.getItem('end_mat'))
            || x.next == parseInt(localStorage.getItem('end_bio'))
            || x.next == parseInt(localStorage.getItem('end_edf'))
            || x.next == parseInt(localStorage.getItem('end_soc'))); 
        } 
    };


    /* Selo */if(x.selo != undefined)divine(x.selo);

	


    if(x.efeito == true && recuperacao == 0){
        y = x;
        loop = true;
        


        function start_effect() {
            if(y.dinheiro_efeito!= 0){ svg_dinheiro.classList.add('effect');
                dinheiro.setAttribute("y", parseFloat(dinheiro.getAttribute("y"), 10) + 950 * y.dinheiro_efeito)
            }
            if(y.energia_efeito != 0){ svg_raio.classList.add('effect');
                raio.setAttribute("y", parseFloat(raio.getAttribute("y"), 10) + 880 * y.energia_efeito);
            }
            if(y.vitalidade_efeito != 0){ svg_vida.classList.add('effect');
                vida.setAttribute("y", parseFloat(vida.getAttribute("y"), 10) + 185 * y.vitalidade_efeito);
            }
            if(y.relacionamento_efeito != 0){ svg_relacionamento.classList.add('effect');
                relacionamento.setAttribute("y", parseFloat(relacionamento.getAttribute("y"), 10) + 98 * y.relacionamento_efeito);
            }


            x.next = juiz(x.next);
            if(juiz(x.next) > 5000){
                end();
            } 
        }; 


        setTimeout(function() {
            loop = setInterval(start_effect, 1000);
            

            danger.style.setProperty('opacity', 0);
            danger.style.setProperty('--size_danger', 0);

            early.style.setProperty('--vertical', '100vw');
            early_detail.style.setProperty('--vertical_side', '-180vw');
        }, 7000);

    
        sequel(y.description, y.img, y.days.toString());

        

        danger.style.setProperty('opacity', 1);
        danger.style.setProperty('--size_danger', 2);
        early.style.setProperty('--vertical', 0);
        early_detail.style.setProperty('--vertical_side', 0);
    }



    function stop_effect(){
        clearInterval(loop);
        x.efeito = undefined;
        recuperacao = 0;
        loop = 0;
    
        svg_dinheiro.classList.remove('effect');
        svg_raio.classList.remove('effect');
        svg_vida.classList.remove('effect');
        svg_relacionamento.classList.remove('effect');
    
        if(x.cura == true){
            if(x.next < 4000)head.classList.add('healing');
            setTimeout(function() {head.classList.remove('healing');}, 1000);
        }
        sequel("", "", "");
    }
    
    if(recuperacao==y.days || x.cura == true) stop_effect();
    if(loop != 0)recuperacao++;



	/* Roteiro */ if(x.next > 5000){ end() }else{ view(x.next) }
	position = 0;
}
});


function end(k){
    x.next = k || x.next;


    blind(x.next);

    clearInterval(loop);

    


    major.style.setProperty('--bright', 1.1);
    head.style.setProperty('--bright', 0.8);
    leg.style.setProperty('--bright', 0.8);
    reset.style.setProperty('opacity', 1);
    reset.style.setProperty('--size', 1);
    again.style.setProperty('--horizontal', 0);
    again.style.setProperty('opacity', 1);
    again_back.style.setProperty('--horizontal_back', 0);
    again.style.setProperty('--fix', 4);

    svg_dinheiro.classList.remove('effect');
    svg_raio.classList.remove('effect');
    svg_vida.classList.remove('effect');
    svg_relacionamento.classList.remove('effect');

    money(x)


    localStorage.setItem('z', backup);
}


// -----------------------------------------------------------------------------

function operacao(p, e, v, r) {
    return {
        dinheiro: parseFloat(dinheiro.getAttribute("y"), 10)+ p * 9.5,
        energia: parseFloat(raio.getAttribute("y"), 10) + e * 8.8,
        vitalidade: parseFloat(vida.getAttribute("y"), 10) + v * 1.85,
        relacionamento: parseFloat(relacionamento.getAttribute("y"), 10) + r * 0.98,

        mudancas:[p, e, v, r]
    };
}


function juiz(padrao){
    
    if((parseFloat(dinheiro.getAttribute("y"), 10)) >= 975 && padrao > 900 && padrao < 910) return 5010;
    if((parseFloat(dinheiro.getAttribute("y"), 10)) <= 25 && padrao > 910 && padrao < 1000) return 5011;

    if((parseFloat(dinheiro.getAttribute("y"), 10)) <= 25) return 5001;
    if((parseFloat(dinheiro.getAttribute("y"), 10)) >= 975) return 5005;
    
    if((parseFloat(raio.getAttribute("y"), 10)) <= 60) return 5002;
    if((parseFloat(raio.getAttribute("y"), 10)) >= 940) return 5006;
    if((parseFloat(vida.getAttribute("y"), 10)) <= 57.5) return 5003;
    if((parseFloat(vida.getAttribute("y"), 10)) >= 242.5) return 5007;
    if((parseFloat(relacionamento.getAttribute("y"), 10)) <= 66) return 5004;

    if((parseFloat(relacionamento.getAttribute("y"), 10)) >= 164 && padrao > 4009) return 5009;

    if((parseFloat(relacionamento.getAttribute("y"), 10)) >= 164) return 5008;

    return padrao;
}


function efeitos(side){
    if (side.effect != undefined){

        if(side.effect.bad != undefined) return{kcal: side.effect.bad};
        if(side.effect.seal != undefined) return{selo: side.effect.seal};
        if(side.effect.random != undefined) return{aleatorio: side.effect.random};
        if(side.effect.cura != undefined) return{cura: side.effect.cura};

        
        return{
                efeito: true,
                description: side.effect.description,
                img: side.effect.img,

                dinheiro_efeito: side.effect.values[0],
                energia_efeito: side.effect.values[1],
                vitalidade_efeito: side.effect.values[2],
                relacionamento_efeito: side.effect.values[3],
                days: side.effect.days,
        };
    }
}


function esquerda(id) {
    let pergunta = perguntas[id];
    if(id > 12 && id < 90){
        do {
            id = Math.floor(Math.random() * 52);
        } while (id < 12 || id == parseInt(localStorage.getItem('end_mat'))
        || id == parseInt(localStorage.getItem('end_bio'))
        || id == parseInt(localStorage.getItem('end_edf'))
        || id == parseInt(localStorage.getItem('end_soc'))); 
    }else{id+=1}


        return {
            next: pergunta.next_a || id,
            ...operacao(
                pergunta.alternatives.a.values[0],
                pergunta.alternatives.a.values[1],
                pergunta.alternatives.a.values[2],
                pergunta.alternatives.a.values[3],
            ),
            ...efeitos(
                pergunta.alternatives.a,
            )
        };
}


function direita(id) {
    let pergunta = perguntas[id];
    if(id > 12 && id < 90){
        do {
            id = Math.floor(Math.random() * 52);
        } while (id < 12 || id == parseInt(localStorage.getItem('end_mat'))
        || id == parseInt(localStorage.getItem('end_bio'))
        || id == parseInt(localStorage.getItem('end_edf'))
        || id == parseInt(localStorage.getItem('end_soc'))); 
    }else{id+=1}


        return {
            next: pergunta.next_b || id,
            ...operacao(
                pergunta.alternatives.b.values[0],
                pergunta.alternatives.b.values[1],
                pergunta.alternatives.b.values[2],
                pergunta.alternatives.b.values[3],
            ),
            ...efeitos(
                pergunta.alternatives.b,
            )
        };
} 

//-------------------------------------------------------------------------------------------------

let time = document.querySelector('footer div.timer');
let bar = document.querySelector('main div.barra progress');
let loop_especial = 0;
let baron = 100;
let morto = false;
let desempenho = 0.95;
let polimento = 5;
let backup_kcal = 0;
let corrida = 0;
let nome;


function detalhe(x){
    if(x.next == 2){
        nome = prompt("Informe o seu nome");
        localStorage.setItem('nome', nome)
    }
    
    if(x.next == 3){
        alarme.play();
    }

    if (x.next == 903){
        (document.querySelector('footer div.matematica img')).src = "";
        (document.querySelector('footer div.biologia img')).src = "";
        (document.querySelector('footer div.edf img')).src = "";
        (document.querySelector('footer div.sociologia img')).src = "";

        localStorage.setItem('objetivo', "0 0 0 0")
    };


    if (x.next == 5010)localStorage.setItem('credits', true);

    if (x.next == 920){
        localStorage.setItem('end_mat', 40);
        localStorage.setItem('end_bio', 41);
        localStorage.setItem('end_edf', 14);
        localStorage.setItem('end_soc', 45);

        localStorage.setItem('end', false);
        localStorage.setItem('credits', false);
    }

    

    return(x.next)
}


function money(padrao){
    let clock = 20;



    if(padrao.aleatorio == true) padrao.next += Math.floor(Math.random() * 2);
    
    
    function reduzir(){ 
        clock--;
        time.innerHTML = clock;
        if(clock == 0){clearInterval(loop_especial); end(5005)}
    };

    if(padrao.next >= 1006 && padrao.next < 1011){
        clock = 21;
        clearInterval(loop_especial);
        time.style.setProperty('opacity', 1);

        loop_especial = setInterval(reduzir, 1000);  
    };
    

    if(padrao.next == 1011){
        clearInterval(loop_especial);
        time.style.setProperty('opacity', 0);
    }

    if(padrao.next > 5000){
        clearInterval(loop_especial);
    }
    return padrao.next;
}


function energy(padrao){

    if (corrida == 3) {
        padrao.next = 2019;    
        corrida = 0;
    }

    if(padrao.next >= 2006 && padrao.next < 2019 ){
        padrao.kcal == true ? desempenho -= 0.1 : desempenho += 0.05; 
        

        
        polimento--;
        
        

        padrao.next = 2006 + Math.floor(Math.random() * 12);
        while (padrao.next == backup_kcal) {
            padrao.next = 2006 +  Math.floor(Math.random() * 12);
        }
        backup_kcal = padrao.next;


        if(polimento == 0){
            padrao.next = 2101 +  Math.floor(Math.random() * 3);
            polimento = 5;
        }
    }
    
    if(padrao.next > 2100){
        padrao.energia = padrao.energia * desempenho;
        corrida++;
        
    }

    

    return padrao
}



function life(padrao){
    if(padrao.aleatorio == true) padrao.next += Math.floor(Math.random() * 2);
    


    if((padrao.mudancas[2]) == 15){
        baron = baron - 15;

    } 

    if((perguntas[padrao.next].choice ) == "Blaron descansa" && baron <= 90){
        baron = baron + 10;

    }


    if((perguntas[padrao.next].choice) == "Dano crítico"){
        baron = baron - 20;

    }
    if((perguntas[padrao.next].choice) == "Blaron defende"){
        baron = baron - 5;

    }


    if(padrao.next >= 3009 && padrao.next < 3034){
        bar.style.setProperty('opacity', 1);
        bar.value = baron;
    }

    if(baron <= 0 && morto==false){
        padrao.next = 3034;
        morto = true;
        bar.style.setProperty('opacity', 0);
    }


    return padrao.next
}

