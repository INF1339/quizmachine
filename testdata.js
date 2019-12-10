var q = {
  "questestinterop": {
    "assessment": {
      "ident": "g6ac24ad4e1f92e7196a9a30b1e6594b4",
      "title": "A44 FINAL EXAM F19",
      "qtimetadata": {
        "qtimetadatafield": {
          "fieldlabel": "cc_maxattempts",
          "fieldentry": "1"
        }
      },
      "section": {
        "ident": "root_section",
        "item": {
          "ident": "g5c74dca534a00b3e762400418d7e3925",
          "title": "NN",
          "itemmetadata": {
            "qtimetadata": {
              "qtimetadatafield": [
                {
                  "fieldlabel": "question_type",
                  "fieldentry": "multiple_choice_question"
                },
                {
                  "fieldlabel": "points_possible",
                  "fieldentry": "1.0"
                },
                {
                  "fieldlabel": "original_answer_ids",
                  "fieldentry": "8995,6160,6495,552,4907,7851,8568"
                },
                {
                  "fieldlabel": "assessment_question_identifierref",
                  "fieldentry": "gedbb5fe68e16a283cdda1e763adc10ad"
                }
              ]
            }
          },
          "presentation": {
            "material": {
              "mattext": {
                "texttype": "text/html",
                "text": "<div><p>In the neural net diagram shown, which set of neurons would mostly likely be called a \"hidden layer\"?</p><p><img src=\"https://docs.google.com/drawings/d/e/2PACX-1vRGkI7jSAtI71kBV4dtWa2X0gXeJZGvShZxIXIPxGXu6OARdXJPuH6ZdrSHdstfXUxjZRF1pVlFyZZ-/pub?w=443&amp;h=423\" alt=\"neural network diagram\" width=\"443\" height=\"422\"></p></div>"
              }
            },
            "response_lid": {
              "ident": "response1",
              "rcardinality": "Single",
              "render_choice": {
                "response_label": [
                  {
                    "ident": "8995",
                    "material": {
                      "mattext": { "texttype": "text/plain", "text":null }
                    }
                  },
                  {
                    "ident": "6160",
                    "material": {
                      "mattext": { "texttype": "text/plain", "text":null }
                    }
                  },
                  {
                    "ident": "6495",
                    "material": {
                      "mattext": {
                        "texttype": "text/plain",
                        "text": "10, 11, 12, 13"
                      }
                    }
                  },
                  {
                    "ident": "552",
                    "material": {
                      "mattext": {
                        "texttype": "text/html",
                        "text": "<p>1, 2, 3, 4, 5, 6, 7, 8, 9</p>"
                      }
                    }
                  },
                  {
                    "ident": "4907",
                    "material": {
                      "mattext": {
                        "texttype": "text/html",
                        "text": "<p>14, 15</p>"
                      }
                    }
                  },
                  {
                    "ident": "7851",
                    "material": {
                      "mattext": {
                        "texttype": "text/html",
                        "text": "<p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15</p>"
                      }
                    }
                  },
                  {
                    "ident": "8568",
                    "material": {
                      "mattext": {
                        "texttype": "text/html",
                        "text": "<p>10, 11, 12, 13, 14, 15</p>"
                      }
                    }
                  }
                ]
              }
            }
          },
          "resprocessing": {
            "outcomes": {
              "decvar": {
                "maxvalue": "100",
                "minvalue": "0",
                "varname": "SCORE",
                "vartype": "Decimal"
              }
            },
            "respcondition": [
              {
                "continue": "Yes",
                "conditionvar": {
                  
                },
                "displayfeedback": {
                  "feedbacktype": "Response",
                  "linkrefid": "general_fb"
                }
              },
              {
                "continue": "No",
                "conditionvar": {
                  "varequal": {
                    "respident": "response1",
                    "text": "8995"
                  }
                },
                "setvar": {
                  "action": "Set",
                  "varname": "SCORE",
                  "text": "100"
                }
              }
            ]
          },
          "itemfeedback": {
            "ident": "general_fb",
            "flow_mat": {
              "material": {
                "mattext": {
                  "texttype": "text/html",
                  "text": "<p>1 through 9 are the input layer and 14 and 15 are the output layer.  Neurons 10, 11, 12, and 13 would be a hidden layer.</p>"
                }
              }
            }
          }
        }
      }
    }
  }
}