<?php
/**
 * This file is for jsonp proxy.
 */
header('Content-Type: application/x-javascript');
$vid = (isset($_GET["vid"]) && $_GET["vid"] !== "") ? $_GET["vid"] : "XNTA1MzA4MDc2";// for test.
$callback = (isset($_GET["callback"]) && $_GET["callback"] !== "") ? $_GET["callback"] : " getUrl";
$url = (isset($_GET["url"]) && $_GET["url"] !== "") ? $_GET["url"] :  'http://v.youku.com/player/getPlayList/VideoIDS/' ;
$url = $url . $vid;
$oResource = curl_init();
curl_setopt($oResource, CURLOPT_URL, $url);
curl_setopt($oResource, CURLOPT_RETURNTRANSFER, true);
curl_setopt($oResource, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($oResource, CURLOPT_SSL_VERIFYPEER, false);
$xml = json_encode(curl_exec($oResource));
echo "$callback($xml)";
curl_close($oResource);
?>
