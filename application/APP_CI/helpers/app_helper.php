<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('app_ver'))
{
    function app_ver()
    {
        // version format : 
        // major.minor[.build[.revision]]
        // or
        // major.minor[.maintenance[.build]]
        return "BETA Version <b>0.9.0.1</b>";
    }   
}

if ( ! function_exists('app_id'))
{
    function app_id()
    {
        // version format : 
        // major.minor[.build[.revision]]
        // or
        // major.minor[.maintenance[.build]]
        return "ALMINDO";
    }   
}

if ( ! function_exists('app_title'))
{
    function app_title()
    {
        // Application Name / Title
        // Insert Below
        return "[ Almindo ] Master Application";
    }   
}

if ( ! function_exists('app_upgrade'))
{
    function app_upgrade()
    {
        // Application Upgrade Detail
        // Insert Below
        $detail = "";
        
        
        return $detail;
    }   
}
