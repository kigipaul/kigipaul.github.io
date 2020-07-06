---
title: DEVICE RESTFUL API
category: RESTFUL API
---

- [Device API](#device-api)
  - [GET /ENC/API/dev/info](#get-encapidevinfo)
  - [GET /ENC/API/dev/info/base](#get-encapidevinfobase)
  - [GET /ENC/API/dev/info/interfaces](#get-encapidevinfointerfaces)
  - [GET /ENC/API/dev/info/interfaces/base](#get-encapidevinfointerfacesbase)
  - [GET /ENC/API/dev/info/status/base](#get-encapidevinfostatusbase)
  - [GET /ENC/API/dev/info/alarm/base](#get-encapidevinfoalarmbase)
  - [GET /ENC/API/dev/info/members/base](#get-encapidevinfomembersbase)
  - [GET /ENC/API/dev/info/policer/base](#get-encapidevinfopolicerbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;](#get-encapidevinfoltdev_idgt)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/interfaces](#get-encapidevinfoltdev_idgtinterfaces)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/interfaces/base](#get-encapidevinfoltdev_idgtinterfacesbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/status/base](#get-encapidevinfoltdev_idgtstatusbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/alarm/base](#get-encapidevinfoltdev_idgtalarmbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/members/base](#get-encapidevinfoltdev_idgtmembersbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/policer/base](#get-encapidevinfoltdev_idgtpolicerbase)
  - [GET /ENC/API/dev/info/&lt;dev_id&gt;/resource_usage](#get-encapidevinfoltdev_idgtresource_usage)
  - [PUT /ENC/API/dev/info/nickname](#get-encapidevinfonickname)
  - [GET /ENC/API/dev/iccp_peer](#get-encapideviccp_peer)
  - [GET /ENC/API/dev/iccp_peer/base](#get-encapideviccp_peerbase)
  - [GET /ENC/API/dev/iccp_peer/&lt;dev_id&gt;](#get-encapideviccp_peerltdev_idgt)
  - [GET /ENC/API/dev/iccp_peer/base/&lt;dev_id&gt;](#get-encapideviccp_peerbaseltdev_idgt)
  - [PUT /ENC/API/dev/iccp_peer](#put-encapideviccp_peer)
  - [GET /ENC/API/dev/evpn](#get-encapidevevpn)
  - [GET /ENC/API/dev/evpn/base](#get-encapidevevpnbase)
  - [GET /ENC/API/dev/evpn/&lt;dev_id&gt;](#get-encapidevevpnltdev_idgt)
  - [GET /ENC/API/dev/evpn/base/&lt;dev_id&gt;](#get-encapidevevpnbaseltdev_idgt)
  - [PUT /ENC/API/dev/evpn](#put-encapidevevpn)
  - [GET /ENC/API/dev/esi_ae](#get-encapidevesi_ae)
  - [PUT /ENC/API/dev/esi_ae](#put-encapidevesi_ae)
  - [PUT /ENC/API/dev/mc_ae](#put-encapidevmc_ae)
  - [GET /ENC/API/dev/ip_fabric](#get-encapidevip_fabric)
  - [PUT /ENC/API/dev/ip_fabric](#put-encapidevip_fabric)
  - [PUT /ENC/API/dev/custom_setting](#put-encapidevcustom_setting)
  - [DELELE /ENC/API/dev/custom_setting/&lt;class_name&gt;](#delete-encapidevcustom_settingltclass_namegt)
  - [GET /ENC/API/dev/model](#get-encapidevmodel)
  - [GET /ENC/API/dev/model/&lt;model_name&gt;](#get-encapidevmodelltmodel_namegt)
  - [GET /ENC/API/dev/topology](#get-encapidevtopology)
  - [GET /ENC/API/dev/topology/gre](#get-encapidevtopologygre)
  - [GET /ENC/API/dev/topology/ip_fabric](#get-encapidevtopologyip_fabric)
  - [GET /ENC/API/dev/ip_mac_search](#get-encapidevip_mac_search)
  - [PUT /ENC/API/dev/ip_mac_search/&lt;search_id&gt;](#put-encapidevip_mac_searchltsearch_idgt)
  - [DELETE /ENC/API/dev/ip_mac_search/&lt;search_id&gt;](#delete-encapidevip_mac_searchltsearch_idgt)
  - [DELETE /ENC/API/dev/ip_mac_search/&lt;search_id&gt;/source/&lt;source_id&gt;](#delete-encapidevip_mac_searchltsearch_idgtsourcesource_idgt)
  - [GET /ENC/API/dev/tarffic](#get-encapidevtarffic)
  - [GET /ENC/API/dev/traffic/&lt;dev_id&gt;](#get-encapidevtrafficltdev_idgt)
  - [GET /ENC/API/dev/traffic/&lt;dev_id&gt;/interface](#get-encapidevtrafficltdev_idgtinterface)
  - [GET /ENC/API/dev/traffic/&lt;dev_id&gt;/interface/&lt;if_name&gt;](#get-encapidevtrafficltdev_idgtinterfaceltif_namegt)
  - [POST /ENC/API/dev/initialize](#post-encapidevinitialize)
  - [PUT /ENC/API/dev/initialize](#put-encapidevinitialize)
  - [PUT /ENC/API/dev/register](#put-encapidevregister)
  - [GET /ENC/API/dev/init\_script/&lt;dev_id&gt;](#get-encapidevinit\_scriptltdev_idgt)
  - [GET /ENC/API/dev/vlan](#get-encapidevvlan)
  - [GET /ENC/API/vlan/&lt;vlan_tag&gt;](#get-encapivlanltvlan_taggt)
  - [GET /ENC/API/dev/routing_table](#get-encapidevrouting_table)
  - [DELETE /ENC/API/dev/&lt;dev_id&gt;](#delete-encapidevltdev_idgt)
  - [PUT /ENC/API/dev/&lt;dev_id&gt;/shutdown](#put-encapidevltdev_idgtshutdown)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/config_backup](#get-encapidevltdev_idgtconfig_backup)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;](#get-encapidevltdev_idgtconfig_backupltconfig_idgt)
  - [PUT /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;](#put-encapidevltdev_idgtconfig_backupltconfig_idgt)
  - [DELETE /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;](#delete-encapidevltdev_idgtconfig_backupltconfig_idgt)
  - [PUT /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;/name](#put-encapidevltdev_idgtconfig_backupltconfig_idgt/name)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/report](#get-encapidevltdev_idgtreport)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/report/status](#get-encapidevltdev_idgtreportstatus)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/vlans](#get-encapidevltdev_idgtvlans)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/bgp](#get-encapidevltdev_idgtbgp)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/probe_result](#get-encapidevltdev_idgtprobe_result)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/ospf](#get-encapidevltdev_idgtospf)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/mirror](#get-encapidevltdev_idgtmirror)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/mirror/&lt;name&gt;](#get-encapidevltdev_idgtmirrorltnamegt)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/ae](#get-encapidevltdev_idgtae)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/ae/&lt;name&gt;](#get-encapidevltdev_idgtaeltnamegt)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/mc_ae](#get-encapidevltdev_idgtmc_ae)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/esi_ae](#get-encapidevltdev_idgtesi_ae)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/acl](#get-encapidevltdev_idgtacl)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/routing_table](#get-encapidevltdev_idgtrouting_table)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/pbr](#get-encapidevltdev_idgtSDWANpbr)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/qos](#get-encapidevltdev_idgtSDWANqos)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/routing_instance](#get-encapidevltdev_idgtSDWANrouting_instance)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/forwarding_class](#get-encapidevltdev_idgtSDWANforwarding_class)
  - [GET /ENC/API/dev/zone/addressbook](#get-encapidevzoneaddressbook)
  - [GET /ENC/API/dev/zone/host_policy](#get-encapidevzonehost_policy)
  - [GET /ENC/API/dev/policy/app](#get-encapidevpolicyapp)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/zone](#get-encapidevltdev_idgtzone)
  - [GET /ENC/API/dev/&lt;dev_id&gt;/policy](#get-encapidevltdev_idgtpolicy)
  - [GET /ENC/API/dev/firewall_filter_match](#get-encapidevfirewall_filter_match)
  - [POST /ENC/API/dev/firewall_filter_match/check/is_exist](#post-encapidevfirewall_filter_matchcheckis_exist)
  - [GET /ENC/API/dev/firewall_filter_match/&lt;match_id&gt;/is_used](#get-encapidevfirewall_filter_matchltmatch_idgtis_used)
  - [PUT /ENC/API/dev/firewall_filter_match/&lt;match_id&gt;/name](#put-encapidevfirewall_filter_matchltmatch_idgtname)
  - [GET /ENC/API/dev/task](#get-encapidevtask)
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasklttask_idgt)
  - [GET /ENC/API/dev/task/&lt;task_id&gt;/download](#get-encapidevtasktask_iddownload)
  - [POST /ENC/API/dev/task/direct_commit](#post-encapidevtaskdirect_commit)
- [Commit_task Action name:](#commit_task-action-name)
  - [rollback](#rollback)
  - [initialize_interfaces](#initialize_interfaces)
  - [set_interfaces_status](#set_interfaces_status)
  - [set_interfaces_mode](#set_interfaces_mode)
  - [set_interfaces_desc](#set_interfaces_desc)
  - [set_interfaces_duplex](#set_interfaces_duplex)
  - [set_interfaces_speed](#set_interfaces_speed)
  - [set_interfaces_mtu](#set_interfaces_mtu)
  - [set_interfaces_negotiation](#set_interfaces_negotiation)
  - [set_interfaces_rstp](#set_interfaces_rstp)
  - [set_interfaces_ipaddresses](#set_interfaces_ipaddresses)
  - [del_interfaces_ipaddresses](#del_interfaces_ipaddresses)
  - [add_vlans](#add_vlans)
  - [set_vlans](#set_vlans)
  - [set_vlans_members](#set_vlans_members)
  - [del_vlans_members](#del_vlans_members)
  - [del_vlan_range_members](#del_vlan_range_members)
  - [del_vlans](#del_vlans)
  - [set_vlan_interfaces](#set_vlan_interfaces)
  - [del_vlan_interfaces](#del_vlan_interfaces)
  - [del_vlan_interfaces_vga](#del_vlan_interfaces_vga)
  - [del_vlan_interfaces_mac_address](#del_vlan_interfaces_mac_address)
  - [add_ae](#add_ae)
  - [set_ae](#set_ae)
  - [del_ae](#del_ae)
  - [add_mirrors](#add_mirrors)
  - [set_mirrors](#set_mirrors)
  - [del_mirrors](#del_mirrors)
  - [add_addressbooks](#add_addressbooks)
  - [set_addressbooks](#set_addressbooks)
  - [del_addressbooks](#del_addressbooks)
  - [add_zones](#add_zones)
  - [set_zones](#set_zones)
  - [del_zones](#del_zones)
  - [add_policies](#add_policies)
  - [set_policies](#set_policies)
  - [del_policies](#del_policies)
  - [change_policies_sequence](#change_policies_sequence)
  - [add_full_ospf](#add_full_ospf)
  - [join_ospf](#join_ospf)
  - [del_ospf](#del_ospf)
  - [set_policer](#set_policer)
  - [del_policer](#del_policer)
  - [add_firewall_filter](#add_firewall_filter)
  - [del_firewall_filter](#del_firewall_filter)
  - [set_acl](#set_acl)
  - [set_policy_base_routing](#set_policy_base_routing)
  - [set_qos_policy](#set_qos_policy)
  - [change_firewall_filter_term_sequence](#change_firewall_filter_term_sequence)
  - [add_firewall_filter_match](#add_firewall_filter_match)
  - [set_firewall_filter_match](#set_firewall_filter_match)
  - [del_firewall_filter_match](#del_firewall_filter_match)
  - [set_qos_scheduler](#set_qos_scheduler)
  - [add_iccp_peer](#add_iccp_peer)
  - [del_iccp_peer](#del_iccp_peer)
  - [add_mc_ae](#add_mc_ae)
  - [set_mc_ae](#set_mc_ae)
  - [del_mc_ae](#del_mc_ae)
  - [add_esi_ae](#add_esi_ae)
  - [set_esi_ae](#set_esi_ae)
  - [del_esi_ae](#del_esi_ae)
  - [add_ip_fabric](#add_ip_fabric)
  - [set_ip_fabric](#set_ip_fabric)
  - [del_ip_fabric](#del_ip_fabric)
  - [add_routing_instance_vrf](#add_routing_instance_vrf)
  - [set_routing_instance_vrf](#set_routing_instance_vrf)
  - [del_routing_instance_vrf](#del_routing_instance_vrf)
  - [add_routing_table_route](#add_routing_table_route)
  - [set_routing_table_route](#set_routing_table_route)
  - [del_routing_table_route](#del_routing_table_route)

## Device API
### GET /ENC/API/dev/info

Get all devices information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "id": <int> # device id,
                "hostname": <str> # device hostname,
                "serial": <str> # device serial number,
                "model": <str|None> # device model, if not connect maybe be None
                "version": <str|None> # device os version, if not connect maybe be None
                "dev_type": <str:switch,router,firewall|None> # device type, if not connect maybe be None
                "vendor": <str:juniper,cisco|None> # device vendor, if not connect maybe be None
                "desc": <str>  # default: ""
                "ip": <str> # device ip,
                "lldp": <bool> # device lldp status,
                "snmp": <bool> # device snmp status,
                "vc": <bool> # device virtual chassis status,
                "gateway": <str> # device gateway ip,
                "status": <bool> # device connect status,
                "register": <bool> # device connect status,
                "interfaces": {
                  "ge": {
                    <board_num>: {
                      <slot_num>: [
                        {
                          "name": <str> # interface name, format: [gx]e-.*,
                          "macaddr": <str> # interface mac address,
                          "mode": <str:trunk,access,''> # interface mode,
                          "type": <str> # interface type, L2 or L3, and is fiber
                          "duplex": <str> # interface duplex,
                          "speed": <str> # interface speed,
                          "mtu": <int> # interface mtu,
                          "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                          "link_status": <bool> # interface link status,
                          "admin_status": <bool> # interface admin status,
                          "vlan_tag": [<int>] # interface vlan tag,
                          "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                          "ae_status": <str> # interface ae status, if it have ae, then be ae name,
                          "iccp_peer": <bool> # if it is used for iccp_peer
                          "desc": <str> # interface desc
                          "ip": [<str>] # interface ip list
                          "family": [<str>] # interface family list
                          "comment": <str> # comment
                          "zone": <str> # interface zone name
                          "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "iccp_peer": <bool> # if it is used for iccp_peer
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                          "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                          },
                          "fiber": {
                            "serial": <str>,
                            "tx": {
                              "power": <float: current value>,
                              "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                              "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              "dbm":{
                                "power": <float: current value>,
                                "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                                "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              }
                            },
                            "rx": {
                              "power": <float: current value>,
                              "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                              "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              "dbm":{
                                "power": <float: current value>,
                                "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                                "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  "ae": [
                    {
                      "name": <str> # interface name, format: ae[0-9]*
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str> # interface duplex,
                      "speed": <str> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "admin_status": <bool> # interface admin status,
                      "vlan_tag": <int> # interface vlan tag,
                      "mirror_status": [] # Must zero list,
                      "iccp_peer": <bool> # if it is used for iccp_peer,
                      "ae_status": <str> # Must the same name,
                      "desc": <str> # interface desc
                      "ip": <str> # interface ip list
                      "family": [<str>] # interface family list
                      "zone": <str>, # interface zone name
                      "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "iccp_peer": <bool> # if it is used for iccp_peer,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                      "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                        }
                    }
                  ],
                  "vlan": [
                    {
                      "name": <str> # interface name, format: <vlan|igx>.<tag>
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str:> # interface duplex,
                      "speed": <str:> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "admin_status": <bool> # interface admin status,
                      "iccp_peer": <bool> # if it is used for iccp_peer,
                      "vlan_tag": <int> # interface vlan tag,
                      "mirror_status": [] # Must zero list,
                      "ae_status": "" # Must be "",
                      "desc": <str> # interface desc
                      "ip": [<str>] # interface ip list
                      "family": [<str>] # interface family list
                      "zone": <str> # interface zone name
                      "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "iccp_peer": <bool> # if it is used for iccp_peer,
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                      "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                        }
                    }
                  ]
                },
                "dev_status": [
                  {
                    "re_name": <str>,
                    "redundant_status": <str>, # redundant level: primary, secondary ...
                    "info": [
                      {
                        "part": <str> # util part, ex: CPU,FANS,POWER
                        "type": <str> # util name, ex: FAN1, FAN2
                        "status": <str> # util status, ex: OK
                        "temp": <str> # if no temp, this field value will be ""
                        "comment": <str> # if no comment, this field value will be ""
                      }
                    ]
                  }
                ],
                "dev_members": [
                  {
                    "name": <str> # member item name
                    "model": <str> # member model
                    "serial": <str> # member serial
                  }
                ],
                "alarm": [
                  {
                    "alarm_time": <str: YYYY-mm-dd HH:MM:SS CST>,
                    "alarm_class": <str>,
                    "alarm_desc":<str>
                  }
                ],
                "lte_interfaces": [
                  {
                    "name": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "rx_bps": <int>,
                    "tx_bps": <int>,
                    "ipv4": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "ipv6": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "service": {
                      "status": <str>,
                      "type": <str>,
                      "mode": <str>
                    },
                    "desc": <str>,
                    "modem_status": <str>
                    "band": <str>,
                    "network": <str>,
                    "imsi": <str>,
                    "rsrq": <str>,
                    "rsrp": <str>,
                    "sinr": <str>,
                    "snr": <str>,
                    "zone": <str>
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": <str>,
                    "desc": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "keepalive_adj_status": <bool>,
                    "keepalive_configured_status": <bool>,
                    "link_address": <str>,
                    "mtu": <int>,
                    "ip_addresses": [<str>],
                    "policer": {  # If not set, it will no data
                      "in": {
                        "bandwidth": <int>,
                        "bandwidth_unit": <str: "M"|"G">,
                        "byte_count": <int>,
                        "packet_count": <int>
                      },
                      "out": {
                        "bandwidth": <int>,
                        "bandwidth_unit": <str: "M"|"G">,
                        "byte_count": <int>,
                        "packet_count": <int>
                      }
                    },
                    "zone": <str> # zone name
                  }
                ]
              },

            ]

      Example:
            [
              {
                "id": 1,
                "hostname": "juniper1",
                "serial": "CW0211331650",
                "model": "EX2200-24T-4G",
                "version": "12.3R10.2",
                "dev_type": "switch",
                "vendor": "juniper",
                "desc": "",
                "ip": "192.168.20.115/24",
                "lldp": true,
                "snmp": false,
                "vc": true,
                "gateway": "192.168.20.1",
                "status": 1,
                "register": 1,
                "interfaces": {
                  "ge": {
                    "0": {
                      "0": [
                        {
                          "name": "ge-0/0/0",
                          "macaddr": "2c:21:72:96:61:c3",
                          "mode": null,
                          "type": "L2",
                          "duplex": "auto",
                          "speed": "1000",
                          "mtu": 1514,
                          "negotiation": 1,
                          "iccp_peer": false,
                          "link_status": 1,
                          "admin_status": 1,
                          "vlan_tag": [],
                          "mirror_status": [],
                          "ae_status": "",
                          "desc": "",
                          "comment": "",
                          "ip": [],
                          "family": []
                          "zone": "",
                          "logic_interfaces": [
                            {
                              "name": "ge-0/0/0.0",
                              "mode": "trunk",
                              "vlan_tag": [200],
                              "iccp_peer": true,
                              "mirror_status": ["m_out_ge-0/0/23", "egress"],
                              "ip": [],
                              "family": ["eth-switch"]
                              "policer": {
                                "in": {
                                  "bandwidth": 5,
                                  "bandwidth_unit": "M",
                                  "byte_count": 0,
                                  "packet_count": 0
                                }
                              },
                              "zone": ""
                            }
                          ],
                          "policer": {}
                        }
                      ]
                    }
                  },
                  "ae": [],
                  "vlan": []
                },
                "dev_status": [
                  {
                    "re_name": "node0",
                    "redundant_status": "primary",
                    "info": [
                      {
                        "part": "Power",
                        "type": "FPC 0 Power Supply 0",
                        "status": "OK"
                      },
                      {
                        "part": "Temp",
                        "type": "FPC 0 CPU",
                        "status": "OK",
                        "temp": "29 degrees C / 84 degrees F"
                      }
                      {
                        "part": "Fans",
                        "type": "FPC 0 Fan 1",
                        "status": "OK"
                      }
                    ]
                  }
                ],
                "dev_members": [
                  {
                    "name": "FPC 0",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  },
                  {
                    "name": "FPC 1",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  }
                ],
                alarm":[
                  {
                    "alarm_time": "2018-11-21 15:55:55 CST",
                    "alarm_class": "Minor",
                    "alarm_desc": "Autorecovery information needs to be saved"
                  }
                ],
                "lte_interfaces":[
                  {
                    "name": "cl-1/0/0",
                    "link_status": true,
                    "admin_status": true,
                    "rx_bps": 370,
                    "tx_bps": 439,
                    "ipv4":{
                      "address": "10.184.132.123",
                      "gateway": "10.184.132.124",
                      "dns": "210.241.208.1"
                      },
                    "ipv6":{
                      "address": "2401:e180:8860:9ac0:c203:80ff:feb9:8d95",
                      "gateway": "2401:e180:8860:9ac0:34e5:beff:fe4d:2ef8",
                      "dns": "2401:e180:7fff:0:210:241:208:1"
                      },
                    "service":{"status": "Normal", "type": "PS", "mode": "LTE"},
                    "desc": "",
                    "modem_status": "Connected",
                    "band": "B7",
                    "network": "FET",
                    "imsi": "466011202028349",
                    "rsrp": "-90",
                    "rsrq": "-14",
                    "sinr": "N/A",
                    "snr": "N/A",
                    "zone": ""
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": "gr-0/0/0.1",
                    "desc": "",
                    "link_status": false,
                    "admin_status": true,
                    "keepalive_adj_status": false,
                    "keepalive_configured_status": true,
                    "link_address": "10.99.13.2:192.168.1.23",
                    "mtu": 1476,
                    "ip_addresses": ["10.99.13.2/30"],
                    "policer": {
                      "out": {
                        "bandwidth": 5,
                        "bandwidth_unit": "M",
                        "byte_count": 0,
                        "packet_count": 0
                      }
                    },
                    "zone": "trust"
                  }
                ]
              },
            ]

### GET /ENC/API/dev/info/base

Get all devices base information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "id": <int> # device id,
                "hostname": <str> # device hostname,
                "serial": <str> # device serial number,
                "model": <str|None> # device model, if not connect maybe be None
                "version": <str|None> # device os version, if not connect maybe be None
                "dev_type": <str:switch,router,firewall|None> # device type, if not connect maybe be None
                "vendor": <str:juniper,cisco|None> # device vendor, if not connect maybe be None
                "desc": <str>,
                "ip": <str> # device ip,
                "lldp": <bool> # device lldp status,
                "snmp": <bool> # device snmp status,
                "vc": <bool> # device virtual chassis status,
                "gateway": <str> # device gateway ip,
                "status": <bool> # device connect status,
                "register": <bool> # device connect status,
              }

            ]

      Example:
            [
              {
                "id": 1,
                "hostname": "juniper1",
                "serial": "CW0211331650",
                "model": "EX2200-24T-4G",
                "version": "12.3R10.2",
                "dev_type": "switch",
                "vendor": "juniper",
                "desc": "test desc",
                "ip": "192.168.20.115/24",
                "lldp": true,
                "snmp": false,
                "vc": true,
                "gateway": "192.168.20.1",
                "status": 1,
                "register": 1,
              }


### GET /ENC/API/dev/info/interfaces

Get all devices interface information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "id": <int> # device id,
                "hostname": <str> # device hostname,
                "serial": <str> # device serial number,
                "model": <str|None> # device model, if not connect maybe be None
                "version": <str|None> # device os version, if not connect maybe be None
                "status": <bool> # device connect status,
                "interfaces": {
                  "ge": {
                    <board_num>: {
                      <slot_num>: [
                        {
                          "name": <str> # interface name, format: [gx]e-.*,
                          "macaddr": <str> # interface mac address,
                          "mode": <str:trunk,access,''> # interface mode,
                          "type": <str> # interface type, L2 or L3, and is fiber
                          "duplex": <str> # interface duplex,
                          "speed": <str> # interface speed,
                          "mtu": <int> # interface mtu,
                          "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                          "link_status": <bool> # interface link status,
                          "admin_status": <bool> # interface admin status,
                          "iccp_peer": <bool> # if it is used for iccp_peer,
                          "vlan_tag": [<int>] # interface vlan tag,
                          "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                          "ae_status": <str> # interface ae status, if it have ae, then be ae name,
                          "desc": <str> # interface desc
                          "ip": [<str>] # interface ip list
                          "family": [<str>] # interface family list
                          "comment": <str> # comment
                          "zone": <str> # interface zone name
                          "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "iccp_peer": <bool> # if it is used for iccp_peer,
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                          "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                          },
                          "fiber": {
                            "serial": <str>,
                            "tx": {
                              "power": <float: current value>,
                              "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                              "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              "dbm":{
                                "power": <float: current value>,
                                "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                                "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              }
                            },
                            "rx": {
                              "power": <float: current value>,
                              "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                              "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              "dbm":{
                                "power": <float: current value>,
                                "alarm_threshold": [<float: alarm low value>, <float: alarm high value>],
                                "warn_threshold": [<float: warn low value>, <float: warn high value>],
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  "ae": [
                    {
                      "name": <str> # interface name, format: ae[0-9]*
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str> # interface duplex,
                      "speed": <str> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "iccp_peer": <bool> # if it is used for iccp_peer,
                      "admin_status": <bool> # interface admin status,
                      "vlan_tag": <int> # interface vlan tag,
                      "mirror_status": [] # Must zero list,
                      "ae_status": <str> # Must the same name,
                      "desc": <str> # interface desc
                      "ip": <str> # interface ip list
                      "family": [<str>] # interface family list
                      "zone": <str>, # interface zone name
                      "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "iccp_peer": <bool> # if it is used for iccp_peer,
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                      "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                        }
                    }
                  ],
                  "vlan": [
                    {
                      "name": <str> # interface name, format: <vlan|igx>.<tag>
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str> # interface duplex,
                      "speed": <str> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "admin_status": <bool> # interface admin status,
                      "iccp_peer": <bool> # if it is used for iccp_peer,
                      "vlan_tag": <int> # interface vlan tag,
                      "mirror_status": [] # Must zero list,
                      "ae_status": "" # Must be "",
                      "desc": <str> # interface desc
                      "ip": [<str>] # interface ip list
                      "family": [<str>] # interface family list
                      "zone": <str> # interface zone name
                      "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode,
                              "vlan_tag": [<int>] # interface vlan tag,
                              "iccp_peer": <bool> # if it is used for iccp_peer,
                              "mirror_status": <list:(mirror_name, mirror_type)> # interface mirror_status,
                              "ip": [<str>] # interface ip list
                              "family": [<str>] # interface family list
                              "policer": {  # If not set, it will no data
                                "in": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                },
                                "out": {
                                  "bandwidth": <int>,
                                  "bandwidth_unit": <str: "M"|"G">,
                                  "byte_count": <int>,
                                  "packet_count": <int>
                                }
                              },
                              "zone": <str> # interface zone name
                            }
                          ],
                      "policer": {  # If not set, it will no data
                            "in": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                            },
                            "out": {
                              "bandwidth": <int>,
                              "bandwidth_unit": <str: "M"|"G">,
                              "byte_count": <int>,
                              "packet_count": <int>
                           }
                        }
                    }
                  ]
                },
                "lte_interfaces": [
                  {
                    "name": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "rx_bps": <int>,
                    "tx_bps": <int>,
                    "ipv4": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "ipv6": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "service": {
                      "status": <str>,
                      "type": <str>,
                      "mode": <str>
                    },
                    "desc": <str>,
                    "modem_status": <str>
                    "band": <str>,
                    "network": <str>,
                    "imsi": <str>,
                    "rsrq": <str>,
                    "rsrp": <str>,
                    "sinr": <str>,
                    "snr": <str>,
                    "zone": <str>
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": <str>,
                    "desc": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "keepalive_adj_status": <bool>,
                    "keepalive_configured_status": <bool>,
                    "link_address": <str>,
                    "mtu": <int>,
                    "ip_addresses": [<str>],
                    "policer": {  # If not set, it will no data
                      "in": {
                        "bandwidth": <int>,
                        "bandwidth_unit": <str: "M"|"G">,
                        "byte_count": <int>,
                        "packet_count": <int>
                      },
                      "out": {
                        "bandwidth": <int>,
                        "bandwidth_unit": <str: "M"|"G">,
                        "byte_count": <int>,
                        "packet_count": <int>
                      }
                    },
                    "zone": <str> # zone name
                  }
                ]
              },

            ]

      Example:
            [
              {
                "id": 1,
                "hostname": "juniper1",
                "serial": "CW0211331650",
                "model": "EX2200-24T-4G",
                "version": "12.3R10.2",
                "status": 1,
                "interfaces": {
                  "ge": {
                    "0": {
                      "0": [
                        {
                          "name": "ge-0/0/0",
                          "macaddr": "2c:21:72:96:61:c3",
                          "mode": null,
                          "type": "L2",
                          "duplex": "auto",
                          "speed": "1000",
                          "mtu": 1514,
                          "negotiation": 1,
                          "iccp_peer": false,
                          "link_status": 1,
                          "admin_status": 1,
                          "vlan_tag": [],
                          "mirror_status": [],
                          "ae_status": "",
                          "desc": "",
                          "comment": "",
                          "ip": [],
                          "family": []
                          "zone": "",
                          "logic_interfaces": [
                            {
                              "name": "ge-0/0/0.0",
                              "mode": "trunk",
                              "vlan_tag": [200],
                              "iccp_peer": true,
                              "mirror_status": ["m_out_ge-0/0/23", "egress"],
                              "ip": [],
                              "family": ["eth-switch"]
                              "policer": {
                                "in": {
                                  "bandwidth": 5,
                                  "bandwidth_unit": "M",
                                  "byte_count": 0,
                                  "packet_count": 0
                                }
                              },
                              "zone": ""
                            }
                          ],
                          "policer": {}
                        }
                      ]
                    }
                  },
                  "ae": [],
                  "vlan": []
                },
                "dev_status": [
                  {
                    "re_name": "node0",
                    "redundant_status": "primary",
                    "info": [
                      {
                        "part": "Power",
                        "type": "FPC 0 Power Supply 0",
                        "status": "OK"
                      },
                      {
                        "part": "Temp",
                        "type": "FPC 0 CPU",
                        "status": "OK",
                        "temp": "29 degrees C / 84 degrees F"
                      }
                      {
                        "part": "Fans",
                        "type": "FPC 0 Fan 1",
                        "status": "OK"
                      }
                    ]
                  }
                ],
                "dev_members": [
                  {
                    "name": "FPC 0",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  },
                  {
                    "name": "FPC 1",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  }
                ],
                alarm":[
                  {
                    "alarm_time": "2018-11-21 15:55:55 CST",
                    "alarm_class": "Minor",
                    "alarm_desc": "Autorecovery information needs to be saved"
                  }
                ],
                "lte_interfaces":[
                  {
                    "name": "cl-1/0/0",
                    "link_status": true,
                    "admin_status": true,
                    "rx_bps": 370,
                    "tx_bps": 439,
                    "ipv4":{
                      "address": "10.184.132.123",
                      "gateway": "10.184.132.124",
                      "dns": "210.241.208.1"
                      },
                    "ipv6":{
                      "address": "2401:e180:8860:9ac0:c203:80ff:feb9:8d95",
                      "gateway": "2401:e180:8860:9ac0:34e5:beff:fe4d:2ef8",
                      "dns": "2401:e180:7fff:0:210:241:208:1"
                      },
                    "service":{"status": "Normal", "type": "PS", "mode": "LTE"},
                    "desc": "",
                    "modem_status": "Connected",
                    "band": "B7",
                    "network": "FET",
                    "imsi": "466011202028349",
                    "rsrp": "-90",
                    "rsrq": "-14",
                    "sinr": "N/A",
                    "snr": "N/A",
                    "zone": ""
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": "gr-0/0/0.1",
                    "desc": "",
                    "link_status": false,
                    "admin_status": true,
                    "keepalive_adj_status": false,
                    "keepalive_configured_status": true,
                    "link_address": "10.99.13.2:192.168.1.23",
                    "mtu": 1476,
                    "ip_addresses": ["10.99.13.2/30"],
                    "policer": {
                      "out": {
                        "bandwidth": 5,
                        "bandwidth_unit": "M",
                        "byte_count": 0,
                        "packet_count": 0
                      }
                    },
                    "zone": "trust"
                  }
                ]
              },
            ]

### GET /ENC/API/dev/info/interfaces/base

Get all devices interfaces base information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "id": <int> # device id,
                "interfaces": {
                  "ge": {
                    <board_num>: {
                      <slot_num>: [
                        {
                          "name": <str> # interface name, format: [gx]e-.*,
                          "macaddr": <str> # interface mac address,
                          "mode": <str:trunk,access,''> # interface mode,
                          "type": <str> # interface type, L2 or L3, and is fiber
                          "duplex": <str> # interface duplex,
                          "speed": <str> # interface speed,
                          "mtu": <int> # interface mtu,
                          "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                          "link_status": <bool> # interface link status,
                          "admin_status": <bool> # interface admin status,
                          "desc": <str> # interface desc
                          "comment": <str> # comment
                          "logic_interfaces": [ # logic interface list
                            {
                              "name": <str>,
                              "mode": <str:trunk,access,''> # interface mode
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "ae": [
                    {
                      "name": <str> # interface name, format: ae[0-9]*
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str> # interface duplex,
                      "speed": <str> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "admin_status": <bool> # interface admin status,
                      "desc": <str> # interface desc
                      "logic_interfaces": [ # logic interface list
                          {
                            "name": <str>,
                            "mode": <str:trunk,access,''> # interface mode
                          }
                      ]
                    }
                  ],
                  "vlan": [
                    {
                      "name": <str> # interface name, format: <vlan|igx>.<tag>
                      "macaddr": <str> # interface mac address,
                      "mode": <str:trunk,access,''> # interface mode,
                      "type": <str> # interface type, L2 or L3
                      "duplex": <str> # interface duplex,
                      "speed": <str> # interface speed,
                      "mtu": <int> # interface mtu,
                      "negotiation": <int> # interface 0=False, 1=True, -1=no-support
                      "link_status": <bool> # interface link status,
                      "admin_status": <bool> # interface admin status,
                      "desc": <str> # interface desc
                      "logic_interfaces": [# logic interface list
                        {
                          "name": <str>,
                          "mode": <str:trunk,access,''> # interface mode
                        }
                      ]
                    }
                  ]
                },
                "lte_interfaces": [
                  {
                    "name": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "rx_bps": <int>,
                    "tx_bps": <int>,
                    "ipv4": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "ipv6": {
                      "address": <str:ip address>,
                      "gateway": <str:gateway>,
                      "dns": <str: dns>
                    },
                    "service": {
                      "status": <str>,
                      "type": <str>,
                      "mode": <str>
                    },
                    "desc": <str>,
                    "modem_status": <str>
                    "band": <str>,
                    "network": <str>,
                    "imsi": <str>,
                    "rsrq": <str>,
                    "rsrp": <str>,
                    "sinr": <str>,
                    "snr": <str>
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": <str>,
                    "desc": <str>,
                    "link_status": <bool>,
                    "admin_status": <bool>,
                    "keepalive_adj_status": <bool>,
                    "keepalive_configured_status": <bool>,
                    "link_address": <str>,
                    "mtu": <int>
                  }
                ]
              }
            ]

      Example:
            [
              {
                "id": 1,
                "interfaces": {
                  "ge": {
                    "0": {
                      "0": [
                        {
                          "name": "ge-0/0/0",
                          "macaddr": "2c:21:72:96:61:c3",
                          "mode": "access",
                          "type": "L3",
                          "duplex": "auto",
                          "speed": "1000",
                          "mtu": 1514,
                          "negotiation": 1,
                          "link_status": 0,
                          "admin_status": 1,
                          "desc": "",
                          "comment": "",
                          "logic_interfaces": ["ge-0/0/0.0"]
                        }
                      ]
                    }
                  },
                  "ae": [],
                  "vlan": []
                },
                "lte_interfaces":[
                  {
                    "name": "cl-1/0/0",
                    "link_status": true,
                    "admin_status": true,
                    "rx_bps": 370,
                    "tx_bps": 439,
                    "ipv4":{
                      "address": "10.184.132.123",
                      "gateway": "10.184.132.124",
                      "dns": "210.241.208.1"
                      },
                    "ipv6":{
                      "address": "2401:e180:8860:9ac0:c203:80ff:feb9:8d95",
                      "gateway": "2401:e180:8860:9ac0:34e5:beff:fe4d:2ef8",
                      "dns": "2401:e180:7fff:0:210:241:208:1"
                      },
                    "service":{"status": "Normal", "type": "PS", "mode": "LTE"},
                    "desc": "",
                    "modem_status": "Connected",
                    "band": "B7",
                    "network": "FET",
                    "imsi": "466011202028349",
                    "rsrp": "-90",
                    "rsrq": "-14",
                    "sinr": "N/A",
                    "snr": "N/A"
                  }
                ],
                "gre_interfaces":[
                  {
                    "name": "gr-0/0/0.1",
                    "desc": "",
                    "link_status": false,
                    "admin_status": true,
                    "keepalive_adj_status": false,
                    "keepalive_configured_status": true,
                    "link_address": "10.99.13.2:192.168.1.23",
                    "mtu": 1476
                  }
                ]
              },
            ]

### GET /ENC/API/dev/info/status/base

Get all devices status base information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "dev_id": <int> # device id,
                "dev_status": [
                  {
                    "re_name": <str>,
                    "redundant_status": <str>, # redundant level: primary, secondary ...
                    "info": [
                      {
                        "part": <str> # util part, ex: CPU,FANS,POWER
                        "type": <str> # util name, ex: FAN1, FAN2
                        "status": <str> # util status, ex: OK
                        "temp": <str> # if no temp, this field value will be ""
                        "comment": <str> # if no comment, this field value will be ""
                      }
                    ]
                  }
                ]
              }
            ]

      Example:
            [
              {
                "dev_id": 1,
                "dev_status": [
                  {
                    "re_name": "node0",
                    "redundant_status": "primary",
                    "info": [
                      {
                        "part": "Power",
                        "type": "FPC 0 Power Supply 0",
                        "status": "OK"
                      },
                      {
                        "part": "Temp",
                        "type": "FPC 0 CPU",
                        "status": "OK",
                        "temp": "29 degrees C / 84 degrees F"
                      }
                      {
                        "part": "Fans",
                        "type": "FPC 0 Fan 1",
                        "status": "OK"
                      }
                    ]
                  }
                ]
              }
            ]

### GET /ENC/API/dev/info/alarm/base

Get all devices alarm base information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "dev_id": <int> # device id,
                "alarm": [
                  {
                    "alarm_time": <str: YYYY-mm-dd HH:MM:SS CST>,
                    "alarm_class": <str>,
                    "alarm_desc":<str>
                  }
                ]
              }
            ]

      Example:
            [
              {
                "dev_id": 1,
                "alarm":[
                  {
                    "alarm_time": "2018-11-21 15:55:55 CST",
                    "alarm_class": "Minor",
                    "alarm_desc": "Autorecovery information needs to be saved"
                  }
                ]
              }
            ]

### GET /ENC/API/dev/info/members/base

Get all devices members base information.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            [
              {
                "dev_id": <int> # device id,
                "dev_members": [
                  {
                    "name": <str> # member item name
                    "model": <str> # member model
                    "serial": <str> # member serial
                  }
                ],
              }
            ]

      Example:
            [
              {
                "dev_id": 1,
                "dev_members": [
                  {
                    "name": "FPC 0",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  },
                  {
                    "name": "FPC 1",
                    "model": "EX2200-24T-4G",
                    "serial": ""
                  }
                ]
              }
            ]

### GET /ENC/API/dev/info/policer/base

Get device policer base information all device.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
        [
          {
            "dev_id": <int>,
            "interfaces": [
              {
                "name": <str: interface name>,
                "policer": {  # If not set, it will no data
                  "in": {
                    "bandwidth": <int>,
                    "bandwidth_unit": <str: "M"|"G">,
                    "byte_count": <int>,
                    "packet_count": <int>
                  },
                  "out": {
                    "bandwidth": <int>,
                    "bandwidth_unit": <str: "M"|"G">,
                    "byte_count": <int>,
                    "packet_count": <int>
                  }
                }
              }
            ]
          }
        ]

### GET /ENC/API/dev/info/&lt;dev_id&gt;

Get device information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/interfaces

Get device interface information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/interfaces , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/interfaces/base

Get device interfaces base information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/interfaces/base , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/status/base

Get device status base information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/status/base , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/alarm/base

Get device alarm base information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/alarm/base , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/members/base

Get device vc_members base information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/members/base , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/policer/base

Get device policer information with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /dev/info/policer/base , but only one element

### GET /ENC/API/dev/info/&lt;dev_id&gt;/resource_usage

Get device resource usage with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - [Option] p : <STR>
            - "day"  : total 24 hours = 1 day, interval 5 minutes   <-- Default
            - "week" : week: total 168 hours = 7 days, interval 30 minutes
            EX1: GET /ENC/API/dev/info/13/resource_usage?p=week

      Returns:
        - type: list
        - format:
        [
          {
            "dev_id": <INT: device id>,
            "cpu": [
              {
                "name": <INT: timestamp>,
                "value": <FLOAD: usage data>
              }
            ],
            "memory": [
              {
                "name": <INT: timestamp>,
                "value": <FLOAD: usage data>
              }
            ]
          }
        ]
    Example:
        [
          {
            "dev_id": 13,
            "cpu":[
              {"value": 0, "name": 1583086200000},
              {"value": 0, "name": 1583086500000}
            ],
            "memory":[
              {"value": 0, "name": 1583006700000},
              {"value": 0, "name": 1583007000000}
            ]
          }
        ]

### PUT /ENC/API/dev/info/nickname

Set device nickname.

      Auth:
        - token
        - role: Admin, Operator
      Args:
        - type: json
        - format: [
          {
            "dev_id": <int: dev_id>,
            "nickname": <str>
          }
        ]
      Returns:
        - http_code: 200
        - no data

      Raise:
        - http_code: 400

      Example:
        input:
        [
          {
            "dev_id": 10,
            "nickname": "test_name1"
          }
        ]

### GET /ENC/API/dev/iccp_peer

Get device all iccp_peer

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "name": <str: iccp_peer name>,
              "peer_status": <bool>,
              "members": [
                {
                  "dev_id": <int>,
                  "if_name": <str>,
                  "peer_ip": <str: ip address without prefix>,
                  "local_ip": [<str: ip address with prefix>],
                  "vlan": {
                    "tag": <int>,
                    "vlan_interface": <str>
                  },
                  "mc_ae": [
                    {
                      "mc_ae_id": <int>,
                      "ae_name": <str>,
                      "local_status": <bool>,
                      "peer_status": <bool>,
                      "members": [<str: if_name>]
                    }
                  ]
                }
              ]
            }
          ]
    Example:
          [
            {
              "name": "Peer_VF3714190083_e3ea701b",
              "peer_status": true,
              "members":[
                {
                  "dev_id": 58,
                  "if_name": "ae0.0",
                  "peer_ip": "100.64.100.12",
                  "local_ip":["100.64.100.11/24"],
                  "vlan":{
                    "tag": 4094,
                    "vlan_interface": "irb.4094"
                  },
                  "mc_ae":[
                    {
                      "mc_ae_id": 1,
                      "ae_name": "ae1",
                      "local_status": true,
                      "peer_status": true,
                      "members":["ge-0/0/0"]
                    }
                  ]
                },
                {
                  "dev_id": 59,
                  "if_name": "ae0.0",
                  "peer_ip": "100.64.100.11",
                  "local_ip":["100.64.100.12/24"],
                  "vlan":{
                    "tag": 4094,
                    "vlan_interface": "irb.4094"
                  },
                  "mc_ae":[
                    {
                      "mc_ae_id": 1,
                      "ae_name": "ae1",
                      "local_status": true,
                      "peer_status": true,
                      "members":["ge-0/0/0"]
                    }
                  ]
                }
              ]
            }
          ]

### GET /ENC/API/dev/iccp_peer/base

Get device all iccp_peer base data

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "name": <str: iccp_peer name>,
              "peer_status": <bool>,
              "members": [
                {
                  "dev_id": <int>,
                  "if_name": <str>,
                  "peer_ip": <str: ip address without prefix>,
                  "local_ip": [<str: ip address with prefix>],
                  "vlan": {
                    "tag": <int>,
                    "vlan_interface": <str>
                  }
                }
              ]
            }
          ]
    Example:
          [
            {
              "name": "Peer_VF3714190083_e3ea701b",
              "peer_status": true,
              "members":[
                {
                  "dev_id": 58,
                  "if_name": "ae0.0",
                  "peer_ip": "100.64.100.12",
                  "local_ip":["100.64.100.11/24"],
                  "vlan":{
                    "tag": 4094,
                    "vlan_interface": "irb.4094"
                  }
                },
                {
                  "dev_id": 59,
                  "if_name": "ae0.0",
                  "peer_ip": "100.64.100.11",
                  "local_ip":["100.64.100.12/24"],
                  "vlan":{
                    "tag": 4094,
                    "vlan_interface": "irb.4094"
                  }
                }
              ]
            }
          ]

### GET /ENC/API/dev/iccp_peer/&lt;dev_id&gt;

Get device iccp_peer with dev_id

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            the same from - [GET /ENC/API/dev/iccp_peer](#get-encapideviccp_peer)
            but only this dev_id depend iccp_peer data

### GET /ENC/API/dev/iccp_peer/base/&lt;dev_id&gt;

Get device iccp_peer base data with dev_id

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            the same from - [GET /ENC/API/dev/iccp_peer/base](#get-encapideviccp_peerbase)
            but only this dev_id depend iccp_peer data


### PUT /ENC/API/dev/iccp_peer

Set iccp_peer name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "old_name": <int: iccp_peer old name>
              "name": <str: iccp_peer name>
            }
          ]
    Example:
          [
            {
              "old_name": "Peer_VF3714190083_e3ea701b",
              "name": "New_Peer",
            }
          ]


### GET /ENC/API/dev/evpn

Get all evpn

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "id": <int: evpn id>
              "nickname": <str: evpn name>,
              "route_target": <str: route_target>,
              "members": [
                {
                  "dev_id": <int>,
                  "router_id": <str: ip address without prefix>,
                  "neighbors": [
                    {
                      "dev_id": <int>,
                      "address": <str: ipaddress without prefix>
                    },
                    {
                      "address": <str: ipaddress without prefix>
                    }
                  ],
                  "esi_ae": [
                    {
                      "esi_ae_id": <str>,
                      "ae_name": <str>,
                      "status": <bool>,
                      "if_mode": <str: "access"|"trunk">,
                      "vlan_tag": [<int: 1~4095>],
                      "members": [<str: if_name>]
                    }
                  ]
                }
              ]
            }
          ]
    Example:
          [
            {
              "id": 3,
              "nickname": "100:1",
              "route_target": "100:1",
              "members": [
                {
                  "dev_id": 81,
                  "router_id": "8.8.8.1",
                  "neighbors": [
                    {
                      "dev_id": 82,
                      "address": "8.8.8.2"
                    },
                    {
                      "address": "8.8.8.4"
                    }
                  ],
                  "esi_ae": [
                    {
                      "esi_ae_id": "00:00:00:00:00:00:00:00:00:01",
                      "ae_name": "ae0.0",
                      "status": true,
                      "if_mode": "access",
                      "vlan_tag": [200],
                      "members": ["ge-0/0/1", "ge-0/0/3"]
                    }
                  ]
                }
              ]
            }
          ]

### GET /ENC/API/dev/evpn/base

Get all iccp_peer base data

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "id": <int: evpn id>
              "nickname": <str: evpn name>,
              "route_target": <str: route_target>,
              "members": [
                {
                  "dev_id": <int>,
                  "router_id": <str: ip address without prefix>,
                  "neighbors": [
                    {
                      "address": <str: ipaddress without prefix>
                    },
                    {
                      "address": <str: ipaddress without prefix>
                    }
                  ],
                  "esi_ae": []
                }
              ]
            }
          ]
    Example:
          [
            {
              "id": 3,
              "nickname": "100:1",
              "route_target": "100:1",
              "members": [
                {
                  "dev_id": 81,
                  "router_id": "8.8.8.1",
                  "neighbors": [
                    {
                      "address": "8.8.8.2"
                    },
                    {
                      "address": "8.8.8.4"
                    }
                  ],
                  "esi_ae": []
                }
              ]
            }
          ]

### GET /ENC/API/dev/evpn/&lt;dev_id&gt;

Get evpn with dev_id

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            the same from - [GET /ENC/API/dev/evpn](#get-encapidevevpn)
            but only this dev_id depend evpn data

### GET /ENC/API/dev/evpn/base/&lt;dev_id&gt;

Get evpn base data with dev_id

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
            the same from - [GET /ENC/API/dev/evpn/base](#get-encapidevevpnbase)
            but only this dev_id depend evpn data

### PUT /ENC/API/dev/evpn

Set evpn name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "id": <int: evpn id>
              "name": <str: evpn name>
            }
          ]
    Example:
          [
            {
              "id": 3,
              "name": "New_EVPN",
            }
          ]

### GET /ENC/API/dev/esi_ae

Get ALL ESI_ae

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "id": <int>,
              "nickname": <str>,
              "esi_ae_id": <str>,
              "evpn": {
                "id": <int>,
                "nickname": <str>,
                "route_target": <str>
              },
              "members": [
                {
                  "dev_id": <int>
                  "ae_name": <str>,
                  "status": <bool>,
                  "members": [<str: if_name>]
                }
              ]
            }
          ]
    Example:
          [
            {
              "id": 1,
              "nickname": "new_esi_ae",
              "esi_ae_id": "00:00:00:00:00:00:00:00:00:01",
              "evpn": {
                "id": 1,
                "nickname": "1100:1",
                "route_target": "100:1"
              },
              "members": [
                {
                  "dev_id": 78,
                  "ae_name": "ae0.0",
                  "status": true,
                  "members": ["ge-0/0/0"]
                }
              ]
            }
          ]

### PUT /ENC/API/dev/esi_ae

Set esi_ae name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "esi_ae_id": <str: esi_ae_id>
              "name": <str: esi_ae name>
            }
          ]
    Example:
          [
            {
              "esi_ae_id": "00:00:00:00:00:00:00:00:00:01",
              "name": "New_esi_ae",
            }
          ]

### PUT /ENC/API/dev/mc_ae

Set mc_ae name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "mc_ae_id": <int: mc_ae_id>
              "name": <str: mc_ae name>
            }
          ]
    Example:
          [
            {
              "mc_ae_id": 3,
              "name": "New_EVPN",
            }
          ]

### GET /ENC/API/dev/ip_fabric

Get ALL ip_fabric

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
         [
        {
          "fabric_id": <int: fabric_id>,
          "target_as": <str: fabric target_as must int like str>,
          "ip_network": <str: ipv4 with prefix>,
          "nickname": <str>,
          "members":[
            {
              "dev_id": <int>,
              "role": <str: spine|leaf>,
              "local_as": <str: local as must int like str>,
              "loopback_address": <str: ipv4 with prefix>,
              "evpn_cluster_address": <str|null : if role=leaf, then null>,
              "ae":[
                {
                  "name": <str: ae_name>,
                  "members":[<str: if_name>],
                  "ip_address":[<str: ipv4 with prefix>]
                }
              ]
            }
          ]
        }
      ]
    Example:
      [
        {
          "fabric_id": 1,
          "target_as": "64600",
          "ip_network": "100.64.0.0/24",
          "nickname": "lab_ip_fabric",
          "members":[
            {
              "dev_id": 15,
              "role": "leaf",
              "local_as": "65021",
              "loopback_address": "100.64.0.21/32",
              "evpn_cluster_address": null,
              "ae":[
                {
                  "name": "ae202",
                  "members":["xe-0/0/30"],
                  "ip_address":["100.64.2.1/31"]
                },
                {
                  "name": "ae201",
                  "members":["xe-0/0/10"],
                  "ip_address":["100.64.1.1/31"]
                }
              ]
            },
            {
              "dev_id": 13,
              "role": "spine",
              "local_as": "65002",
              "loopback_address": "100.64.0.2/32",
              "evpn_cluster_address": "2.2.2.2",
              "ae":[
                {
                  "name": "ae201",
                  "members":["xe-0/0/30"],
                  "ip_address":["100.64.2.0/31"]
                }
              ]
            },
            {
              "dev_id": 12,
              "role": "spine",
              "local_as": "65001",
              "loopback_address": "100.64.0.1/32",
              "evpn_cluster_address": "1.1.1.1",
              "ae":[
                {
                  "name": "ae201",
                  "members":["xe-0/0/1"],
                  "ip_address":["100.64.1.0/31"]
                }
              ]
            }
          ]
        }
      ]

### PUT /ENC/API/dev/ip_fabric

Set ip_fabric name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "fabric_id": <int: fabric_id>
              "name": <str: fabric name>
            }
          ]
    Example:
          [
            {
              "fabric_id": 1,
              "name": "New_IP_Fabric",
            }
          ]

### PUT /ENC/API/dev/custom_setting

Set user custom_setting

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - main format:
          {
            "class_name": <str>,
            "value": <json>
          }
        - "class_name" : "topology", "topology_gre", "topology_vlan", "topology_mpls", "topology_ospf", "topology_ip_fabric_<fabric_id>"
        - If class_name = topology*
          Then "value" format :
            [
              {
                "node_id": <int>,
                "x": <int>,
                "y": <int>
              }
            ]

    Example:
       {
         "class_name": "topology_ip_fabric_1",
         "value": [
           {
             "node_id": 12,
             "x": 200,
             "y": 240
           },
           {
             "node_id": 15,
             "x": 200,
             "y": 250
           }
         ]
       }

### DELETE /ENC/API/dev/custom_setting/&lt;class_name&gt;

Set user custom_setting

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - class_name: "topology", "topology_gre", "topology_vlan", "topology_mpls", "topology_ospf", "topology_ip_fabric_<fabric_id>", "all"

      Returns:
        - http code: 200

      Node1: if class_name="all", then clean all of this user's custom_setting

### GET /ENC/API/dev/model

Get model list.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "name": <str> # model name,
              "type": <str:switch|router|firewall> # model type,
              "vendor": <str:juniper|cisco> # model vendor,
              "interface": {
                "ge_num": <int> # this model slot 1 number of port,
                "fiber_num": <int> # this model slot 2 number of port,
                "poe_num": <int> # this model number of poe port,
                "mp_num": <int> # this model number of mp port
              },
              "web": {
                "mp_group": <int> # model mp group,
                "ge_row": <int> # model slot 1 size,
                "ge_group": <int> # model slot 1 group,
                "fiber_group": <int> # model slot 2 size,
                "fiber_row": <int> # model slot 2 row
              },
              "limitation": {
                "ae": <int> # model ae limit
                "mirror": <int> # model mirror limit
                "acl": <int> # model acl limit
              }
            }
          ]
    Example:
      [
        {
          "name": "EX2300-24P",
          "type": "switch",
          "vendor": "juniper",
          "interface": {
            "ge_num": 24,
            "fiber_num": 4,
            "poe_num": 24,
            "mp_num": 0,
          }
          "web": {
            "mp_group": 0,
            "ge_row": 2,
            "ge_group": 3,
            "fiber_group": 1,
            "fiber_row": 1,
          }
          "limitation": {
            "ae": 64,
            "mirror": 4,
            "acl": 1000
          }
        }
      ]


### GET /ENC/API/dev/model/&lt;model_name&gt;

Get model with name.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          the same from /model , but only one element

### GET /ENC/API/dev/groups

Get dev group.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "id": <int>
              "name": <str> # group name,
              "type": <int: 1=dev itself group| 2=dev group | 3=dev if group>
              "lock_status": <bool>,
              "dev_members": [<int:dev_id>],
              "group_members": [
                "id": <int>,
                "name": <str>,
                "type": <int: 1=dev itself group| 2=dev group | 3=dev if group>,
                "lock_status": <bool>
              ],
              "if_members": [
                "dev_id": <int>,
                "if_name": <str>,
                "target": <str: destination interface hostname>
              ]
            }
          ]
        - NOTE: if type=2, only check "dev_members" and "group_members". if type=3, only check "if_members"
    Example:
      [
        {
          "id": 1
          "name": "ABC"
          "type": 2
          "lock_status": False,
          "dev_members": [1,2,3],
          "group_members": []
        }
      ]

### POST /ENC/API/dev/groups

Add dev groups.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
          [
            {
              "name": <str> # group name,
              "lock_status": <bool>,
              "dev_members": [<int:dev_id>],
              "group_members": [<int:dev group id>]
            }
          ]
    Example:
          [
            {
              "name": "test_group",
              "dev_members": [1, 2],
              "group_members": []
            }
          ]

### DELETE /ENC/API/dev/groups/&lt;group_id&gt;

delete dev group.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - group_id:  delete group id

      Returns:
        - http_code: 200


### GET /ENC/API/dev/ip_mac_search
Get ip_mac_serarch data.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - Not need

      Returns:
        - type: list
        - format:
        [
          {
            "id": <int: search_id>,
            "ip_addr": <str: ip, if "": only mac no ip>,
            "mac_addr": <str: mac>,
            "desc": <str>,
            "status": <bool: True = live, False = No live just record>,
            "source":[
              {
                "id": <int: source_id>,
                "dev_id": <int: dev_id>,
                "hostname": <str: dev_hostname>,
                "interface": <str: origin interface name, if="": not found interface>
              }
            ]
          }
        ]
      Example:
      [
        {
          "id": 19,
          "ip_addr": "192.168.105.24",
          "mac_addr": "00:0c:29:6f:56:25",
          "desc": "",
          "status": 1,
          "source":[
            {
              "id": 11,
              "dev_id": 1,
              "hostname": "BR_SRX320",
              "interface": ""
            }
          ]
        },
        {
          "id": 21,
          "ip_addr": "192.168.105.120",
          "mac_addr": "78:19:f7:8c:96:bf",
          "desc": "",
          "status": 1,
          "source":[
            {
              "id": 12,
              "dev_id": 1,
              "hostname": "BR_SRX320",
              "interface": ""
            }
          ]
        }
      ]


### PUT /ENC/API/dev/ip_mac_search/&lt;search_id&gt;
update ip_mac_serarch desc.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - type: json
        - format:
          {"desc": <str>}

      Returns:

### DELETE /ENC/API/dev/ip_mac_search/&lt;search_id&gt;
delete ip_mac_search

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - not need

      Returns:

### DELETE /ENC/API/dev/ip_mac_search/&lt;search_id&gt/source/&lt;source_id&gt;
delete ip_mac_source

      Auth:
        - token
        - role: Admin, Operator, Normal

      Args:
        - not need

### GET /ENC/API/dev/topology
### GET /ENC/API/dev/topology/gre

Get Topology.

      Auth:
        - token


      Args:
        - Not need

      Returns:
        - type: dist
        - format:
        {
          "nodes":[
            {
              "id": <int: dev_id|node_id>,
              "name": <str: hostname>,
              "type": <str: switch|router|firewall|unknown>,
              "model": <str: device model>,
              "status": <bool>,
              "x": <int>,   # maybe no this key
              "y": <int>    # maybe no this key
            }
          ],
          "links":[
            {
              "from":<int:dev_id>,
              "to":<int:node_id>,
              "src_interface": <str:interface_name>,
              "dst_interface": <str:interface_name>
            }
          ]
        }
        - dev_id = exist in db
        - node_id = not exist in db

      Example:
      {
        "nodes":[
          {
            "id": 1,
            "name": "SRX320-139",
            "type": "firewall",
            "model": "SRX320",
            "status": true
          },
          {
            "id": 2,
            "name": "ex2200-145",
            "type": "switch",
            "model": "EX2200-24T-4G",
            "status": true
          },
          {
            "id": 3,
            "name": "LAB_EX22",
            "type": "unknown",
            "model": "",
            "status": true
          }
        ],
        "links":[
          {
            "from": 2,
            "src_interface": "ge-1/1/3",
            "to": 1,
            "dst_interface": "ge-0/0/5"
          },
          {
            "from": 2,
            "src_interface": "ge-1/0/2",
            "to": 3,
            "dst_interface": "ge-0/0/1"
          },
          {
            "from": 1,
            "src_interface": "ge-0/0/5",
            "to": 2,
            "dst_interface": "ge-1/1/3"
          }
        ]
      }

### GET /ENC/API/dev/topology/ip_fabric

Get ip_fabric Topology.

      Auth:
        - token


      Args:
        - Not need

      Returns:
        - type: dist
        - format:
        [
          {
            "fabric_id": <int>,
            "target_as": <str>,
            "nickname": <str>,
            "topology": {
              "nodes":[
                {
                  "id": <int: dev_id|node_id>,
                  "name": <str: hostname>,
                  "type": <str: switch|router|firewall|unknown>,
                  "model": <str: device model>,
                  "status": <bool>,
                  "x": <int>,   # maybe no this key
                  "y": <int>,    # maybe no this key
                  "extra_data": {
                    "role": <str: "spine"|"leaf">,
                    "local_as": <str>,
                    "loopback_address": <str: ipv4 with prefix>
                  }
                }
              ],
              "links":[
                {
                  "extra_data": {
                    "status": <str: "Established" | "Idle" | "Connect" | "Active"| "OpenSent" |"OpenConfirm">
                    "last_up_down_time": <str>
                  },
                  "from":<int:dev_id>,
                  "to":<int:node_id>,
                  "src_interface": <str:interface_name>,
                  "dst_interface": <str:interface_name>,
                  "src_ae_members": [<str: if_name>],
                  "dst_ae_members": [<str: if_name>],
                }
              ]
            }
          }
        ]
        - note1: dev_id = exist in db
                 node_id = not exist in db
        - note2: all of links is duplex link
        - note3: "Established" is link successed

      Example:
      [
        {
          "fabric_id": 1,
          "target_as": "64600",
          "nickname": "lab_ip_fabric",
          "topology": {
            "nodes":[
              {
                "id": 1,
                "name": "SRX320-139",
                "type": "firewall",
                "model": "SRX320",
                "status": true,
                "extra_data": {
                  "role": "spine",
                  "local_as": "65001",
                  "loopback_address": "100.64.0.1/32"
                }
              },
              {
                "id": 2,
                "name": "ex2200-145",
                "type": "switch",
                "model": "EX2200-24T-4G",
                "status": true,
                "x": 200,
                "y": 240,
                "extra_data": {
                  "role": "spine",
                  "local_as": "65002",
                  "loopback_address": "100.64.0.2/32"
                }
              },
              {
                "id": 3,
                "name": "LAB_EX22",
                "type": "unknown",
                "model": "",
                "status": true,
                "extra_data": {
                  "role": "leaf",
                  "local_as": "65017",
                  "loopback_address": "100.64.0.17/32"
                }
              }
            ],
            "links":[
              {
                "from": 2,
                "src_interface": "ae201",
                "to": 1,
                "dst_interface": "ae201",
                "src_ae_members": ["xe-0/0/10"],
                "dst_ae_members": ["xe-0/0/1"]
              },
              {
                "from": 2,
                "src_interface": "ae202",
                "to": 3,
                "dst_interface": "ae202",
                "src_ae_members": ["xe-0/0/9"],
                "dst_ae_members": ["xe-0/0/1"]
              }
            ]
          }
        }
      ]

### GET /ENC/API/dev/tarffic
### GET /ENC/API/dev/traffic/&lt;dev_id&gt;
### GET /ENC/API/dev/traffic/&lt;dev_id&gt;/interface
### GET /ENC/API/dev/traffic/&lt;dev_id&gt;/interface/&lt;if_name&gt;

Get device traffic

1. if no dev_id &gt; get ALL device traffic without interface traffic
2. if only have dev_id &gt; get ONE device traffic without interface traffic
3. if have dev_id but no interface_name &gt; get ONE device and ALL device's interface traffic
4. if have dev_id and interface_name &gt; get ONE device's interface traffic without device traffic(ALL data be 0)
5. Add parameter 'p' can get different range traffic

Detail:


      Auth:
        - token

      Args:
        - [Option] dev_id : <INT>
        - [Option] if_name : <STR>
                EX1: ge-0/0/1
                EX2: ae10
        - [Option] p : <STR>
            - "day"  : total 24 hours = 1 day, interval 5 minutes   <-- Default
            - "week" : week: total 168 hours = 7 days, interval 30 minutes
            - "month": month: total 720 hours = 1 month, interval 120 minutes = 2 hours
            - "year" : year: total 8640 hours = 12 month, interval 1440 minutes = 1 day
            EX1: GET /ENC/API/dev/traffic/3?p=week
            EX2: GET /ENC/API/dev/traffic/3?p=year

      Returns:
        - type: list
        - NOTE:
          - if API 1 > field "interfaces" must be zero-list
          - if API 2 > Only one device data in return list, field "interfaces" must be zero-list
          - if API 3 > Only one device data in return list
          - if API 4 > field "total" data must be zero (no device data)
        - format:
        [
          {
            "id": <INT: device id>,
            "total": {
                "bytes": {
                    "rx_max": <INT>,
                    "rx_min": <INT>,
                    "tx_max": <INT>,
                    "tx_min": <INT>,
                    "rx": <List>
                    [
                      [<INT: traffic data>, <INT: timestamp>],
                      [<INT: traffic data>, <INT: timestamp>],
                    ]
                    ,
                    "tx": <List: same as rx>
                },
                "packets": {
                  # Same as "bytes" fields format
                },
                "errors": {
                  # Same as "bytes" fields format
                }
            },
            "interfaces": [
                {
                    "name": <STR: interface_name>
                    "bytes": {
                        "rx_max": <INT>,
                        "rx_min": <INT>,
                        "tx_max": <INT>,
                        "tx_min": <INT>,
                        "rx": <List>
                        [
                          [<INT: traffic data>, <INT: timestamp>],
                          [<INT: traffic data>, <INT: timestamp>],
                        ]
                        ,
                        "tx": <List: same as rx>
                    },
                    "packets": {
                      # Same as "bytes" fields format
                    },
                    "errors": {
                      # Same as "bytes" fields format
                    }
                }
            ]
          }
        ]
    Example:
        [
          {
            "id": 1,
            "total": {
                "bytes": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
                "packets": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
                "errors": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
            },
            "interfaces": [
              {
                "name": "ge-0/0/0",
                "bytes": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
                "packets": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
                "errors": {
                    "rx_max": 324234,
                    "rx_min": 0,
                    "tx_max": 24242,
                    "tx_min": 32,
                    "rx": [
                      [144485, 1539090300],
                      [23432, 1539090600],
                    ],
                    "tx": [
                      [434485, 1539090300],
                      [2432, 1539090600],
                    ]
                },
              }
            ]
          }

### POST /ENC/API/dev/initialize

First initialize include insert into db and create init_script

      Auth:
        - token
        - role: Admin, Operator

      Args:
        - type: json
        - format:
          {
            "gw": <str>, # IP must no prefix
            "ip": <str>, # IP must have prefix
            "serial": <str>, # srial number
            "hostname": <str> # hostname, format: [a-zA-Z][a-zA-Z0-9_-]{1,63}
          }

      Returns:
        - type: json
        - format: {
            "dev_id": <dev_id>
          }

      Raise:
        - http_code: 400

      Example:
        input json:
            {
              "gw":"192.168.20.1",
              "ip":"192.168.20.116/24",
              "serial":"CW0211331650",
              "hostname":"LLLex22"
            }
        output:
            {"dev_id":10}

### PUT /ENC/API/dev/initialize

Only create init_script<br/>
if device already insert to db, use this api to re-create init_script

      Auth:
        - token
        - role: Admin, Operator

      Args:
        - type: json
        - format: {
            "dev_id": <dev_id>
        }
      Returns:
        - type: json
        - format: {
            "dev_id": <dev_id>
          }

      Raise:
        - http_code: 400

      Example:
        input:
            {"dev_id":10}
        output:
            {"dev_id":10}

### PUT /ENC/API/dev/register

Register device.

      Auth:
        - token
        - role: Admin, Operator
      Args:
        - type: json
        - format: {
            "dev_id": <dev_id>
        }
      Returns:
        - http_code: 200
        - no data

      Raise:
        - http_code: 400

      Example:
        input:
            {"dev_id":10}


### GET /ENC/API/dev/init\_script/&lt;dev_id&gt;

Get device init_script.

      Auth:
        - token
        - role: Admin, Operator

      Args:
        - no data

      Returns:
        - http_code: 200
        - download file: tar.gz

      Raise:
        - http_code: 400

### GET /ENC/API/dev/vlan

Get Vlan table

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "name": <str>, # vlan name, format: vlan[tag]
              "tag": <int>, # vlan tag
              "vni": <int | Null> # vlan vni
              "members": [
                {
                  "dev_id": <int>,
                  "interfaces": [<str: if_name>],
                  "vlan_desc": <str | Null: this vlan on this device descrition>,
                  "vlan_interface": {
                    "interface_name": <str: if_name>,
                    "interface_v4_mac_address": <str | Null>,
                    "interface_v6_mac_address": <str | Null>,
                    "ip_addresses": [<str: ip_address>],
                    "vga":[
                      {
                        "ip_address": <str: ip address>,
                        "virtual_gateway_address": <str>
                      }
                    ]
                  }
                }
              ]
            }
          ]
      Example:
          [
            {
              "name": "default",
              "tag": 0,
              "vni": null,
              "members":[
                {
                  "dev_id": 15,
                  "interfaces": ["ge-0/0/0.0", "ge-0/0/1.0", "ge-0/0/2.0", "ge-0/0/3.0"],
                  "vlan_desc": null,
                  "vlan_interface":{}
                }
              ]
            },
            {
              "name": "vlan_222",
              "tag": 222,
              "vni": 1000222,
              "members":[
                {
                  "dev_id": 15,
                  "interfaces":[],
                  "vlan_desc": null,
                  "vlan_interface":{}
                }
              ]
            },
            {
              "name": "VL4094",
              "tag": 4094,
              "vni": null,
              "members":[
                {
                  "dev_id": 58,
                  "interfaces":["ae0.0", "et-0/0/48.0"],
                  "vlan_desc": "iccp_peer",
                  "vlan_interface":{
                    "interface_name": "irb.4094",
                    "interface_v4_mac_address": "00:00:5e:00:00:08",
                    "interface_v6_mac_address": null,
                    "ip_addresses":["100.64.100.11/24"]
                    "vga": [
                      {
                        "ip_address": "100.64.100.11/24",
                        "virtual_gateway_address": "100.64.100.254"
                      }
                    ]
                  }
                },
                {
                  "dev_id": 59,
                  "interfaces":["ae0.0", "et-0/0/48.0"],
                  "vlan_desc": "iccp_peer",
                  "vlan_interface":{
                    "interface_name": "irb.4094",
                    "interface_v4_mac_address": null,
                    "interface_v6_mac_address": null,
                    "ip_addresses":["100.64.100.12/24"]
                    "vga": []
                  }
                }
              ]
            }
          ]

### GET /ENC/API/vlan/&lt;vlan_tag&gt;

Get vlan table with vlan tag.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          the same from /vlan , but only one element

### GET /ENC/API/dev/routing_table

Get all device routing tables.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "dev_id": <int>,
              "routing_tables":[
                  {
                    "table_id": <int>,
                    "table_name": <str>,
                    "total_route_count": <int>,
                    "routes":[
                      {
                        "destination": <str: ip network>,
                        "entries":[
                          {
                            "seq_num": <int: for sort>,
                            "active_tag": <str>,
                            "protocol": <str>,
                            "preference": <int>,
                            "age": <str>,
                            "local_preference": <int| Null>,
                            "learned_from": <str| Null>,
                            "as_path": <str| Null>,
                            "metric": <str| Null>,
                            "next_hop_type": <str| Null>,
                            "next_hop":[
                              {
                                "is_valid": <bool>,
                                "is_selected_next_hop": <bool>,
                                "next_hop": <str: ip without prefix| Null>,
                                "via": <str| Null>,
                                "local_interface": <str| Null>
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]

      Example:
          [
            {
              "dev_id": 39,
              "routing_tables":[
                  {
                    "table_id": 3,
                    "table_name": "inet.0",
                    "total_route_count": 23,
                    "routes":[
                      {
                        "destination": "0.0.0.0/0",
                        "entries":[
                          {
                            "seq_num": 1,
                            "active_tag": "*",
                            "protocol": "Static",
                            "preference": 5,
                            "age": "3w0d 07:23:42",
                            "local_preference": null,
                            "learned_from": null,
                            "as_path": null,
                            "metric": null,
                            "next_hop_type": null,
                            "next_hop":[
                              {
                                "is_valid": true,
                                "is_selected_next_hop": true,
                                "next_hop": "192.168.30.1",
                                "via": "em0.0",
                                "local_interface": null
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]




### DELETE /ENC/API/dev/&lt;dev_id&gt;
    Device delete.

    GET:
      Auth:
        - token
        - role: Admin, Operator
      Returns:
        - http_code: 200
        - no data
      Raise:
        - http_code: 400

### PUT /ENC/API/dev/&lt;dev_id&gt;/shutdown
    Device shutdown.

    GET:
      Auth:
        - token
        - role: Admin, Operator
      Returns:
        - http_code: 200
        - no data
      Raise:
        - http_code: 400

### GET /ENC/API/dev/&lt;dev_id&gt;/config_backup
    GET Device config backup list.

    GET:
      Auth:
        - token
        - role: Admin, Operator, viewer

      Returns:
        - http_code: 200
        - format: {
          "system": [
            {
              "config_id": <int: config_backup_id>,
              "name": "origin",
              "is_empty": <bool>,
              "timestamp": <str:timestamp>
            },
            {
              "config_id": <int: config_backup_id>
              "name": "latest",
              "is_empty": <bool>,
              "timestamp": <str:timestamp>
            }
          ],
          "custom": [
            {
              "config_id": <int: config_backup_id>,
              "name": <str: config name>,
              "is_empty": <bool>,
              "timestamp": <str: timestamp>
            }
          ]
        }

### GET /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;
    GET Device config backup data.

    GET:
      Auth:
        - token
        - role: Admin, Operator

      Returns:
        - http_code: 200
        - Download backup file  (.txt)

      Raise:
        - http_code: 400 - config id not found error
        - http_code: 423 - report file not found
        - http_code: 500 - server error

### PUT /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;
    Update Device config <config_id> to lastest config.

    PUT:
      Auth:
        - token
        - role: Admin, Operator

      Returns:
        - http_code: 200


### DELETE /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;
    Clean Device config <config_id>

    PUT:
      Auth:
        - token
        - role: Admin, Operator

      Returns:
        - http_code: 200


### PUT /ENC/API/dev/&lt;dev_id&gt;/config_backup/&lt;config_id&gt;/name
    Update Device config <config_id> name.

    PUT:
      Auth:
        - token
        - role: Admin, Operator

      Args:
        - format:
          {"name": <str>}

      Returns:
        - http_code: 200


### GET /ENC/API/dev/&lt;dev_id&gt;/report
    GET Device rsi and report.

    GET:
      Auth:
        - token
        - role: Admin, Operator

      Returns:
        - http_code: 200
        - Download report file

      Raise:
        - http_code: 400 - any parameter error
        - http_code: 423 - report file not found
        - http_code: 500 - server error

### GET /ENC/API/dev/&lt;dev_id&gt;/report/status
    GET Device rsi and report status

    GET:
      Auth:
        - token
        - role: Admin, Operator
      Returns:
        - http_code: 200
        - string message: 'NotExist' | 'Expired' | 'Creating' | 'CreateTimeout' | 'Done'
        - NOTE: 'NotExist' and 'Expired' and  'CreateTimeout' message, will re-start create new rsi file

      Raise:
        - http_code: 400 - any parameter error
        - http_code: 500 - server error

### GET /ENC/API/dev/&lt;dev_id&gt;/vlans
Get vlan table with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          the same from /vlan , but only one element

### GET /ENC/API/dev/&lt;dev_id&gt;/bgp

Get dev bgp.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:

      Example:
      [
        {
          "dev_id": "1",
          "desc": "",
          "status": "Active",
          "last_time": "1d 22:19:11",
          "peer":{
            "address": "10.123.123.1",
            "as": "65001"
          },
          "local":{
            "address": "unspecified",
            "as": "65001"
          },
          "bgp_rib":[]
        },
        {
          "dev_id": "1",
          "desc": "",
          "status": "Active",
          "last_time": "1d 22:19:11",
          "peer":{
            "address": "192.168.21.115",
            "as": "65001"
          },
          "local":{
            "address": "unspecified",
            "as": "65001"
          },
          "bgp_rib":[]
        }
      ]

### GET /ENC/API/dev/&lt;dev_id&gt;/probe_result

Get dev probe result.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:
      [
        {
          "id": <int>,
          "dev_id": <int>,
          "owner": <str>,
          "test_name": <str>,
          "target_address": <str:ip_address>,
          "source_address": <str:ip_address>,
          "probe_type": <str>,
          "dst_interface": <str>,
          "rtt": [
            {
              "value": <int>,
              "name": <int:timestamp>
            }
          ],
          "round_trip_jitter":[
            {
              "value": <int>,
              "name": <int:timestamp>
            }
          ]
        }
      ]

      Example:
      [
        {
          "id": 1,
          "dev_id": 3,
          "owner": "testgre",
          "test_name": "pingtest",
          "target_address": "10.201.1.1",
          "source_address": "10.201.1.2",
          "probe_type": "icmp-ping-timestamp",
          "dst_interface": "gr-0/0/0.1",
          "rtt": [
            {"value": 0, "name": 1557222420000 },
            {"value": 0, "name": 1557222480000 }
          ],
          "round_trip_jitter":[
            {"value": 0, "name": 1557222420000 },
            {"value": 0, "name": 1557222480000 }
          ]
        }
      ]

### GET /ENC/API/dev/&lt;dev_id&gt;/ospf

Get dev ospf.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:
      [
        {
          "id": <int: ospf id>,
          "area": <str>,
          "area_type": <str>,
          "interfaces": [
            {
              "interface": <str>,
              "dst_addr": <str: ip>,
              "status": <bool>,
              "up_time": <str>
            }
          ]
        }
      ]
      Example:
      [
        {
          "id": 1,
          "area": "0.0.0.10",
          "area_type": "Stub",
          "interfaces": [
            {
              "interface": "ge-0/0/1.0",
              "dst_addr": "192.168.105.115",
              "status": True,
              "up_time": "1"
            }
          ]
        }
      ]
### GET /ENC/API/dev/&lt;dev_id&gt;/mirror

Get dev mirror.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:
          [
            {
              "dev_id": <int>
              "name": <str: mirror name>
              "in_port": <list>
              [
                {
                  "name": <str: interface_name>
                  "type": <str:"egress"|"ingress"|"all">
                }
              ]
              "out_port": <str: interface_name>
            }
          ]


### GET /ENC/API/dev/&lt;dev_id&gt;/mirror/&lt;name&gt;
Get dev mirror with mirror name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:
          the same from /dev/<dev_id>/mirror , but only one element


### GET /ENC/API/dev/&lt;dev_id&gt;/ae
Get dev ae interfaces list.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "dev_id":<int>
              "name":<str>
              "mc_ae": <int or null>
              "member": [
                <str:interface_name>
              ]
            }
          ]
      Example:
          [
            {
              "dev_id": 11,
              "name": "ae10",
              "mc_ae": null
              "member": [
                "ge-0/0/11","ge-0/0/12", "ge-0/0/13"
              ]
            },
            {
              "dev_id": 11,
              "name": "ae1",
              "mc_ae": 1
              "member": [
                "ge-0/0/0"
              ]
            }
          ]

### GET /ENC/API/dev/&lt;dev_id&gt;/ae/&lt;name&gt;
Get dev ae interface with name

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: json
        - format:
          the same from /dev/<dev_id>/ae , but only one element

### GET /ENC/API/dev/&lt;dev_id&gt;/mc_ae

Get device mc ae data with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: list
        - format:
          [
            {
              "dev_id": <int>,
              "mc_ae": [
                {
                  "nickname": <str>,
                  "mc_ae_id": <int>,
                  "ae_name": <str>,
                  "local_status": <bool>,
                  "peer_status": <bool>,
                  "members": [<str: if_name>]
                }
              ]
            }
          ]
    Example:
          [
            {
              "dev_id": 58,
              "mc_ae":[
                {
                  "nickname": "new_mc_ae",
                  "mc_ae_id": 1,
                  "ae_name": "ae1",
                  "local_status": true,
                  "peer_status": true,
                  "members":["ge-0/0/0"]
                }
              ]
            }
          ]


### GET /ENC/API/dev/&lt;dev_id&gt;/esi_ae

Get device mc ae data with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal

      Returns:
        - type: list
        - format:
          [
            {
              "dev_id": <int>,
              "esi_ae": [
                {
                  "id": <int>,
                  "nickname": <str>,
                  "evpn": {
                    "id": <int>,
                    "nickname": <str>,
                    "route_target": <str>
                  }
                  "esi_ae_id": <str>,
                  "ae_name": <str>,
                  "status": <bool>,
                  "if_mode": <str: "access"| "trunk">,
                  "vlan_tag": [<int: 1 ~ 4095>]
                  "members": [<str: if_name>]
                }
              ]
            }
          ]
    Example:
          [
            {
              "dev_id": 58,
              "esi_ae": [
                {
                  "id": 3,
                  "nickname": "new_esi_ae",
                  "evpn": {
                    "id": 1,
                    "nickname": "100:1",
                    "route_target": "100:1"
                  },
                  "esi_ae_id": "00:00:00:00:00:00:00:00:00:01",
                  "ae_name": "ae0.0",
                  "status": true,
                  "if_mode": "access",
                  "vlan_tag": [202],
                  "members": ["ge-0/0/1", "ge-0/0/3"]
                }
              ]
            }
          ]


### GET /ENC/API/dev/&lt;dev_id&gt;/acl
Get dev filter which only acl.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "id": <int>,
              "name": <str>,
              "family": <str>,
              "interfaces": [<str:if_name>],
              "terms":[
                {
                  "name": <str>,
                  "byte_count": <int>,
                  "packet_count": <int>,
                  "seq_num": <int: sequence number>
                  "match": {
                    "id": <int: match_id>,
                    "name": <str: match_name>
                    "src_ip_addresses":[<str: ip_addr>],
                    "src_ports":[<str>],
                    "dst_ip_addresses":[<str: ip_addr>],
                    "dst_ports":[<str>],
                    "protocols":[<str:"TCP"|"UDP"|"ICMP">],
                  },
                  "action": <str: "accept" | "deny" | "reject">

                }
              ]
            }
          ]
      Example:
          [
            {
              "id": 1,
              "name": "PBR",
              "family": "inet",
              "interfaces": ["ge-0/0/0.1"]
              "terms":[
                {
                  "name": "TO-4G_path",
                  "byte_count": 0,
                  "packet_count": 0,
                  "seq_num": 1,
                  "match": {
                    "id": 1,
                    "name": "match1",
                    "src_ip_addresses":["192.168.20.10/24"],
                    "src_ports":[],
                    "dst_ip_addresses":["0.0.0.0/0"],
                    "dst_ports":["HTTPS"],
                    "protocols":["TCP"]
                  },
                  "action": "accept"
                }
              ]
            }
          ]

### GET /ENC/API/dev/&lt;dev_id&gt;/routing_table

Get device routing table with dev_id.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          the same from /dev/routing_table , but only one element

### GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/pbr
Get dev filter which only policy base routing.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "id": <int>,
              "name": <str>,
              "family": <str>,
              "interfaces": [<str:if_name>],
              "terms":[
                {
                  "name": <str>,
                  "byte_count": <int>,
                  "packet_count": <int>,
                  "seq_num": <int: sequence number>
                  "match": {
                    "id": <int: match_id>,
                    "name": <str: match_name>
                    "src_ip_addresses":[<str: ip_addr>],
                    "src_ports":[<str>],
                    "dst_ip_addresses":[<str: ip_addr>],
                    "dst_ports":[<str>],
                    "protocols":[<str:"TCP"|"UDP"|"ICMP">],
                  },
                  "routing_instance": {
                    "id": <int>,
                    "name": <str: routing_instance name>
                  }
                  # or
                  "action": <str: "accept" | "deny" | "reject">

                }
              ]
            }
          ]
      Example:
          [
            {
              "id": 1,
              "name": "PBR",
              "family": "inet",
              "interfaces": ["ge-0/0/0.1"]
              "terms":[
                {
                  "name": "TO-4G_path",
                  "byte_count": 0,
                  "packet_count": 0,
                  "seq_num": 1,
                  "match": {
                    "id": 1,
                    "name": "match1",
                    "src_ip_addresses":["192.168.20.10/24"],
                    "src_ports":[],
                    "dst_ip_addresses":["0.0.0.0/0"],
                    "dst_ports":["HTTPS"],
                    "protocols":["TCP"]
                  },
                  "routing_instance": {
                    "id": 1,
                    "name": "to-GRE1"
                  }
                }
              ]
            }
          ]


### GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/qos
Get dev filter which qos.

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "id": <int>,
              "name": <str>,
              "family": <str>,
              "interfaces": [<str:if_name>]
              "terms":[
                {
                  "name": <str>,
                  "byte_count": <int>,
                  "packet_count": <int>,
                  "seq_num": <int: sequence number>
                  "match": {
                    "id": <int: match_id>,
                    "name": <str: match_name>,
                    "src_ip_addresses":[<str: ip_addr>],
                    "src_ports":[<str>],
                    "dst_ip_addresses":[<str: ip_addr>],
                    "dst_ports":[<str>],
                    "protocols":[<str:"TCP"|"UDP"|"ICMP">]
                  },
                  "forwarding_class": {
                    "id": <int>,
                    "name": <str>,
                    "transmit_rate": <int>,
                    "priority": <str: "STRICT_HIGH"| "HIGH"| "MEDIUM_HIGH"| "MEDIUM_LOW"| "LOW">
                  }
                }
              ]
            }
          ]
      Example:
          [
            {
              "id": 1,
              "name": "PBR",
              "family": "inet",
              "interfaces": ["ge-0/0/0.1"],
              "terms":[
                {
                  "name": "TO-4G_path",
                  "byte_count": 0,
                  "packet_count": 0,
                  "seq_num": 1,
                  "match": {
                    "id": 5,
                    "name": "match2",
                    "src_ip_addresses":["192.168.20.10/24"],
                    "src_ports":[],
                    "dst_ip_addresses":["0.0.0.0/0"],
                    "dst_ports":["1000-2000"],
                    "protocols":["TCP"]
                  },
                  "forwarding_class": {
                    "id": 1,
                    "name": "LEVEL-2",
                    "transmit_rate": 30,
                    "priority": "LOW"
                  }
                }
              ],

            }
          ]

### GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/routing_instance
Get dev routing_instance data

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "id": <int>,
              "name": <str>
            }
          ]
      Example:
          [
            {
              "id": 3,
              "name": "to-WWW"
            }
          ]

### GET /ENC/API/dev/&lt;dev_id&gt;/SDWAN/forwarding_class
Get dev forwarding_class data

      Auth:
        - token
        - role: Admin, Operator, Normal
      Returns:
        - type: json
        - format:
          [
            {
              "id": <int>,
              "name": <str>,
              "transmit_rate": <int>,
              "priority": <str: "STRICT_HIGH"| "HIGH"| "MEDIUM_HIGH"| "MEDIUM_LOW"| "LOW">
            }
          ]
      Example:
          [
            {
              "id": 1,
              "name": "LEVEL-2",
              "transmit_rate": 30,
              "priority": "LOW"
            }
          ]


### GET /ENC/API/dev/zone/addressbook
Get zont addressbook.

    GET
      Auth:
        - token

      Args:
        - Not need

      Returns:
        - type: json
        - format:
    Example:
      [
        {
          "id": 1
          "name": "boss phone",
          "addr_type": "ip",
          "address": ["192.168.20.22/24"]
        },
        {
          "id": 2
          "name": "boss set",
          "addr_type": "set",
          "address": [
                {
                  "id": 1,
                  "name": "boss phone",
                  "addr_type": "ip"},
                {
                  "id": 3,
                  "name": "boss pc",
                  "addr_type": "ip"
                }
            ]
        }
      ]


### GET /ENC/API/dev/zone/host_policy
Get zont host policy.

      Auth:
        - token

      Args:
        - Not need

      Returns:
        - type: json
        - format:
    Example:
      {
        "services": ["all", "http", "https"],
        "protocals": ["all", "http", "https"]
      }

### GET /ENC/API/dev/policy/app
Get policy application.

      Auth:
        - token

      Args:
        - Not need

      Returns:
        - type: json
        - format:
    Example:
      [
        {
          "name": "any",
          "type": "general"
        },
        {
          "name": "ssh",
          "type": "general"
        },
        {
          "name": "https",
          "type": "general"
        },
        {
          "id": 1,
          "type": "custom",
          "name": "grpcapp",
          "desc": "For grpc",
          "protocal": "tcp",
          "start_port": 50010,
          "end_port": 50010,
          "status": True
        }
      ]

### GET /ENC/API/dev/&lt;dev_id&gt;/zone
Get dev zone

    GET:
      Auth:
        - token

      Returns:
        - type: json
        - format:
      Example:
      [
        {
          "id": 1,
          "name": "truse",
          "desc": "truse zone",
          "addressbook": [
            {
              "id": 1,
              "name": "boss phone",
              "addr_type": "ip",
              "address": ["192.168.20.22"]
            },
            {
              "id": 2,
              "name": "boss set",
              "addr_type": "set",
              "address": [
                {
                  "id": 1,
                  "name": "boss phone",
                  "addr_type": "ip"},
                {
                  "id": 3,
                  "name": "boss pc",
                  "addr_type": "ip"
                }]
            }
          ],
          "interfaces": ["ge-0/0/0", "ge-0/0/1"],
          "services": ["all"],
          "protocols": ["http", "https"],
          "status": 1
        }
      ]

### GET /ENC/API/dev/&lt;dev_id&gt;/policy
Get dev policy

    GET:
      Auth:
        - token

      Returns:
        - type: json
        - format:
      Example:
      [
        {
          "id": 1,
          "name": "policyone",
          "desc": "this is policy",
          "seq_num": 1,
          "src_zone":{<the same by zone arch.>},
          "dst_zone":{<the same by zone arch.>},
          "application":       [
        {
          "name": "any",
          "type": "general"
        }],
          "count": 0,
          "action": "permit",
          "status": 1
        },
        {
          "id": 2,
          "name": "policytwo",
          "desc": "",
          "seq_num": 2,
          "src_zone":{<the same by zone arch.>},
          "dst_zone":{<the same by zone arch.>},
          "application":       [
        {
          "name": "ssh",
          "type": "general"
        },
        {
          "id": 1,
          "type": "custom",
          "name": "grpcapp",
          "desc": "For grpc",
          "protocal": "tcp",
          "start_port": 50010,
          "end_port": 50010,
          "status": True
        }
      ],
          "count": 0,
          "action": "reject",
          "status": 1
        }
      ]

### GET /ENC/API/dev/firewall_filter_match
Get firewall_filter_match

    GET:
      Auth:
        - token

      Args:
        - family: <str: "ethernet-switching" | "inet" | "inet6">
          Example: /ENC/API/dev/firewall_filter_match?family=inet

      Returns:
        - type: json
        - format:
      [
        {
          "id": <int: 0=no match>,
          "name": <str: ""=no match>,
          "src_ip_addresses": [],
          "src_ports": [],
          "dst_ip_addresses": [],
          "dst_ports": [],
          "protocols": []
        }
      ]


### POST /ENC/API/dev/firewall_filter_match/check/is_exist

Check firewall_filter_match is exist or not


      Auth:
        - token
        - role: Admin, Operator

      Args:
        - type: json
        - format:
          {
            "name": <str>
          }

      Returns:
        - type: bool

      Raise:
        - http_code: 400

      Example:
        input json:
            {
              "name": "test match name"
            }
        output:
            false

### GET /ENC/API/dev/firewall_filter_match/&lt;match_id&gt;/is_used
Check firewall_filter_match is used with some firewall filter terms

if this match_id is used, it will return which device id and which term id used
if this match_id is not used, it will return empty list

    GET:
      Auth:
        - token

      Returns:
        - type: json
        - format:
        [
          {
            "dev_id": <int>,
            "terms": [<int: term_id>]
          }
        ]
      Example:


### PUT /ENC/API/dev/firewall_filter_match/&lt;match_id&gt;/name

Update match name, ONLY match name

      Auth:
        - token
        - role: Admin, Operator

      Args:
        - type: json
        - format:
          {
            "name": <str: new match name>
          }

      Returns:
        - http_code: 200

      Raise:
        - http_code: 400

      Example:
        input json:
            {
              "name": "match test name"
            }


### GET /ENC/API/dev/task

Get all task data without raw_data.

      Auth:
        - token

      Args: All OPTION
        - page: page number. (Default: 1)
        - page_size: page size. (Default: 100)
        - accept_status: task access status filter.
          - Allow Value:
            - all     : filter all
            - reject  : filter rejected task
            - accept  : filter accepted task
            - waiting : filter waiting for access task
          - NOTE: can use "," combine. EX: reject,accept
          - NOTE: if 'all' in filter, then ignore this field another filter
          - Default: all
        - exec_status: task execute status filter.
          - Allow value:
            - all     : filter all
            - finish  : filter finish task
            - running : filter running task
            - failed  : filter failed task
            - waiting : filter waiting task
          - NOTE: can use "," combine. EX: failed,running
          - NOTE: if 'all' in filter, then ignore this field another filter
          - Default: all
        - type: if filter schedule task.
          - Allow value:
            - 0 : not schedule task
            - 1 : only schedule task
            - 2 : all task
          - NOTE: only choose one
          - Default: 2
        - start_time: task update start time. Format: "yyyy-mm-dd HH:MM:SS" (Default: No filter)
        - end_time: task update end time. Format: "yyyy-mm-dd HH:MM:SS" (Default: No filter)
        - create_start_time: task create start time. Format: "yyyy-mm-dd HH:MM:SS" (Default: No filter)
        - create_end_time: task create end time. Format: "yyyy-mm-dd HH:MM:SS" (Default: No filter)
        - create_user: create this task user name (Default: No filter)
        - accept_user: accept this task user name (Default: No filter)
        - name: task name (Default: No filter)
        - commit_id: task commit_id (Default: No filter)

      Returns:
        - type: dist
        - format:
        {
          "page": <int: number of page>,
          "page_size": <int>,
          "filter_warning": <str: if filter format error then error message on here>,
          "total_tasks": <int>,
          "tasks":
          [
            {
              "id": <int: task_id>,
              "commit_id": <str>,
              "name": <str: task_name>,
              "create_user": <str>,
              "accept_user": <str>,
              "accept_status": <str: 'reject'|'accept'|'waiting'>,
              "type": <str: 'at'|'once'|'repeat'>,
              "exec_status": <str: 'finish'|'running'|'failed'|'waiting'>,
              "desc": <str>,
              "commit_message": <str>,
              "create_timestamp": <str>,
              "update_timestamp": <str>,
              "schedule":{
            # IF type="at"
                "run_timestamp": <str>
            # IF type="repeat"
                "minutes": <list>,
                "hours": <list>,
                "days": <list>,
                "duration": <int>
            # IF type="once" this dict must be zero dict
              }
            }
          ]
      Example:
        {
          "page": 1,
          "page_size": 100,
          "filter_warning": "",
          "total_tasks": 2,
          "tasks":
          [
            {
              "id": 53,
              "commit_id": "iojqwoepfpoih",
              "name": "test_task",
              "create_user": "test_admin",
              "accept_user": "test_admin",
              "accept_status": "accept",
              "type": "at",
              "exec_status": "finish",
              "desc": "",
              "commit_message": "",
              "create_timestamp": "2018-11-29T06:14:05",
              "update_timestamp": "2018-11-29T06:14:05",
              "schedule":{
                "run_timestamp": "2018-11-27T14:32:11"
              }
            },
            {
              "id": 56,
              "commit_id": "iojqwoepfpoih",
              "name": "test_task",
              "create_user": "test_admin",
              "accept_user": "test_admin",
              "accept_status": "accept",
              "type": "repeat",
              "exec_status": "waiting",
              "create_timestamp": "2018-11-29T09:26:09",
              "update_timestamp": "2018-11-29T09:26:09",
              "schedule":{
                "minutes": [0],
                "hours": [23],
                "days": [15, "$"],
                "duration": 120
              }
            }
          ]
        }


### GET /ENC/API/dev/task/&lt;task_id&gt;

Get a task data with raw_data.

      Auth:
        - token

      Args:
        - Not need

      Returns:
        - type: dist
        - format:

      Examples:
        [
          {
            "id": 56,
            "commit_id": "iojqwoepfpoih",
            "name": "test_task",
            "create_user": "test_admin",
            "accept_user": "test_admin",
            "accept_status": "accept",
            "type": "once",
            "exec_status": "finish",
            "create_timestamp": "2018-11-29T09:26:09",
            "update_timestamp": "2018-11-29T09:26:09",
            "raw_task": #Format See "Commit_task Action name",
            "schedule":{
            }
          }
        ]

### GET /ENC/API/dev/task/&lt;task_id&gt/download;

Download task task_id command file.

      Auth:
        - token
        - role: Admin, Operator

      Args:
        - no data

      Returns:
        - http_code: 200
        - download file: tar.gz

      Raise:
        - http_code: 400
          - If task_id has no commands
          - another error

### POST /ENC/API/dev/task/direct_commit
Commit all.

      Auth:
        - token
        - commit_id

      Args:
        - Type: json
        - format:
        {
          "name": <str: task_name>,
          "task": [
            {
              "index": <INT: action order>,
              "name": <STR: Action name>,
              "data": <Object: according to action>
            }
          ],
          "schedule":{       # OPTION, if have this field will in schedule
            "type": <str: at, repeat>,  # "at" and "repeat" "data" will different
          # at
            "data": {"timestamp": "2018-12-31T11:11:11"}
          # repeat
            "data": {  # default = "*"
              "minutes": [<int|"*">],
              "hours": [<int>|"*"],
              "days": [<int>|"*"|"$"],
              "weeks": [<int>|"*"],
              "months": [<int>|"*"]
              "duration": 120
            }
          }
        }

      Returns:
        - http_code: 200
        - no data

      Raise:
        - http_code: 400
- Action name:
  - [rollback](#rollback)
  - [initialize_interfaces](#initialize_interfaces)
  - [set_interfaces_status](#set_interfaces_status)
  - [set_interfaces_mode](#set_interfaces_mode)
  - [set_interfaces_desc](#set_interfaces_desc)
  - [set_interfaces_duplex](#set_interfaces_duplex)
  - [set_interfaces_speed](#set_interfaces_speed)
  - [set_interfaces_mtu](#set_interfaces_mtu)
  - [set_interfaces_negotiation](#set_interfaces_negotiation)
  - [set_interfaces_rstp](#set_interfaces_rstp)
  - [set_interfaces_ipaddresses](#set_interfaces_ipaddresses)
  - [del_interfaces_ipaddresses](#del_interfaces_ipaddresses)
  - [add_vlans](#add_vlans)
  - [set_vlans](#set_vlans)
  - [set_vlans_members](#set_vlans_members)
  - [del_vlans_members](#del_vlans_members)
  - [del_vlan_range_members](#del_vlan_range_members)
  - [del_vlans](#del_vlans)
  - [set_vlan_interfaces](#set_vlan_interfaces)
  - [del_vlan_interfaces](#del_vlan_interfaces)
  - [del_vlan_interfaces_vga](#del_vlan_interfaces_vga)
  - [del_vlan_interfaces_mac_address](#del_vlan_interfaces_mac_address)
  - [add_ae](#add_ae)
  - [set_ae](#set_ae)
  - [del_ae](#del_ae)
  - [add_mirrors](#add_mirrors)
  - [set_mirrors](#set_mirrors)
  - [del_mirrors](#del_mirrors)
  - [add_addressbooks](#add_addressbooks)
  - [set_addressbooks](#set_addressbooks)
  - [del_addressbooks](#del_addressbooks)
  - [add_zones](#add_zones)
  - [set_zones](#set_zones)
  - [del_zones](#del_zones)
  - [add_policies](#add_policies)
  - [set_policies](#set_policies)
  - [del_policies](#del_policies)
  - [change_policies_sequence](#change_policies_sequence)
  - [add_full_ospf](#add_full_ospf)
  - [join_ospf](#join_ospf)
  - [del_ospf](#del_ospf)
  - [set_policer](#set_policer)
  - [del_policer](#del_policer)
  - [add_firewall_filter](#add_firewall_filter)
  - [del_firewall_filter](#del_firewall_filter)
  - [set_acl](#set_acl)
  - [set_policy_base_routing](#set_policy_base_routing)
  - [set_qos_policy](#set_qos_policy)
  - [change_firewall_filter_term_sequence](#change_firewall_filter_term_sequence)
  - [add_firewall_filter_match](#add_firewall_filter_match)
  - [set_firewall_filter_match](#set_firewall_filter_match)
  - [del_firewall_filter_match](#del_firewall_filter_match)
  - [set_qos_scheduler](#set_qos_scheduler)
  - [add_iccp_peer](#add_iccp_peer)
  - [del_iccp_peer](#del_iccp_peer)
  - [add_mc_ae](#add_mc_ae)
  - [set_mc_ae](#set_mc_ae)
  - [del_mc_ae](#del_mc_ae)
  - [add_esi_ae](#add_esi_ae)
  - [set_esi_ae](#set_esi_ae)
  - [del_esi_ae](#del_esi_ae)
  - [add_ip_fabric](#add_ip_fabric)
  - [set_ip_fabric](#set_ip_fabric)
  - [del_ip_fabric](#del_ip_fabric)
  - [add_routing_instance_vrf](#add_routing_instance_vrf)
  - [set_routing_instance_vrf](#set_routing_instance_vrf)
  - [del_routing_instance_vrf](#del_routing_instance_vrf)
  - [add_routing_table_route](#add_routing_table_route)
  - [set_routing_table_route](#set_routing_table_route)
  - [del_routing_table_route](#del_routing_table_route)

## Commit_task Action name:
### rollback
  - name: "rollback"
  - data format:

        [<int:dev_id>]

  - example:

        {
          "index": 1,
          "name": "rollback",
          "data": [1]
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_id": <int>,
            "hostname": <str>,
            "nickname": <str>
          }
        ]

  - NOTE1: "raw_task" format hostname and nickname is NULL when device not exist

### initialize_interfaces
  - name: "initialize_interfaces"
  - data format:

        [
          {
            "dev_id": <int>,
            "interfaces": [
              {
                "if_name": <str>,
                "family": <str: inet|ethernet-switching>
              }
            ]
          }
        ]

  - example:
        [
          {
            "dev_id": 35,
            "interfaces": [
              {
                "if_name": "et-0/0/33",
                "family": "inet"
              }
            ]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "family": <str>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_status
  - name: "set_interfaces_status"
  - data format:

        {
         <str:dev_id>: {<str:interface_name>: <bool>}
        }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_status",
          "data": {
            "2": {"ge-0/0/3": true}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "status": <bool>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_mode
  - name: "set_interfaces_mode"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <str:"access"|"trunk"|"">
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_mode",
          "data":{
            "2": {"ge-0/0/4": "access"}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "mode": <str>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_desc
  - name: "set_interfaces_desc"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <str: desc>
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_desc",
          "data":{
            "2": {"ge-0/0/4": "abcde"}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "desc": <str>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_duplex
  - name: "set_interfaces_duplex"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <str: "full">
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_duplex",
          "data":{
            "2": {"ge-0/0/4": "auto"}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "duplex": <str>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_speed
  - name: "set_interfaces_speed"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <str: "auto" | "100" | "1000">
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_speed",
          "data":{
            "2": {"ge-0/0/4": "1000"}
          }
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "speed": <str>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_mtu
  - name: "set_interfaces_mtu"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <int: 1514~9216>
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_mtu",
          "data":{
            "2": {"ge-0/0/4": 9216}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "mtu": <int>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_negotiation
  - name: "set_interfaces_negotiation"
  - data format:

          {
            <str:dev_id>: {
              <str:interface_name>: <bool>
            }
          }
  - example:

        {
          "index": 1,
          "name": "set_interfaces_negotiation",
          "data":{
            "2": {"ge-0/0/4": true}
          }
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [
              {
                "if_name": <str>,
                "negotiation": <bool>
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_rstp
  - name: "set_interfaces_rstp"
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": [
              {
                "if_name": <str:if_name>,
                "rstp_status": <bool>,
                "desc": <str>   # OPTION,  if NO this key then do nothing
              }
            ]
          }
        ]

  - example:

        [
          {
            "dev_id": 3,
            "data": [
              {
                "if_name": "et-0/0/33",
                "rstp_status": true,
                "desc": "test"
              }
            ]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
            "interfaces": [
              {
                "if_name": <str:if_name>,
                "rstp_status": <bool>
                "desc": <str>   # OPTION,  if NO this key then do nothing
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_interfaces_ipaddresses
  - name: "set_interfaces_ipaddresses"
  - data format:

        [
          "dev_id": <int>,
          "interfaces": [
            {
              "name": <str>,
              "ip_addresses": [<str>]
            }
          ]
        ]

  - example:

        [
          "dev_id": 35,
          "interfaces": [
            {
              "name": "et-0/0/33.0",
              "ip_addresses": ["10.0.0.1/24"]
            }
          ]
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
         {
          "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
          "interfaces": [
            {
              "if_name": <str>,
              "ip_addresses": [<str>]
            }
          ]
         }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_interfaces_ipaddresses
  - name: "del_interfaces_ipaddresses"
  - data format:

        [
          "dev_id": <int>,
          "interfaces": [
            {
              "name": <str>,
              "ip_addresses": [<str>]
            }
          ]
        ]

  - example:

        [
          "dev_id": 35,
          "interfaces": [
            {
              "name": "et-0/0/33.0",
              "ip_addresses": ["10.0.0.1/24"]
            }
          ]
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
         {
          "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
          "interfaces": [
            {
              "if_name": <str>,
              "ip_addresses": [<str>]
            }
          ]
         }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_vlans
  - name: "add_vlans"
  - data format:

        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "devices": [
              {"dev_id": <int: dev_id>}
            ]
          }
        ]

  - example:
        [
          {
            "vlan_id": "3",
            "devices": [
              {"dev_id": 35}
            ]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "devices": [
                {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
            ]
          }
        ]

  - NOTE1: "raw_task" format "devices" items hostname and nickname is NULL when device not exist

### set_vlans
  - name: "set_vlans"
  - data format:

        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "data": {
                <str:dev_id>: [
                  {
                    "if_name": <str:interface_name>,
                    "desc": <str:desc>
                  }
                ]
            }
          }
        ]
  - example:

        [
          {
            "vlan_id": "222",
            "data": {
                "2": [
                  {
                    "if_name":"ge-0/0/5.0",
                    "desc":"interface desc1"
                  },
                  {
                    "if_name":"ge-0/0/6.0",
                    "desc":"interface desc2"
                  }
                ]
            }
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "vlan_id": <str|int>,
            "devices": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "interfaces": [
                  {
                    "if_name": <str>,
                    "desc": <str>
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_vlans_members
  - name: "set_vlans_members"
  - data format:
        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "data": [
              {
                "dev_id": <int:dev_id>,
                "interfaces": [{
                  "if_name": <str:if_name>,
                  "desc": <desc>  # Option
                  }]
              }
            ]
          }
        ]

  - example:
        [
          {
            "vlan_id": "5-100",
            "data": [
              {
                "dev_id": 3,
                "interfaces": [{
                  "if_name": "et-0/0/33.0",
                  "desc": "desc"
                  }]
              }
            ]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "devices": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "interfaces": [{
                  "if_name": <str:if_name>,
                  "desc": <str>  # Option
                  }]
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlans_members
  - name: "del_vlans_members"
  - data format:

          [
            {
              "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
              "data": {
                <str:dev_id>: [
                  {
                    "if_name": <str:interface_name>
                  }
                ]
              }
            }
          ]

  - example:

          [
              {
                "vlan_id": "222",
                "data": {
                  "2": [
                    {"if_name":"ge-0/0/5"},
                    {"if_name":"ge-0/0/6"}
                  ]
                }
              }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
            "devices": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "interfaces": [{
                  "if_name": <str:if_name>
                  }]
              }
            ]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlan_range_members
  - name: "del_vlan_range_members"
  - data format:
          [
            {
              "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
              "data": [
               {
                "dev_id": <int:dev_id>,
                "interfaces": [{"if_name": <str:if_name>}]
               }
              ]
            }
          ]
  - example:
          [
            {
              "vlan_id": "5-100",
              "data": [
               {
                "dev_id": 35,
                "interfaces": [{"if_name": "et-0/0/33.0"}]
               }
              ]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          [
            {
              "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
              "devices": [
                {
                  "dev_info": {
                    "dev_id": <int>,
                    "hostname": <str>,
                    "nickname": <str>
                  },
                  "interfaces": [{
                    "if_name": <str:if_name>
                    }]
                }
              ]
            }
          ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlans
  - name: "del_vlans"
  - data format:
          [
            {
              "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
              "devices": [
                {"dev_id": <int: dev_id>}
              ]
            }
          ]
  - example:
          [
            {
              "vlan_id": "5",
              "devices": [
                {"dev_id": 35}
              ]
            }
          ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
          [
            {
              "vlan_id": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">,
              "devices": [
                  {
                    "dev_id": <int>,
                    "hostname": <str>,
                    "nickname": <str>
                  }
              ]
            }
          ]

  - NOTE1: "raw_task" format "devices" hostname and nickname is NULL when device not exist

### set_vlan_interfaces
  - name: "set_vlan_interfaces"
  - data format:

          [
            {
              "dev_id": <int>,
              "data": [
                {
                  "vlan_tag": <int>,
                  "v4_mac_address": <str>, # option
                  "v6_mac_address": <str>, # option
                  "ip_addresses": [
                    {
                      "ip_address": <str>,
                      "virtual_gateway_address": <str|null>
                    }
                  ]
                }
              ]
            }
          ]

  - example:
          [
            {
              "dev_id": 35,
              "data": [
                {
                  "vlan_tag": 444,
                  "v4_mac_address": "00:00:00:01:05:55",
                  "ip_addresses": [
                    {
                      "ip_address": "192.168.104.22/24",
                      "virtual_gateway_address": "192.168.104.1"
                    }
                  ]
                }
              ]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
          [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "data": [
                {
                  "vlan_tag": <int>,
                  "v4_mac_address": <str>, # option
                  "v6_mac_address": <str>, # option
                  "ip_addresses": [
                    {
                      "ip_address": <str>,
                      "virtual_gateway_address": <str> # option
                    }
                  ]
                }
              ]
            }
          ]
  - NOTE1: OPTION field maybe have no this key
  - NOTE2: "virtual_gateway_address" field is NULL or "" or no this key then not set VGA
  - NOTE3: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlan_interfaces
  - name: "del_vlan_interfaces"
  - data format:

          [
            {
              "dev_id": <int>,
               "data": [
                {
                  "vlan_tag": <int>
                }
              ]
            }
          ]
  - example:
          [
            {
              "dev_id": 35,
               "data": [
                {
                  "vlan_tag": 444
                }
              ]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "data": [
                {
                  "vlan_tag": <int>,
                }
              ]
            }
          ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlan_interfaces_vga
  - name: "del_vlan_interfaces_vga"
  - data format:

          [
            {
              "dev_id": <int>,
              "data": [
                {
                  "vlan_tag": <int>,
                  "ip_addresses": [<str: ip_address>]
                }
              ]
            }
          ]
  - example:
          [
            {
              "dev_id": 35,
              "data": [
                {
                  "vlan_tag": 444,
                  "ip_addresses": ["192.168.104.22/24"]
                }
              ]
            }
          ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "data": [
                {
                  "vlan_tag": <int>,
                  "ip_addresses": [
                    {
                      "ip_address": <str>,
                    }
                  ]
                }
              ]
            }
          ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_vlan_interfaces_mac_address
  - name: "del_vlan_interfaces_mac_address"
  - data format:
          [
            {
              "dev_id": <int>,
              "data": [
                {
                  "vlan_tag": <int>
                }
              ]
            }
          ]
  - example:
          [
            {
              "dev_id": 35,
              "data": [
                {
                  "vlan_tag": 44
                }
              ]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "data": [
                {
                  "vlan_tag": <int>,
                }
              ]
            }
          ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_ae
  - name: "add_ae"
  - data format:

          [
            {
                "dev_id": <int:dev_id>,
                "vlan": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">, # Option
                "mtu": <int>, # Option
                "data": [
                  {
                    "desc": <str: desc>, # OPTION
                    "ae_members": [<str:interface_name>]
                  }
                ]
            }
          ]
  - example:

          [
            {
                "dev_id": 2,
                "vlan": "1-4094",
                "mtu": 1550
                "data": [
                  {
                    "desc": "ae interface desc",
                    "ae_members": ["ge-0/0/7","ge-0/0/8","ge-0/0/9"]}
                ]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "vlan": <str>, # Option
              "mtu": <int>, # Option
              "data": [
                {
                  "desc": <str>, # Option
                  "ae_members": [<STR: interface_name>, ...]
                }
              ]
            }
          ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### set_ae
  - name: "set_ae"
  - data format:

          [
            {
                "dev_id": <int:dev_id>,
                "vlan": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">, # Option
                "mtu": <int>, # Option
                "data": [
                  {
                    "ae_name": <str>,
                    "desc": <str: desc>, # OPTION
                    "ae_members": [<str:interface_name>]
                  }
                ]
            }
          ]
  - example:

            [
              {
                  "dev_id": 2,
                  "data": [
                    {
                      "ae_name": "ae0",
                      "desc": "ae interface desc",
                      "ae_members": ["ge-0/0/7","ge-0/0/8","ge-0/0/10"]
                    }
                  ]
              }
            ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
            [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "vlan": <str>, # Option
                "mtu": <int>, # Option
                "data": [
                  {
                    "ae_name": <STR: ae name>
                    "ae_members": [<STR: interface_name>, ...],
                    "desc": <str>  # OPTION
                  }
                ]
              }
            ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### del_ae
  - name: "del_ae"
  - data format:

        [
          {
              "dev_id": <int:dev_id>,
              "data": [<str: ae_name>]
          }
        ]
  - example:

          [
            {
                "dev_id": 2,
                "data": ["ae0"]
            }
          ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
            [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "data": [
                  {
                    "ae_name": <STR: ae name>
                  }
                ]
              }
            ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_mirrors
  - name: "add_mirrors"
  - valid device type: switch
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": {
                "in_port": {
                  <str:interface_name>: <str:"egress"|"ingress"|"all">
                },
                "out_port": <str:interface_name>
            }
          }
        ]
  - example:

        {
          "name": "add_mirrors",
          "data":[
            {
              "dev_id": 2,
              "data": {
                  "in_port": {
                    "ge-0/0/11": "all"
                  },
                  "out_port": "ge-0/0/13"
              }
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": {
              "in_port": [
                {
                  "if_name": <STR: interface_name>,
                  "type": <STR: egress|ingress|all>
                }
              ],
              "out_port": <STR: interface_name>
            }
          },
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_mirrors
  - name: "set_mirrors"
  - valid device type: switch
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": {
              "name": <str:mirror_name>
              "in_port": {
                <str:interface_name>: <str:"egress"|"ingress"|"all">
              },
              "out_port": <str:interface_name>
            }
          }
        ]
  - example:

        {
          "name": "set_mirrors",
          "data":[
            {
              "dev_id": 2,
              "data": {
                "name": "m_out_ge-0I0I13",
                "in_port": {
                  "ge-0/0/12": "all"
                },
                "out_port": "ge-0/0/13"
              }
            }
          ]
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": {
              "in_port": [
                {
                  "if_name": <STR: interface_name>,
                  "type": <STR: egress|ingress|all>
                }
              ],
              "out_port": <STR: interface_name>
            }
          },
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
### del_mirrors
  - name: "del_mirrors"
  - valid device type: switch
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": [<str:mirror_name>]
          }
        ]
  - example:

        {
          "name": "del_mirrors",
          "data":[
            {
              "dev_id": 2,
              "data": ["m_out_ge-0I0I13"]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": [<str: mirror name>]
          },
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_addressbooks
  - name: "add_addressbooks"
  - data format:

        [
          {
            "name": <str:addressbook_name>,
            "addr_type": <str: "ip"|"set">,
            "address": [<str:ip|addressbook_name>]
          }
        ]
  - example:

        {
          "name": "add_addressbooks",
          "data":[
            {
              "name": "addr111",
              "addr_type": "ip",
              "address": ["10.0.0.3/24"]
            },
            {
              "name": "addr112",
              "addr_type": "ip",
              "address": ["10.0.1.3/24"]
            },
            {
              "name": "addr113",
              "addr_type": "set",
              "address": ["addr111", "addr112"]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format
### set_addressbooks
  - name: "set_addressbooks"
  - data format:

        [
          {
            "id": <int: addressbook_id>,
            "name": <str:addressbook_name>,
            "addr_type": <str: "ip"|"set">,
            "address": [<str:ip|addressbook_name>]
          }
        ]
  - example:

        {
          "name": "set_addressbooks",
          "data":[
            {
                "id": 1,
                "name": "addr111",
                "addr_type": "ip",
                "address": ["10.0.2.3/24"]
            },
            {
                "id": 2,
                "name": "addr112",
                "addr_type": "ip",
                "address": ["10.0.3.3/24"]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format
### del_addressbooks
  - name: "del_addressbooks"
  - data format:

        [<int: addrebook_id>]
  - example:

        {
          "name": "del_addressbooks",
          "data": [3,1,2]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format
### add_zones
  - name: "add_zones"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": [
              {
                "name": <str: zone_name>,
                "addressbook": [<str: exist addressbook_name>],
                "interfaces": [<str: interface_name>],
                "services": [<str>],
                "protocols": [<str>]
              }
            ]
          }
        ]
  - example:

        {
          "name": "add_zones",
          "data":[
            {
              "dev_id": 1,
              "data": [
                {
                  "name": "zone1",
                  "addressbook": ["addr112"],
                  "interfaces": ["ge-0/0/4"],
                  "services": ["all"],
                  "protocols": ["all"]
                },
                {
                  "name": "zone2",
                  "addressbook": ["addr111"],
                  "interfaces": ["ge-0/0/5"],
                  "services": ["all"],
                  "protocols": ["all"]
                }
              ]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": [
              {
                "name": <str: zone_name>,
                "addressbook": [<str: exist addressbook_name>],
                "interfaces": [<str: interface_name>],
                "services": [<str>],
                "protocols": [<str>]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_zones
  - name: "set_zones"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "data": [
              {
                "id": <int: zone_id>
                "name": <str: zone_name>,
                "addressbook": [<str: exist addressbook_name>],
                "interfaces": [<str: interface_name>],
                "services": [<str>],
                "protocols": [<str>]
              }
            ]
          }
        ]
  - example:

        {
          "name": "set_zones",
          "data":[
            {
              "dev_id": 1,
              "data": [
                {
                  "id": 1,
                  "name": "zone1",
                  "addressbook": ["addr111"],
                  "interfaces": ["ge-0/0/4"],
                  "services": ["all"],
                  "protocols": ["all"]
                },
                {
                  "id": 2,
                  "name": "zone2",
                  "addressbook": ["addr112"],
                  "interfaces": ["ge-0/0/5"],
                  "services": ["all"],
                  "protocols": ["all"]
                }
              ]
            }
          ]
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": [
              {
                "id": <int: zone_id>
                "name": <str: zone_name>,
                "addressbook": [<str: exist addressbook_name>],
                "interfaces": [<str: interface_name>],
                "services": [<str>],
                "protocols": [<str>]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_zones
  - name: "del_zones"
  - valid device type: firewall
  - data format:
        [
          {
            "dev_id": <int: dev_id>,
            "data":[<int_ dev_id>]
          }
        ]
  - example:

        {
          "name": "del_zones",
          "data": [
            {
              "dev_id": 1,
              "data":[1, 2]
            }
          ]
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":[<int_ dev_id>]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_policies
  - name: "add_policies"
  - valid device type: firewall
  - data format:

        {
          "dev_list": [<int:dev_id>],
          "data":{
            "name":<str:policy_name>,
            "src_zone": {
              "name": "<str:zone_name>,
              "addressbook": [<str: zone_addressbook>]
            },
            "dst_zone": {
              "name": "<str:zone_name>,
              "addressbook": [<str: zone_addressbook>]
            },
            "application": [<str>],
            "action": <str:"permit"|"deny"|"reject">
          }
        }
  - example:

        {
          "name": "add_policies",
          "data": {
            "dev_list": [1],
            "data":{
              "name":"p1",
              "src_zone": {
                "name": "zone1",
                "addressbook": ["addr111"]
              },
              "dst_zone": {
                "name": "zone2",
                "addressbook": ["addr112"]
              },
              "application": ["any"],
              "action": "permit"
            }
          }
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "dev_list": [{
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            }],
          "data":{
            "name":<str:policy_name>,
            "src_zone": {
              "name": "<str:zone_name>,
              "addressbook": [<str: zone_addressbook>]
            },
            "dst_zone": {
              "name": "<str:zone_name>,
              "addressbook": [<str: zone_addressbook>]
            },
            "application": [<str>],
            "action": <str:"permit"|"deny"|"reject">
          }
        }
  - NOTE1: "raw_task" format "dev_list" hostname and nickname is NULL when device not exist

### set_policies
  - name: "set_policies"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int:dev_id>,
            "id": <int:policy_id>,
            "name":"<str:policy_name>,
            "src_zone": {
              "name": <str: zone_name>,
              "addressbook": [<str: addressbook_name>]
            },
            "dst_zone": {
              "name": <str: zone_name>,
              "addressbook": [<str: addressbook_name>]
            },
            "application": [<str>],
            "action": <str:"permit"|"deny"|"reject">
          }
        ]

  - example:

        {
          "name": "set_policies",
          "data": [
            {
              "dev_id": 1,
              "id": 1,
              "name":"p11",
              "src_zone": {
                "name": "zone2",
                "addressbook": ["addr112"]
              },
              "dst_zone": {
                "name": "zone1",
                "addressbook": ["addr111"]
              },
              "application": ["any"],
              "action": "permit"
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "id": <int:policy_id>,
            "name":"<str:policy_name>,
            "src_zone": {
              "name": <str: zone_name>,
              "addressbook": [<str: addressbook_name>]
            },
            "dst_zone": {
              "name": <str: zone_name>,
              "addressbook": [<str: addressbook_name>]
            },
            "application": [<str>],
            "action": <str:"permit"|"deny"|"reject">
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_policies
  - name: "del_policies"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int: dev_id>,
            "data": [<int: policy_id>]
          }
        ]

  - example:

        {
          "name": "del_policies",
          "data": [
            {
              "dev_id": 1,
              "data": [1]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": [<int: policy_id>]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### change_policies_sequence
  - name: "change_policies_sequence"
  - valid device type: firewall
  - data format:

        {
          "dev_id": <int: dev_id>,
          "src_zone": <str: zone_name>,
          "dst_zone": <str: zone_name>,
          "policies": [
            {
              "name": <str: policy_name>,
              "seq_num": <int>
            }
          ]
        }

  - example:

        {
          "name": "change_policies_sequence",
          "data": {
            "dev_id": 1,
            "src_zone": "zone2",
            "dst_zone": "zone1",
            "policies": [
              {
                "name": "p11",
                "seq_num": 1
              }
            ]
          }
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
          "src_zone": <str: zone_name>,
          "dst_zone": <str: zone_name>,
          "policies": [
            {
              "name": <str: policy_name>,
              "seq_num": <int>
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_full_ospf
  - name: "add_full_ospf"
  - data format:
        {
          "area": <str>,
          "area_type": <str: "regular"| "stub"| "nssa">,
          "nickname": <str>,
          "members": [
            {
              "dev_id": <int>,
              "default_metric": <int| null>,
              "reference_bandwidth": <str| null>,
              "routing_instance": <str: instance_name| null>,
              "interfaces": [
                {
                  "name": <str>,
                  "type": <str: "p2p"| "p2mp"| "nbma">,
                  "hello_interval": <int>,
                  "dead_interval": <int>,
                  "metric": <int| null>
                }
              ]
            }
          ]
        }
        {
          "area": "0.0.0.1",
          "area_type": "regular",
          "nickname": "testospf",
          "members": [
            {
              "dev_id": 35,
              "default_metric": null,
              "reference_bandwidth": "1g",
              "routing_instance": "zzz",
              "interfaces": [
                {
                  "name": "et-0/0/33.0",
                  "type": "p2p",
                  "hello_interval": 10,
                  "dead_interval": 40,
                  "metric": null
                }
              ]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "area": <str>,
          "area_type": <str>,
          "nickname": <str>,
          "members": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "default_metric": <int| null>,
              "reference_bandwidth": <str| null>,
              "routing_instance": <str: instance_name| null>,
              "interfaces": [
                {
                  "name": <str>,
                  "type": <str: "p2p"| "p2mp"| "nbma">,
                  "hello_interval": <int>,
                  "dead_interval": <int>,
                  "metric": <int| null>
                }
              ]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### join_ospf
  - name: "join_ospf"
  - data format:

        [
          {
            "dev_id": <int>,
            "interfaces": [<str: if_name>]
          }
        ]

  - example:

        [
          {
            "dev_id": 1,
            "interfaces": ["ge-0/0/1"]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [<str: if_name>]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_ospf
  - name: "del_ospf"
  - data format:

        [
          {
            "dev_id": <int>,
            "ospf": [
              {
                "id": <int>,
                "interfaces": [<str: if name>]
              }
            ]
          }
        ]

  - example:

        [
          {
            "dev_id": 1,
            "ospf": [
              {
                "id": 1,
                "interfaces": ["ge-0/0/1"]
              }
            ]
          }
        ]

### set_policer
  - name: "set_policer"
  - valid device type: firewall
  - data format:

        {
          "policer_in": <str>,
          "policer_out": <str>,
          "data": [
            {
              "dev_id": <int>,
              "interfaces": [<str:if_name>]
            }
          ]
        }

  - NOTE1: Key `policer_in` and `policer_out` choose one at lease.
  - NOTE2: Key `policer_in` and `policer_out` unit is MB
  - example:

        {
          "policer_in": "5M",
          "data": [
            {
              "dev_id": 1,
              "interfaces": ["gr-0/0/0.1"]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "policer_in": <str>,
          "policer_out": <str>,
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "interfaces": [<str:if_name>]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_policer
  - name: "del_policer"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int>,
            "interfaces": [<str:if_name>]
          }
        ]

  - example:

        [
          {
            "dev_id": 1,
            "interfaces": ["gr-0/0/0.1"]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "interfaces": [<str:if_name>]
          }
        ]

  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_firewall_filter
  - name: "add_firewall_filter"
  - data format:
        [
          {
            "dev_id": <int>,
            "data":
            [
              {
                "name": <str:name>,
                "family": <str:family>,
                "interfaces": [<str:if_name>, ...]
              }
            ]
          }
        ]

  - NOTE1: family in ["ethernet-switching", "inet", "inet6"]
  - NOTE2: name limit: only "^[a-zA-Z0-9_-]{1,64}$"
  - NOTE3: interface's family must same as firewall_filter's family
  - Example:

        [
          {
            "dev_id": 1,
            "data":
            [
              {
                "name": "PBR",
                "family"； "inet",
                "interfaces": ["ge-0/0/1.0"]
              },
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":
            [
              {
                "name": <str:name>,
                "family": <str:family>,
                "interfaces": [<str:if_name>, ...]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist


### del_firewall_filter
  - name: "del_firewall_filter"
  - data format:
        [
          {
            "dev_id": <int>,
            "data":
            [
              <int: firewall_filter id>
            ]
          }
        ]

  - NOTE1: family in ["ethernet-switch", "inet", "inet6"]
  - NOTE2: name limit: only "^[a-zA-Z0-9_-]{1,64}$"
  - Example:

        [
          {
            "dev_id": 1,
            "data":
            [1, 2]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":
            [
              <int: firewall_filter id>
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_acl
  - name: "set_acl"
  - valid device type: switch
  - data format:

        [
          {
            "dev_id": <int>,
            "data":
            [
              {
                "id": <int>,
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>, # OPTION
                    "action": <str: "accept" | "deny" | "reject">
                  }
                ]
              }
            ]
          }
        ]

  - NOTE1: match_name is OPTIONAL, if not setting match_name, it will match any
  - NOTE2: id is OPTIONAL, if no id, it mean a new term
  - example:

        [
          {
            "dev_id": 1,
            "data":
            [
              {
                "id": 1,
                "terms": [
                  {
                    "name": "term1",
                    "match_name": "match1"
                    "routing_instance_name": "to-WWW"
                  },
                  {
                    "id": 1,
                    "name": "default",
                    "action": "accept"
                  }
                ]
              },
            ]
          },
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":
            [
              {
                "id": <int>,
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>, # OPTION
                    "action": <str: "accept" | "deny" | "reject">
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist


### set_policy_base_routing
  - name: "set_policy_base_routing"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int>,
            "data":
            [
              {
                "id": <int>,
                "name": <str:name>,
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>, # OPTION
                    "routing_instance_name": <str>   or  "action": <str: "accept" | "deny" | "reject">
                  }
                ]
              }
            ]
          }
        ]

  - NOTE1: It must have routing_instance_name or action key, and cannot exist at the same time
  - NOTE2: match_name is OPTIONAL, if not setting match_name, it will match any
  - NOTE3: id is OPTIONAL, if no id, it mean a new term
  - example:

        [
          {
            "dev_id": 1,
            "data":
            [
              {
                "id": 1,
                "name": "PBR"
                "terms": [
                  {
                    "name": "term1",
                    "match_name": "match1"
                    "routing_instance_name": "to-WWW"
                  },
                  {
                    "id": 1,
                    "name": "default",
                    "action": "accept"
                  }
                ]
              },
            ]
          },
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":
            [
              {
                "id": <int>,
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>, # OPTION
                    "routing_instance_name": <str>  or  "action": <str: "accept" | "deny" | "reject">
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### set_qos_policy
  - name: "set_qos_policy"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int>,
            "data":
            [
              {
                "id": <int>,
                "name": <str:name>
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>,
                    "forwarding_class_name": <str>
                  }
                ]
              }
            ]
          }
        ]

  - NOTE1: match_name is OPTIONAL, if not setting match_name, it will match any
  - NOTE2: id is OPTIONAL, if no id, it mean a new term
  - example:

        [
          {
            "dev_id": 1,
            "data":
            [
              {
                "id": 1,
                "name": "QOS"
                "terms": [
                  {
                    "name": "qos1"
                    "match_name": "match2",
                    "forwarding_class_name": "LEVEL-0"
                  }
                ]
              },
            ]
          },
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data":
            [
              {
                "id": <int>,
                "name": <str:name>
                "terms": [
                  {
                    "id": <int>, # OPTION, if no id, mean new term
                    "name": <str:term_name>,
                    "match_name": <str:match_name>,
                    "forwarding_class_name": <str>
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### change_firewall_filter_term_sequence
  - name: "change_firewall_filter_term_sequence"
  - valid device type: firewall
  - data format:

        {
          "dev_id": <INT: dev_id>
          "data": [
            {
              "id": <int: filter_id>,
              "name": <str: filter_name>
              "terms": [
                {
                  "name": <str: term_name>,
                  "seq_num": <int>
                }
              ]
            }
          ]
        }

  - example:

        {
          "dev_id": 3
          "data": [
            {
              "id": 444,
              "name": "PBR"
              "terms": [
                {
                  "name": "term_test",
                  "seq_num": 1
                },
                {
                  "name": "term_test2",
                  "seq_num": 2
                },
                {
                  "name": "term_test3",
                  "seq_num": 3
                }
              ]
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
          "data": [
            {
              "id": <int: filter_id>,
              "name": <str: filter_name>
              "terms": [
                {
                  "name": <str: term_name>,
                  "seq_num": <int>
                }
              ]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_firewall_filter_match
  - name: "add_firewall_filter_match"
  - valid device type: firewall
  - data format:

        [
          {
            "name": <str>
            "src_ip_addresses": [<str:ip_addr>],
            "src_ports": [<str: "1~65535">],
            "dst_ip_addresses": [<str:ip_addr>],
            "dst_ports": [<str: "1~65535>],
            "protocols": [<str: "tcp"|"udp"|"icmp">]
          }
        ]

  - NOTE1: If empty list, it means "any"
  - example:

        [
          {
            "name": "test_match"
            "src_ip_addresses": ["192.168.0.1/24"],
            "src_ports": [],
            "dst_ip_addresses": ["0.0.0.0/0"],
            "dst_ports": ["1000-2000"]
            "protocols": []
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format
### set_firewall_filter_match
  - name: "set_firewall_filter_match"
  - valid device type: firewall
  - data format:

        [
          {
            "id": <int>,
            # vvvv  OPTION  vvvv
            "name": <str>
            "src_ip_addresses": [<str:ip_addr>],
            "src_ports": [<str: "1~65535">],
            "dst_ip_addresses": [<str:ip_addr>],
            "dst_ports": [<str: "1~65535>],
            "protocols": [<str: "tcp"|"udp"|"icmp">]
          }
        ]


  - NOTE1: key: id is necessary
  - NOTE2: key: name, it will change match name
  - NOTE3: The remaining 5 keys, at least one key have value
  - NOTE4: If empty list in key, it means "any". But 5 keys can NOT ALL be empty list.
  - example:

        [
          {
            "name": "test_match2"
            "src_ip_addresses": ["192.168.1.1/24"],
            "dst_ports": ["3000-4000"]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format

### del_firewall_filter_match
  - name: "del_firewall_filter_match"
  - valid device type: firewall
  - data format:

        [<match_id>]


  - NOTE1: If one match not found or is used in list, it will return bad request and stop delete
  - example:

        [8,7]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format

### set_qos_scheduler
  - name: "set_qos_scheduler"
  - valid device type: firewall
  - data format:

        [
          {
            "dev_id": <int>,
            "data": [
              {
                "forwarding_class_name": <str>,
                "transmit_rate": <int>
              }
            ]
          }
        ]

  - NOTE1: total sum of transmit_rate must be 100
  - Example:

        [
          {
            "dev_id": 2,
            "data": [
              {
                "forwarding_class_name": "LEVEL-0_BE",
                "transmit_rate": 0
              },
              {
                "forwarding_class_name": "LEVEL-1",
                "transmit_rate": 20
              },
              {
                "forwarding_class_name": "LEVEL-2",
                "transmit_rate": 30
              },
              {
                "forwarding_class_name": "LEVEL-3_NC",
                "transmit_rate": 50
              }
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "data": [
              {
                "forwarding_class_name": <str>,
                "transmit_rate": <int>
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_iccp_peer
  - name: "add_iccp_peer"
  - valid model: if model limitation.mc_ae > 0
  - data format:

        {
          "name": <str: iccp_peer name>
          "mtu": <int>  # OPTION
          "iccp_peer_devices": [
            {
              "dev_id": <int>,
              "interface": <str: if_name>
            },
            {
              "dev_id": <int>,
              "interface": <str: if_name>
            }
          ],
          "vlan": {
            "vlan_id": <int>,
            "data": {
              <int:dev_id>: [<str:if_name>, <str:if_name>]
            }
          }
        }
  - example:

        {
          "name": "Peer_VF3714190083_e3ea701b",
          "mtu": 1504,
          "iccp_peer_devices": [
            {
              "dev_id": 58,
              "interface": "ae0.0"
            },
            {
              "dev_id": 59,
              "interface":  "ae0.0"
            }
          ],
          "vlan": {
            "vlan_id": 4094,
            "data": {
              "58": ["ae.0"],
              "59": ["ae.0"]
            }
          }
        }

    - note: iccp_peer_devices dev_id must into valn.data
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "name": <str: iccp_peer name>
          "mtu": <int>  # OPTION
          "iccp_peer_devices": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "interface": <str: if_name>
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "interface": <str: if_name>
            }
          ],
          "vlan": {
            "vlan_id": <str|int>,
            "devices": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "interfaces": [
                  {
                    "if_name": <str>,
                    "desc": <str>
                  }
                ]
              }
            ]
          }
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### del_iccp_peer
  - name: "del_iccp_peer"
  - valid model: if model limitation.mc_ae > 0
  - data format:

        [<str: iccp_peer name>, ...]

  - example:

        ["Peer_VF3714190083_e3ea701b"]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format

### add_mc_ae
  - name: "add_mc_ae"
  - valid model: if model limitation.mc_ae > 0
  - data format:

        {
          "iccp_peer_name": <str>,
          "nickname": <str>,
          "vlan": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">, # Option
          "mtu": <int>, # OPTION
          "data": [
            {
              "dev_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            },
            {
              "dev_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            }
          ]
        }

  - example:

        {
          "iccp_peer_name": "Peer_VF3714190083_e3ea701b",
          "nickname": "new_mc_ae",
          "vlan": "1-300",
          "mtu": 1504,
          "data": [
            {
              "dev_id": 58,
              "desc": "mc_ae desc",
              "members": ["ge-0/0/0"]
            },
            {
              "dev_id": 59,
              "desc": "mc_ae desc",
              "members": ["ge-0/0/0"]
            }
          ]
        }

  - note: members length must > 0 each device
  - note: data must two element and these two dev_id must be iccp_peer device

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

          "iccp_peer_name": <str>,
          "nickname": <str>,
          "vlan": <str>, # Option
          "mtu": <int>, # OPTION
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "desc": <str>,
              "members": [<str: if_name>]
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "desc": <str>,
              "members": [<str: if_name>]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### set_mc_ae
  - name: "set_mc_ae"
  - valid model: if model limitation.mc_ae > 0
  - data format:

        {
          "iccp_peer_name": <str>,
          "nickname": <str>,
          "vlan": <str: format= \d or \d-\d multiple use , split, ex: "4,5-10">, # Option
          "mtu": <int>, # OPTION
          "data": [
            {
              "dev_id": <int>,
              "mc_ae_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            },
            {
              "dev_id": <int>,
              "mc_ae_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            }
          ]
        }

  - example:

        {
          "iccp_peer_name": "Peer_VF3714190083_e3ea701b",
          "nickname": "new_mc_ae2",
          "vlan": "3-50",
          "data": [
            {
              "dev_id": 58,
              "mc_ae_id": 1,
              "desc": "mc_ae desc",
              "members": ["ge-0/0/0"]
            },
            {
              "dev_id": 59,
              "mc_ae_id": 1,
              "desc": "mc_ae desc",
              "members": ["ge-0/0/0"]
            }
          ]
        }

  - note: members length must > 0 each device
  - note: data must two element and these two dev_id must be iccp_peer device
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "iccp_peer_name": <str>,
          "nickname": <str>,
          "vlan": <str>, # Option
          "mtu": <int>, # OPTION
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "mc_ae_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "mc_ae_id": <int>,
              "desc": <str>,
              "members": [<str: if_name>]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### del_mc_ae
  - name: "del_mc_ae"
  - valid model: if model limitation.mc_ae > 0
  - data format:

        {
          "iccp_peer_name": <str>,
          "data": [
            {
              "dev_id": <int>,
              "mc_ae_id": <int>
            },
            {
              "dev_id": <int>,
              "mc_ae_id": <int>
            }
          ]
        }

  - example:

        {
	        "iccp_peer_name": "Peer_VF3714190083_e3ea701b",
          "data": [
            {
              "dev_id": 58,
              "mc_ae_id": 1
            },
            {
              "dev_id": 59,
              "mc_ae_id": 1
            }
          ]
        }

  - note: data must two element and these two dev_id must be iccp_peer device
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "iccp_peer_name": <str>,
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "mc_ae_id": <int>
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "mc_ae_id": <int>
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_esi_ae
  - name: "add_esi_ae"
  - valid model: if model limitation.esi_ae > 0
  - data format:

        {
          "evpn_name": <str>,
          "nickname": <str>,
          "mtu": <int>, # option
          "data": [
            {
              "dev_id": <int>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            },
            {
              "dev_id": <int>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            }
          ]
        }

  - example:

        {
          "evpn_name": "evpn_100:1",
          "nickname": "new_esi_ae",
          "mtu": 1504,
          "data": [
            {
              "dev_id": 58,
              "members": ["ge-0/0/0"],
              "if_mode": "access",
              "desc": "esi ae desc",
              "vlan_tag": [222]
            },
            {
              "dev_id": 59,
              "members": ["ge-0/0/0"],
              "if_mode": "trunk",
              "desc": "esi ae desc",
              "vlan_tag": [200, 300]
            }
          ]
        }


  - note: members length must > 0 on each device
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "evpn_name": <str>,
          "nickname": <str>,
          "mtu": <int>, # option
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### set_esi_ae
  - name: "set_esi_ae"
  - valid model: if model limitation.esi_ae > 0
  - data format:

        {
          "evpn_name": <str>,
          "nickname": <str>,
          "mtu": <int>, # option
          "data": [
            {
              "dev_id": <int>,
              "esi_ae_id": <str>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            },
            {
              "dev_id": <int>,
              "esi_ae_id": <str>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            }
          ]
        }

  - example:

        {
          "evpn_name": "evpn_100:1",
          "nickname": "new_esi_ae2",
          "data": [
            {
              "dev_id": 58,
              "esi_ae_id": "00:00:00:00:00:01",
              "members": ["ge-0/0/1"],
              "if_mode": "trunk",
              "desc": "esi ae desc",
              "vlan_tag": [200, 300]
            },
            {
              "dev_id": 59,
              "esi_ae_id": "00:00:00:00:00:01",
              "members": ["ge-0/0/2"],
              "if_mode": "trunk",
              "desc": "esi ae desc",
              "vlan_tag": [200, 300]
            }
          ]
        }

  - note: members length must > 0 each device
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "evpn_name": <str>,
          "nickname": <str>,
          "mtu": <int>, # option
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "esi_ae_id": <str>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "esi_ae_id": <str>,
              "members": [<str: if_name>],
              "if_mode": <str: "access"| "trunk">,
              "desc": <str>,
              "vlan_tag": [<int: 1 ~ 4095>]
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### del_esi_ae
  - name: "del_esi_ae"
  - valid model: if model limitation.esi_ae > 0
  - data format:

        {
          "evpn_name": <str>,
          "data": [
            {
              "dev_id": <int>,
              "esi_ae_id": <str>
            },
            {
              "dev_id": <int>,
              "esi_ae_id": <str>
            }
          ]
        }

  - example:

        {
	        "evpn_name": "evpn_100:1",
          "data": [
            {
              "dev_id": 58,
              "esi_ae_id": "00:00:00:00:00:01"
            },
            {
              "dev_id": 59,
              "esi_ae_id": "00:00:00:00:00:01"
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "evpn_name": <str>,
          "data": [
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "esi_ae_id": <str>
            },
            {
              "dev_info": {
                "dev_id": <int>,
                "hostname": <str>,
                "nickname": <str>
              },
              "esi_ae_id": <str>
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### add_ip_fabric
  - name: "add_ip_fabric"
  - valid model:
  - data format:

        {
          "fabric_name": <str>,
          "ip_network": <str>, # if no this key, then using default ip_network: 100.64.0.0/24
          "mtu": <int>, # Option
          "spine": [
            {
              "dev_id": <int>
            }
          ],
          "leaf": [
            {
              "dev_id": <int>
            }
          ]
        }

  - note1: min of spine: 2, min of leaf: 1
  - note2: can not use duplicate device on spine and leaf
  - example:

        {
          "fabric_name": "lab_ip_fabric",
          "ip_network": "100.64.0.0/24",
          "spine": [
            {
              "dev_id": 12
            },
            {
              "dev_id": 13
            },
          ],
          "leaf": [
            {
              "dev_id": 15
            }
          ]
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "fabric_name": <str>,
          "ip_network": <str>, # OPTION
          "mtu": <int>, # OPTION
          "spine": [
            {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            }
          ],
          "leaf": [
            {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key
### set_ip_fabric
  - name: "set_ip_fabric"
  - valid model:
  - data format:

        {
          "fabric_id": <int>,
          "spine": [
            {
              "dev_id": <int>
            }
          ],
          "leaf": [
            {
              "dev_id": <int>
            }
          ]
        }

  - note1: min of spine: 2, min of leaf: 1
  - note2: can not use duplicate device on spine and leaf
  - note3: it will diff new and old device and auto add_members or del_members
  - example:

        {
          "fabric_id": 1,
          "spine": [
            {
              "dev_id": 12
            },
            {
              "dev_id": 13
            },
          ],
          "leaf": [
            {
              "dev_id": 15
            }
          ]
        }
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        {
          "fabric_id": <int>,
          "fabric_name": <str| null>,
          "mtu": <int>, # OPTION
          "spine": [
            {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            }
          ],
          "leaf": [
            {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            }
          ]
        }
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
  - NOTE2: OPTION field maybe have no this key

### del_ip_fabric
  - name: "del_ip_fabric"
  - data format:
        {
          "fabric_id": <int>
        }

  - example:
        {
          "fabric_id": 1
        }

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format

### add_routing_instance_vrf
  - name: "add_routing_instance_vrf"
  - data format:
        [
          {
            "name": <str>,
            "members": [
              {
                "dev_id": <int>,
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": <str>,
                        "ip_addresses": [<str>]
                      }
                    ],
                    "vni": <int>
                  }
                ]
              }
            ]
          }
        ]
  - example:
        [
          {
            "name": "vrf_name",
            "members": [
              {
                "dev_id": 35,
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": "et-0/0/33.0",
                        "ip_addresses": ["10.0.0.1/24"]
                      }
                    ],
                    "vni": 10000
                  }
                ]
              }
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "name": <str>,
            "members": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": <str>,
                        "ip_addresses": [<str>]
                      }
                    ],
                    "vni": <int>
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_routing_instance_vrf
  - name: "set_routing_instance_vrf"
  - data format:
        [
          {
            "id": <int>,
            "name": <str>,
            "members": [
              {
                "dev_id": <int>,
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": <str>,
                        "ip_addresses": [<str>]
                      }
                    ],
                    "vni": <int>
                  }
                ]
              }
            ]
          }
        ]
  - example:
        [
          {
            "id": 1,
            "name": "vrf_name",
            "members": [
              {
                "dev_id": 35,
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": "et-0/0/33.0",
                        "ip_addresses": ["10.0.0.1/24"]
                      }
                    ],
                    "vni": 10000
                  }
                ]
              }
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "id": <int>,
            "name": <str>,
            "members": [
              {
                "dev_info": {
                  "dev_id": <int>,
                  "hostname": <str>,
                  "nickname": <str>
                },
                "routing_instances": [
                  {
                    "interfaces": [
                      {
                        "name": <str>,
                        "ip_addresses": [<str>]
                      }
                    ],
                    "vni": <int>
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_routing_instance_vrf
  - name: "del_routing_instance_vrf"
  - data format:

        [
          {
            "name": <str>
          }
        ]
  - example:

        [
          {
            "name": "vrf_name"
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:

        the same from data format

### add_routing_table_route
  - name: "add_routing_table_route"
  - data format:

        [
          {
            "dev_id": <int>,
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>,
                "entries": [
                  {
                    "preference": <int>,
                    "next_hop_type": <str: "NEXT_HOP"|"QUALIFIED_NEXT_HOP">,
                    "next_hop": [
                      {"next_hop_address": <str: ip without prefix>}
                    ]
                  }
                ]
              }
            ]
          }
        ]

  - example:

        [
          {
            "dev_id": 13,
            "routes": [
              {
                "table_name": "inet.0",
                "destination": "3.3.3.0/24",
                "entries": [
                  {
                    "preference": 5,
                    "next_hop_type": "next_hop",
                    "next_hop": [
                      {"next_hop_address": "10.0.0.1"}
                    ]
                  }
                ]
              }
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>,
                "entries": [
                  {
                    "preference": <int>,
                    "next_hop_type": <str>,
                    "next_hop": [
                      {"next_hop_address": <str: ip without prefix>}
                    ]
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### set_routing_table_route
  - name: "set_routing_table_route"
  - data format:

        [
          {
            "dev_id": <int>,
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>,
                "entries": [
                  {
                    "preference": <int>,
                    "next_hop_type": <str: "NEXT_HOP"|"QUALIFIED_NEXT_HOP">,
                    "next_hop": [
                      {"next_hop_address": <str: ip without prefix>}
                    ]
                  }
                ]
              }
            ]
          }
        ]

  - example:

        [
          {
            "dev_id": 13,
            "routes": [
              {
                "table_name": "inet.0",
                "destination": "3.3.3.0/24",
                "entries": [
                  {
                    "preference": 5,
                    "next_hop_type": "next_hop",
                    "next_hop": [
                      {"next_hop_address": "10.0.0.1"}
                    ]
                  }
                ]
              }
            ]
          }
        ]

  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>,
                "entries": [
                  {
                    "preference": <int>,
                    "next_hop_type": <str>,
                    "next_hop": [
                      {"next_hop_address": <str: ip without prefix>}
                    ]
                  }
                ]
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist

### del_routing_table_route
  - name: "del_routing_table_route"
  - data format:

        [
          {
            "dev_id": <int>,
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>
              }
            ]
          }
        ]

  - example:

        [
          {
            "dev_id": 13,
            "routes": [
              {
                "table_name": "inet.0",
                "destination": "3.3.3.0/24"
              }
            ]
          }
        ]
  - [GET /ENC/API/dev/task/&lt;task_id&gt;](#get-encapidevtasktask_id) "raw_task" format:
        [
          {
            "dev_info": {
              "dev_id": <int>,
              "hostname": <str>,
              "nickname": <str>
            },
            "routes": [
              {
                "table_name": <str>,
                "destination": <str: ip_network>
              }
            ]
          }
        ]
  - NOTE1: "raw_task" format "dev_info" hostname and nickname is NULL when device not exist
