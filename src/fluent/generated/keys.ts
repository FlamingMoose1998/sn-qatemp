import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '57c7d86dc86a4f3395c196d689a9ac52'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '04f06f1f190f4b398644be0b9c7c4fe0'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0b9556c38e7d4529a0eab37d03cc9ade'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'question'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0eb895e58466453bb7b9e0df3e436729'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '168405764fef4d51aed8590d9cb56bb2'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                            value: 'audio'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a52db6c965c4056b8c557bd035a22a9'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '2202fadacaa64c41b80ea612e917b797'
                        key: {
                            name: 'x_471120_qatemp_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '23e7bf769815496abbc0f737e679d788'
                        key: {
                            name: 'x_471120_qatemp/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '25fbff8c4758d710178dcd9fe16d4341'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29429f9725874450b02b4aa5b98d555d'
                        deleted: true
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'audience'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29fbff8c4758d710178dcd9fe16d433e'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ae0b12c965846e4ab91af39f86993cf'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'type'
                            value: 'normal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2dfbbf8c4758d710178dcd9fe16d432c'
                        key: {
                            name: 'x_471120_qatemp_question'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2dfbff8c4758d710178dcd9fe16d433b'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'answer'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32ea3d0eee474ec0ac22dfbe3b431907'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ca6a5ceda894fd9904766cdcbf60055'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '401b8678600a49629e25c0b5e8fe896e'
                        key: {
                            endpoint: 'x_471120_qatemp_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4255cf0a737c4dc5b5c93e67342cb2fa'
                        deleted: true
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'audience'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '456ba99c508e423baab7e53b4b6cad03'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'fullscreen'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46799f2c95a84cb2a2c929f2a5d1193f'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fbb7f4b33824b809ac884c5a893e269'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5adfcdb689a94f949746e1ac801113f1'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '606e54df8e0b401d957cdba3e342a8e1'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6194000160204779a506b9d0a9f4b591'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '61fbff8c4758d710178dcd9fe16d433a'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '679b2bf9e14447ddaf1ee24a7290f031'
                        key: {
                            name: 'x_471120_qatemp/vendor-react-dom--55da69dc'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68c26d0f5d304d8382595ba48197334d'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69d0b8c6313b4a1092f46092e3752c26'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '69fbff8c4758d710178dcd9fe16d4340'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'difficulty'
                            position: '8'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6c02346639c04f7c97a7661a062bdcbb'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6dfbff8c4758d710178dcd9fe16d433d'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'filename'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '77204a18e6924e7c92e951cd77805b23'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '784629b4dfd34621bdbc7502c9cadf90'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                            value: 'image'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7855ef56a87648ea9ef3fd47076f1250'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'filename'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '7bbf01d7fdb74db7b6fb7e50a8007a8c'
                        key: {
                            name: 'x_471120_qatemp/vendor-react-dom--55da69dc.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c2f2880d9b9411bbd9c1d614d3970ad'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c6b18f316444d6b9798df28b2ae3099'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'filename'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7c9eb433b93f45c78df8926bb004f00d'
                        key: {
                            name: 'x_471120_qatemp_question'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ea1e6a76b64449fb3ad7df46523c3af'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'type'
                            value: '1234'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '844126c6e01c454ab3c951d0f293d6ee'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                            value: 'video'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '89882c6d469540b594dfe1dcb645df69'
                        key: {
                            application_file: '401b8678600a49629e25c0b5e8fe896e'
                            source_artifact: '2202fadacaa64c41b80ea612e917b797'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91fc17e0cdf441cfbe37149a7ea84f52'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1fbff8c4758d710178dcd9fe16d433d'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a2bef9211c814f65906fa856690a8b32'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3f074a401b64c08bfb0d6115ee4ccfb'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'adfbff8c4758d710178dcd9fe16d433f'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'b3789754736a4cf8adf2d77e2181a1b5'
                        key: {
                            application_file: '7bbf01d7fdb74db7b6fb7e50a8007a8c'
                            source_artifact: '2202fadacaa64c41b80ea612e917b797'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'b7528a129ce84378ab04a0be73a92349'
                        key: {
                            application_file: '679b2bf9e14447ddaf1ee24a7290f031'
                            source_artifact: '2202fadacaa64c41b80ea612e917b797'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b82fb77108164e00b522799878774759'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c28fa75d14124be48d386c6c3a9cf0d8'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2cbc0fb3078413da293699b98bd589b'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ccd2db9e5caa4c4ba69739e4fb3be776'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'media_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfcaebe42b5047aaacc1df7c69f6f04a'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'question'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd156500617d84f50b3265e051c24af3f'
                        key: {
                            name: 'x_471120_qatemp_question'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd3e8de49f2914d4f8d5d35bc339692ea'
                        key: {
                            name: 'x_471120_qatemp/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8a30aea097f420da73bb50dc8a455d6'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'fullscreen'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da3626cd3f83488b9d820c4a35634e07'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'db88ced0c4f043a0885f37a4317654d6'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e1fbff8c4758d710178dcd9fe16d433f'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fullscreen'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e5fbff8c4758d710178dcd9fe16d433c'
                        key: {
                            sys_ui_section: {
                                id: '2dfbbf8c4758d710178dcd9fe16d432c'
                                key: {
                                    name: 'x_471120_qatemp_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'media_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e872db7c48e7478db862566be5192530'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea2fda25790e4982971b142eb6b7f011'
                        key: {
                            name: 'x_471120_qatemp_question'
                            element: 'difficulty'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ed3e83c4784a4dc1a90a68330d0c281a'
                        key: {
                            name: 'x_471120_qatemp_quiz'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ef317a2abc2341aaaf7f826a469387b9'
                        key: {
                            application_file: 'd3e8de49f2914d4f8d5d35bc339692ea'
                            source_artifact: '2202fadacaa64c41b80ea612e917b797'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f1b6745c70814918b836f757e49c3bf7'
                        key: {
                            application_file: '23e7bf769815496abbc0f737e679d788'
                            source_artifact: '2202fadacaa64c41b80ea612e917b797'
                        }
                    },
                ]
            }
        }
    }
}
