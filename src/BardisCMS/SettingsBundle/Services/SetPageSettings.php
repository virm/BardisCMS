<?php

/*
 * This file is part of BardisCMS.
 *
 * (c) George Bardis <george@bardis.info>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace BardisCMS\SettingsBundle\Services;

use Doctrine\ORM\EntityManager;

class SetPageSettings
{
    private $em;
    private $conn;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
        $this->conn = $em->getConnection();
    }

    public function setPageSettings($page = null)
    {
        $settings = $this->em->getRepository('SettingsBundle:Settings')->findOneByActivateSettings(true);

        if (empty($page)) {
            return $page;
        }

        if (is_object($settings)) {
            if ($settings->getUseWebsiteAuthor()) {
                $page->metaAuthor = $settings->getWebsiteAuthor();
            } else {
                $page->metaAuthor = $page->getAuthor()->getUsername();
            }

            $page->twitterUser = $settings->getWebsiteTwitter();

            // Set the page title basd on page and site title and the keywords based on that generated title
            $pageTitle = $page->getTitle();
            $titleKeywords = trim(preg_replace("/\b[A-za-z0-9']{1,3}\b/", '', strtolower($pageTitle)));
            $titleKeywords = str_replace(' ', ',', preg_replace('!\s+!', ' ', $titleKeywords));
            $fromTitle = $pageTitle.' '.$settings->getFromTitle();
            $pageTitle .= ' - '.$settings->getWebsiteTitle();

            $page->pagetitle = $pageTitle;

            // Get the Google Analytics
            $page->enableGA = $settings->getEnableGoogleAnalytics();
            $page->gaID = $settings->getGoogleAnalyticsId();

            // Set the page meta keywords and description basd on user input values if any
            if ($page->getKeywords() === null) {
                $page->metaKeywords = $settings->getMetaKeywords().','.$titleKeywords;
            } else {
                $page->metaKeywords = $page->getKeywords().','.$titleKeywords;
            }

            if ($page->getDescription() === null) {
                $page->metaDescription = $settings->getMetaDescription().' '.$fromTitle;
            } else {
                $page->metaDescription = $page->getDescription().' '.$fromTitle;
            }
        } else {
            // Set the meta values depending if settings do not exist
            $page->metaAuthor = '';
            $pageTitle = $page->getTitle();
            $titleKeywords = trim(preg_replace("/\b[A-za-z0-9']{1,3}\b/", '', strtolower($pageTitle)));
            $titleKeywords = str_replace(' ', ',', preg_replace('!\s+!', ' ', $titleKeywords));
            $page->pagetitle = $pageTitle;
            $page->enableGA = false;
            $page->gaID = null;

            $page->metaDescription = $page->getDescription();
            $page->metaKeywords = $page->getKeywords().','.$titleKeywords;
        }

        return $page;
    }
}
