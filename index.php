<?php
/*******************************************************************************
 * Copyright (c) 2009 Eclipse Foundation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    
 *******************************************************************************/

	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");
	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");
 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php");

	$App 	= new App();
	$Nav	= new Nav();
	$Menu 	= new Menu();

	include($App->getProjectCommon());	
	$localVersion = false;
	
	// 	# Paste your HTML content between the EOHTML markers!
	$banner = file_get_contents('pages/banner.html');
	if ($_GET['section'] == "support") {
		$body = file_get_contents('pages/support.html');
	} elseif ($_GET['section'] == "involved") {
		$body = file_get_contents('pages/involved.html');	
	} else {
		$body = file_get_contents('pages/_index.html');
	}
	$right = file_get_contents('pages/rightcolumn.html');
	$html = $banner . $body . $right;
	# Generate the web page
	$App->generatePage($theme, $Menu, null, $pageAuthor, $pageKeywords, $pageTitle, $html);

?>