Search.setIndex({envversion:49,filenames:["advancedgetreputationexample","basicdetectioncallbackexample","basicfirstinstancecallbackexample","basicfirstrefexample","basicgetreputationexample","basicreputationchangecallbackexample","basicsetreputationexample","dxltieclient","dxltieclient.callbacks","dxltieclient.client","dxltieclient.constants","index","installation","overview","sampleconfig"],objects:{"":{dxltieclient:[7,0,0,"-"]},"dxltieclient.callbacks":{DetectionCallback:[8,1,1,""],FirstInstanceCallback:[8,1,1,""],ReputationChangeCallback:[8,1,1,""]},"dxltieclient.callbacks.DetectionCallback":{on_detection:[8,2,1,""],on_event:[8,2,1,""]},"dxltieclient.callbacks.FirstInstanceCallback":{on_event:[8,2,1,""],on_first_instance:[8,2,1,""]},"dxltieclient.callbacks.ReputationChangeCallback":{on_event:[8,2,1,""],on_reputation_change:[8,2,1,""]},"dxltieclient.client":{TieClient:[9,1,1,""]},"dxltieclient.client.TieClient":{add_certificate_reputation_change_callback:[9,2,1,""],add_file_detection_callback:[9,2,1,""],add_file_first_instance_callback:[9,2,1,""],add_file_reputation_change_callback:[9,2,1,""],get_certificate_first_references:[9,2,1,""],get_certificate_reputation:[9,2,1,""],get_file_first_references:[9,2,1,""],get_file_reputation:[9,2,1,""],remove_certificate_reputation_change_callback:[9,2,1,""],remove_file_detection_callback:[9,2,1,""],remove_file_first_instance_callback:[9,2,1,""],remove_file_reputation_change_callback:[9,2,1,""],response_timeout:[9,3,1,""],set_certificate_reputation:[9,2,1,""],set_file_reputation:[9,2,1,""]},"dxltieclient.constants":{AtdAttrib:[10,1,1,""],AtdTrustLevel:[10,1,1,""],CertEnterpriseAttrib:[10,1,1,""],CertGtiAttrib:[10,1,1,""],CertProvider:[10,1,1,""],CertRepChangeEventProp:[10,1,1,""],CertReputationOverriddenProp:[10,1,1,""],CertReputationProp:[10,1,1,""],DetectionEventProp:[10,1,1,""],EnterpriseAttrib:[10,1,1,""],EpochMixin:[10,1,1,""],FileEnterpriseAttrib:[10,1,1,""],FileGtiAttrib:[10,1,1,""],FileProvider:[10,1,1,""],FileRepChangeEventProp:[10,1,1,""],FileReputationProp:[10,1,1,""],FirstInstanceEventProp:[10,1,1,""],FirstRefProp:[10,1,1,""],GtiAttrib:[10,1,1,""],HashType:[10,1,1,""],RepChangeEventProp:[10,1,1,""],ReputationProp:[10,1,1,""],TrustLevel:[10,1,1,""]},"dxltieclient.constants.AtdAttrib":{AV_ENGINE_SCORE:[10,3,1,""],BEHAVIORS:[10,3,1,""],GAM_SCORE:[10,3,1,""],SANDBOX_SCORE:[10,3,1,""],VERDICT:[10,3,1,""]},"dxltieclient.constants.AtdTrustLevel":{KNOWN_MALICIOUS:[10,3,1,""],KNOWN_TRUSTED:[10,3,1,""],MIGHT_BE_MALICIOUS:[10,3,1,""],MIGHT_BE_TRUSTED:[10,3,1,""],MOST_LIKELY_MALICIOUS:[10,3,1,""],MOST_LIKELY_TRUSTED:[10,3,1,""],NOT_SET:[10,3,1,""],UNKNOWN:[10,3,1,""]},"dxltieclient.constants.CertEnterpriseAttrib":{FIRST_CONTACT:[10,3,1,""],HAS_FILE_OVERRIDES:[10,3,1,""],IS_PREVALENT:[10,3,1,""],PREVALENCE:[10,3,1,""]},"dxltieclient.constants.CertGtiAttrib":{FIRST_CONTACT:[10,3,1,""],PREVALENCE:[10,3,1,""],REVOKED:[10,3,1,""]},"dxltieclient.constants.CertProvider":{ENTERPRISE:[10,3,1,""],GTI:[10,3,1,""]},"dxltieclient.constants.CertRepChangeEventProp":{PUBLIC_KEY_SHA1:[10,3,1,""]},"dxltieclient.constants.CertReputationOverriddenProp":{FILES:[10,3,1,""],TRUNCATED:[10,3,1,""]},"dxltieclient.constants.CertReputationProp":{OVERRIDDEN:[10,3,1,""]},"dxltieclient.constants.DetectionEventProp":{DETECTION_TIME:[10,3,1,""],HASHES:[10,3,1,""],LOCAL_REPUTATION:[10,3,1,""],NAME:[10,3,1,""],REMEDIATION_ACTION:[10,3,1,""],SYSTEM_GUID:[10,3,1,""]},"dxltieclient.constants.EnterpriseAttrib":{SERVER_VERSION:[10,3,1,""],to_version_string:[10,4,1,""],to_version_tuple:[10,4,1,""]},"dxltieclient.constants.EpochMixin":{to_localtime:[10,4,1,""],to_localtime_string:[10,4,1,""]},"dxltieclient.constants.FileEnterpriseAttrib":{AVG_LOCAL_REP:[10,3,1,""],CHILD_FILE_REPS:[10,3,1,""],DETECTION_COUNT:[10,3,1,""],ENTERPRISE_SIZE:[10,3,1,""],FILE_NAME_COUNT:[10,3,1,""],FIRST_CONTACT:[10,3,1,""],IS_PREVALENT:[10,3,1,""],LAST_DETECTION_TIME:[10,3,1,""],MAX_LOCAL_REP:[10,3,1,""],MIN_LOCAL_REP:[10,3,1,""],PARENT_AVG_LOCAL_REP:[10,3,1,""],PARENT_FILE_REPS:[10,3,1,""],PARENT_MAX_LOCAL_REP:[10,3,1,""],PARENT_MIN_LOCAL_REP:[10,3,1,""],PREVALENCE:[10,3,1,""],to_aggregate_tuple:[10,4,1,""]},"dxltieclient.constants.FileGtiAttrib":{FIRST_CONTACT:[10,3,1,""],PREVALENCE:[10,3,1,""]},"dxltieclient.constants.FileProvider":{ATD:[10,3,1,""],ENTERPRISE:[10,3,1,""],GTI:[10,3,1,""],MWG:[10,3,1,""]},"dxltieclient.constants.FileRepChangeEventProp":{RELATIONSHIPS:[10,3,1,""]},"dxltieclient.constants.FirstInstanceEventProp":{HASHES:[10,3,1,""],NAME:[10,3,1,""],SYSTEM_GUID:[10,3,1,""]},"dxltieclient.constants.FirstRefProp":{DATE:[10,3,1,""],SYSTEM_GUID:[10,3,1,""]},"dxltieclient.constants.GtiAttrib":{ORIGINAL_RESPONSE:[10,3,1,""]},"dxltieclient.constants.HashType":{MD5:[10,3,1,""],SHA1:[10,3,1,""],SHA256:[10,3,1,""]},"dxltieclient.constants.RepChangeEventProp":{HASHES:[10,3,1,""],NEW_REPUTATIONS:[10,3,1,""],OLD_REPUTATIONS:[10,3,1,""],UPDATE_TIME:[10,3,1,""]},"dxltieclient.constants.ReputationProp":{ATTRIBUTES:[10,3,1,""],CREATE_DATE:[10,3,1,""],PROVIDER_ID:[10,3,1,""],TRUST_LEVEL:[10,3,1,""]},"dxltieclient.constants.TrustLevel":{KNOWN_MALICIOUS:[10,3,1,""],KNOWN_TRUSTED:[10,3,1,""],KNOWN_TRUSTED_INSTALLER:[10,3,1,""],MIGHT_BE_MALICIOUS:[10,3,1,""],MIGHT_BE_TRUSTED:[10,3,1,""],MOST_LIKELY_MALICIOUS:[10,3,1,""],MOST_LIKELY_TRUSTED:[10,3,1,""],NOT_SET:[10,3,1,""],UNKNOWN:[10,3,1,""]},dxltieclient:{callbacks:[8,0,0,"-"],client:[9,0,0,"-"],constants:[10,0,0,"-"],get_version:[7,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:function"},terms:{"000c29663178":[1,2,3,8,9],"000c2992f5d9":3,"11e6":[1,2,3,8,9],"142e1d688ef0568370c37187fd9f2351d7ddeda574f8bfa9b0fa4ef42db85aa2":[3,4,6,8,9],"190l":10,"1c26e2037c8e205b452cab3565d696512207d66d":9,"24397e4d":14,"275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f":4,"2d6ca45061b7972312e00e5933fdff95bb90b61b":[2,8],"31dbe8cc443d2ca7fd236ac00a52fb17":[2,8],"323a":3,"3395856ce81f2b7382dee72602f798b642f14140":4,"348e":[1,2,3,8,9],"3a6f574a":[3,9],"3b87a2d6f39770160364b79a152fcc73bae27adf":9,"3e6f":[3,9],"414bb16b10ece2db2d8448cb9f313f80cb77c310ca0c19ee03c73cba0c16fedb":[1,8],"435dfd470f727437c7cb4f07cba1f9a1f4272656":[1,8],"436d":[3,9],"44d88612fea8a8f36de82e1278abb02f":4,"4ae0":14,"4f2f":14,"5d73b77f":14,"645f":14,"68125cd6":[1,2,3,8,9],"6eae26db8c13182a7947982991b4321732cc3de2":9,"7eb0139d2175739b3ccb0d1110067820be6abd29":[3,4,6,8,9],"7eb0139d2175739b3ccb0d1110067820be6abd2b":5,"8c4b":14,"915e":3,"974f":14,"case":[1,2,5],"class":[0,1,2,4,5,8,9,10,13],"function":10,"int":9,"public":[8,9,10],"return":[3,7,9,10],"static":10,"true":[0,1,2,4,5,8],"while":[1,2,5,6,9],a5d8:[1,2,3,8,9],aa3c461d4c21a392e372d0d6ca4ceb1e4d88098d587659454eaf4d93c661880f:[2,8],about:[9,10],abov:[3,8],access:[9,13],accomplish:5,acd4:[3,9],across:[9,10],action:[1,3,5,8],active:[6,9],actual:1,add_certificate_reputation_change_callback:[5,8,9],add_file_detection_callback:[1,8,9],add_file_first_instance_callback:[2,8,9],add_file_reputation_change_callback:[5,8,9],addit:[0,8,9],advanced_get_reputation_exampl:0,after:[1,2,5],again:5,agentguid:[1,2,8,9,10],aggreg:10,aggregate_attrib:10,aggregate_tupl:10,algorithm:10,all:[0,10],allow:[9,13],almost:10,along:[0,3,4,6],also:[3,8,9],altern:12,amount:9,ani:12,anti:[4,10],api:[6,9],appear:[0,1,2,3,4,5],aspx:12,associ:[1,2,3,4,6,8,9,10],atd:[8,9,10],atdattrib:[8,9,10],atdtrustlevel:10,attribut:[0,4,5,8,9,10],attributes:[0,9,10],author:[6,9],automat:12,av_engine_score:10,avail:[0,1,2,3,4,5,6,9,10,12],averag:10,avg_local_rep:10,b437:14,b4c3b2d596d1461c1bb417b92dcd74817abb829d:9,backup:1,bad:4,base:[6,8,9,10],basic_detection_callback_exampl:1,basic_first_instance_callback:2,basic_first_ref_exampl:3,basic_get_reputation_exampl:4,basic_reputation_change_callback_exampl:5,basic_set_reputation_exampl:6,bcde336b054d:[3,9],been:[0,1,2,3,4,5,6,8,10],befor:10,behavior:10,behaviors:10,below:[0,1,2,3,4,5,6,8,9],benign:10,bit:10,both:5,bottom:[3,5],broadcast:5,broker:14,brokercert:14,brokercertchain:14,build:10,button:[3,5],calcul:[1,8],call:[0,3,4],can:[4,8,9,10],caus:8,cert:[9,14],certain:10,certenterpriseattrib:[0,8,9,10],certfil:14,certgtiattrib:[8,9,10],certif:[0,1,5,8,9,10,14],certificate_body_sha1:0,certificate_public_key_sha1:0,certprovid:[0,8,9,10],certrepchangeeventprop:[8,10],certreputationoverriddenprop:10,certreputationprop:10,child:10,child_file_reps:10,clean:1,click:[3,5],client:[0,1,2,3,4,5,6,7,8],close:3,code:[0,1,2,3,4,5,6],com:[12,14],comment:[6,9],commun:[0,3,4,6,9],complet:[0,1,2,3,4,5,6],concret:8,config:[0,1,2,3,4,5,6,8,14],configur:[0,1,2,3,4,5,6,11],connect:[0,1,2,3,4,5,6,8,13,14],consid:10,consider:10,consol:[1,2,5],constant:[0,4,7,8,9],construct:[1,2,5],constructor:9,contact:0,contain:[8,9,10,14],convert:[4,10],copi:3,correspond:[4,8,9,10],count:10,cover:1,creat:[0,1,2,3,4,5,6,8,10],create_date:10,created:[0,4,5,8,9,10],creation:[8,9],crt:14,current:[1,10],d48d3d1a:3,data:13,date:[0,3,8,9,10],def:[1,2,5,8],defens:[8,9,10],defin:[1,2,5,10],demonstr:[0,1,2,3,4,5,6],depend:1,deriv:[1,2,5,8],descript:10,destination_top:[1,2,5],detection_callback:[1,8,9],detection_count:10,detection_dict:[1,8],detection_time:10,detectioncallback:[1,8,9,10],detectioneventprop:[8,10],detectiontim:[1,8,10],determin:[3,9,10,13],dict:[1,2,4,5,8,9,10],dictionari:[1,2,4,5,8,9,10],did:6,digest:10,directori:14,displai:[0,1,2,3,4,5,6],distinct:[5,8],distribut:14,document:9,dump:[0,1,2,4,5,8],dxl:[0,1,2,3,4,5,6,7,8,9],dxl_client:9,dxlclient:[0,1,2,3,4,5,6,8,14],dxltieclient:[0,1,2,3,4,5,6],each:[3,4,8,9,10],eb5e2b9dc51817a086d7b97eb52410ab:[1,8],eicar:4,encod:10,encount:[2,8,10],enforc:1,engin:10,ensure:1,ent_rep:[0,9,10],ent_rep_attrib:[0,9,10],enterpris:[0,2,5,6,8,9,10],enterprise:[0,9,10],enterprise_size:10,enterpriseattrib:10,entri:[4,8,9],epo:[3,5],epoch:[1,8,10],epoch_tim:10,epochmixin:10,equival:3,especi:6,establish:[0,1,2,3,4,5,6],etc:[8,9,10,13],evalu:10,event:[1,2,5,8,9,10,11],eventcallback:8,examin:0,except:[6,9],exchang:[0,1,2,3,4,5,6,7,8,9],exe:[1,2,8],execut:[0,1],exist:[0,6,10],extend:10,f2c7bb8acc97f92e987a2d4087d01221:5,f2c7bb8acc97f92e987a2d4087d021b1:[3,4,6,8,9],f98c55bdddf7:14,fabric:[0,1,2,3,4,5,6,8,12,13,14],featur:[9,13],febd12facfd4:14,field:0,file:[0,1],file_md5:[0,3],file_name_count:10,file_sha1:[0,3],file_sha256:[0,3],fileenterpriseattrib:[0,8,9,10],filegtiattrib:[8,9,10],filenam:[6,9],fileprovid:[0,4,8,9,10],filerepchangeeventprop:[8,10],filereputationprop:10,files:10,first:[0,1],first_contact:[0,10],first_instance_callback:[2,8,9],first_instance_dict:[2,8],firstinst:[2,8],firstinstancecallback:[2,8,9,10],firstinstanceeventprop:[8,10],firstrefprop:[3,9,10],focu:[9,13],focus_malware2:1,folder:12,follow:[0,1,2,3,4,5,6,8,9,10,14],forev:[1,2,5],format:[9,10,13],found:[0,2,4,8,9,10],from:[1,2,5,8,9,10],full:0,further:0,gam:10,gam_score:10,gatewai:10,get_certificate_first_refer:[9,10],get_certificate_reput:[0,9],get_file_first_refer:[3,9,10],get_file_reput:[0,4,9],get_vers:7,github:[6,9,12],global:[0,4,8,9,10],good:4,group:[6,9],gti:[0,4,5,8,9,10],gti_rep:0,gtiattrib:10,guid:[3,10],guidelin:1,handl:[1,2,5,8],has_file_overrides:10,hash:[0,1,2,3,4,5,6,8,9,10],hashes:10,hashtyp:[0,3,4,6,8,9,10],hasn:10,have:[3,9,10,13],helper:10,hex:[8,9,10],high:[9,13],highest:10,how:9,howev:1,html:[6,9,12],http:[6,9,12],identifi:[0,3,4,5,6,8,9,10],includ:[1,2,3,8,10],include:10,increas:9,indent:[0,1,2,4,5,8],indic:[1,2,4,5,8,10],inform:[0,1,2,3,5,8,9,10,14],informat:[3,8],instal:[10,12],instanc:[0,1],instead:8,instruct:[6,9],intellig:[0,1,2,3,4,5,6,7,8,9,10],invocat:11,invok:[0,3,4,6,8,9],invoke:8,is_prevalent:10,iter:3,json:[0,1,2,4,5,8],kei:[4,8,9,10,14],known:[4,5,6,9],known_malicious:10,known_trusted:[6,9,10],known_trusted_installer:10,last:10,last_detection_time:10,layer:13,least:9,left:[3,5],level:[0,4,6,8,9,10,13],lib:12,librari:[1,4,7],likelihood:9,line:[1,2,5],list:[3,4,5,8,9,10],listen:[1,2,5],local:[1,2,8,10],local_reputation:10,local_tim:10,local_time_str:10,localreput:[1,8,10],locat:[9,12,14],longer:9,lookup:[3,9],lower:[9,13],lowest:10,made:[0,3,4],mai:[1,8],major:[0,1,2,3,4,5,6,10],make:1,malici:10,malwar:10,manag:[1,9,13],mar:[6,9],marsendauth:[6,9],max_local_rep:10,maximum:[9,10],mcafe:[1,2,5,6,8,9,12,14],mcafee:[0,1,2,3,4,5,6,7,8,9,10],md5:[0,1,2,3,4,5,6,8,9,10],messag:[6,8,9,13],method:[0,1,2,3,4,5,6,8,9,10],might:1,might_be_malicious:10,might_be_trusted:10,min_local_rep:10,minimum:10,minor:10,mixin:10,modifi:3,moment:10,more:[9,10,14],morph:[2,8],most_likely_malicious:10,most_likely_trusted:10,must:[6,8,9,12,14],mwg:10,mybrok:14,mybroker2:14,mydetectioncallback:[1,8],myfirstinstancecallback:[2,8],myreputationchangecallback:[5,8],name:[1,2,8,9,10],navig:[3,5],ncertif:0,new_reputations:10,newreput:[5,8,10],next:5,nfull:0,none:[9,12],not_set:10,note:[5,8],notepad:[4,6,9],nsystem:3,number:[9,10],numer:10,object:9,observ:10,occur:[1,5,8,10],old:[5,8],old_reputations:10,oldreput:[5,8,10],on_detect:[1,8],on_ev:8,on_first_inst:[2,8],on_reputation_chang:[5,8],once:[0,1,2,3,4,5,6],open:[3,5],opendxl:[4,6,9,12,14],oper:6,option:[6,9,10],order:[10,14],origin:8,original_ev:[1,2,5,8],original_response:10,other:9,out:0,output:0,outsid:1,overal:10,overrid:[1,2,5,8,10],overridden:[8,10],overview:11,packag:0,page:[1,3,5,6,9,14],param:9,paramet:[8,9,10],parent:10,parent_avg_local_rep:10,parent_file_reps:10,parent_max_local_rep:10,parent_min_local_rep:10,pars:10,part:[6,9],particular:[1,2,4,5,6,8,9,10],pass:9,past:3,patch:10,perform:[0,8],permiss:9,pip:12,place:[6,9],point:[1,2,5],polici:1,popul:14,preval:[0,9,10],prevalence:[0,9,10],previou:[5,8,10],previous:[2,6],print:[0,1,2,3,4,5,6,8],prior:3,privatekei:14,product:12,properli:1,properti:[0,8,9,10],prove:1,provid:[4,6,8,9,10,13],provider_id:10,providerid:[0,4,5,8,9,10],public_key_sha1:[9,10],publickeysha1:[8,10],pull:0,purpos:[9,13],py2:12,pydoc:[6,9,12],python:[0,1,2,3,4,5,6,8,9,10],queri:[0,4],query_limit:9,raw:10,receiv:[0,1,2,4,5,8,9],refactor:4,referenc:[3,9,10],regard:[8,10],regist:[1,2,5,8,9],relationship:10,relationships:10,remedi:[1,8,10],remediation_action:10,remediationact:[1,8,10],remov:5,remove_certificate_reputation_change_callback:9,remove_file_detection_callback:9,remove_file_first_instance_callback:9,remove_file_reputation_change_callback:9,rep_change_callback:[5,8,9],rep_change_dict:[5,8],repchang:5,repchangeeventprop:[8,10],report:10,repositori:6,represent:[8,9,10],reputationchangecallback:[5,8,9,10],reputationprop:[0,8,9,10],reputations_dict:[0,4,9,10],request:[0,4,10],requir:9,respons:[0,1,4,6,8,9,10],response_timeout:9,result:[3,4,9,10],retriev:[0,3,4,9],revok:10,revoked:10,safest:5,same:[3,4,5,6,9,14],sampl:[0,1,2,3,4,5,6],sandbox:10,sandbox_score:10,satisfi:12,scope:1,score:10,script:[0,1,2,3,4,5,6,12],sdk:[0,1,2,3,4,5,6,14],search:[3,5],second:[4,9],section:[5,8],secur:10,see:[0,1,2,3,4,5,6,8,9,10,14],seem:10,seen:[2,10],select:[1,3,5],self:[1,2,5,8],send:[6,9],sent:5,separ:[0,1,2,4,5,8],server:[6,8,9,10,12],server_version:10,servic:[0,1,2,3,4,5,6,9,11],set:[1,3,5],set_certificate_reput:9,set_file_reput:[6,9],sha1:[0,1,2,3,4,5,6,8,9,10],sha256:[0,1,2,3,4,6,8,9,10],sha:[3,8,9,10],should:[0,1,2,3,4,5,8],show:9,shown:[0,1,2,3,4,5,6,8,9],sign:10,similar:[0,1,2,3,4,5],simpl:3,simpli:5,simplifi:8,sleep:[1,2,5],sort_kei:[0,1,2,4,5,8],specif:[0,6,8,9,10,13],specifi:[9,10],standard:[4,8,9,10],step:[0,1,2,3,4,5,6,8,14],str:0,string:[8,10],structur:10,sub:14,subject:10,succe:6,succeed:6,suspici:10,swap:[6,9],system:[1,2,3,8,9,10],system_guid:[3,10],system_list:[3,9],tab:[3,5],take:10,tenterpris:0,test:[1,4],test_malware:8,tfirst:0,tglobal:0,them:3,thi:[0,1,2,3,4,5,6,8,9,10,13,14],those:14,threat:[0,1,2,3,4,5,6,7,8,9,10],threshold:1,tie:[0,1,2,3,4,5,6,7,8,9,10],tie_client:[0,1,2,3,4,5,6,8,9],tieclient:[0,1,2,3,4,5,6,8,9,10,13],time:[0,1,2,3,5,8,9,10],to_aggregate_tupl:10,to_localtim:10,to_localtime_str:[0,3,10],to_version_str:10,to_version_tupl:10,top:8,topic:[1,2,5,6,8,9,13],transform:8,trigger:[1,8,10],truncat:10,truncated:10,trust:[0,4,5,6,8,9,10],trust_level:[0,9,10],trustlevel:[0,4,5,6,8,9,10],tupl:10,two:4,type:[8,9,10],typic:[3,9],uniqu:10,unknown:10,unpack:12,unregist:9,updat:9,update_time:10,updatetim:[5,8,10],usag:8,usage:[8,9,10],use:[10,12],user:[9,13],util:10,valid:3,valu:[0,1,3,4,5,6,8,9,10],verdict:10,version:[7,10],version_attrib:10,version_str:10,version_tupl:10,via:[5,6,8,9,10],viru:[4,10],wai:3,wait:[1,2,5,9],want:3,web:10,were:10,what:3,when:[1,2,3,5,8],where:[3,9,10,13],whether:10,which:[0,1,2,3,4,5,6,8,9],whl:12,whose:[4,5,8,10],within:[0,1,2,3,5,8,10],without:[9,12,13],wrap:13,wrapper:[9,13],www:12,yet:10,you:3,your:1,zip:12},titles:["Advanced Get Reputation Example","Basic Detection Callback Example","Basic First Instance Callback Example","Basic First References Example","Basic Get Reputation Example","Basic Reputation Change Callback Example","Basic Set Reputation Example","dxltieclient package","dxltieclient.callbacks module","dxltieclient.client module","dxltieclient.constants module","McAfee Threat Intelligence Exchange (TIE) DXL Client Library Documentation","Library Installation","Overview","Samples Configuration"],titleterms:{"new":2,advanc:0,api:11,basic:[1,2,3,4,5,6],callback:[1,2,5,8],chang:5,client:[9,11],configur:14,constant:10,content:7,detail:[0,1,2,3,4,5,6],detect:[1,2],document:11,dxl:11,dxltieclient:[7,8,9,10],exampl:[0,1,2,3,4,5,6],exchang:11,execut:2,file:2,first:[2,3],forc:[1,5],get:[0,4],installat:[11,12],instanc:2,intellig:11,introduct:11,librari:[11,12],mcafee:11,modul:[7,8,9,10],output:[1,2,5],overview:13,packag:7,prerequisit:[0,1,2,3,4,5,6,12],python:11,refer:3,reput:[0,4,5,6],run:[0,1,2,3,4,5,6],sampl:[11,14],set:6,setup:3,submodul:7,threat:11,tie:11}})