<?php

/*
 * User Bundle
 * This file is part of the BardisCMS.
 *
 * (c) George Bardis <george@bardis.info>
 *
 */

namespace Application\Sonata\UserBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;

use Application\Sonata\UserBundle\Entity\User;

class ContactDetailsFormType extends AbstractType {

	private $class;
	private $container;

    /**
     * @param string $class The User class name
     * @param Container $container
     */
	public function __construct($class, $container) {
		$this->class = $class;
		$this->container = $container;
	}

	public function buildForm(FormBuilderInterface $builder, array $options) {

		$user = $this->container->get('security.context')->getToken()->getUser();

		$defaults = array(
			'addressLine1' => $user->getAddressLine1(),
			'addressLine2' => $user->getAddressLine2(),
			'addressLine3' => $user->getAddressLine3(),
			'city' => $user->getCity(),
			'county' => $user->getCounty(),
            'postcode' => $user->getPostcode(),
            'countryCode' => $user->getCountryCode(),
            'phone' => $user->getPhone(),
            'mobile' => $user->getMobile()
		);

        // Adding custom extra user fields for Contact Details Form
		$builder
            ->add('addressLine1', TextType::class, array(
                'label' => 'form.addressLine1',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['addressLine1'],
                'required' => true
            ))
            ->add('addressLine2', TextType::class, array(
                'label' => 'form.addressLine2',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['addressLine2'],
                'required' => true
            ))
            ->add('addressLine3', TextType::class, array(
                'label' => 'form.addressLine3',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['addressLine3'],
                'required' => false
            ))
            ->add('city', TextType::class, array(
                'label' => 'form.city',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['city'],
                'required' => true
            ))
            ->add('county', TextType::class, array(
                'label' => 'form.county',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['county'],
                'required' => false
            ))
            ->add('postcode', TextType::class, array(
                'label' => 'form.postcode',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['postcode'],
                'required' => false
            ))
            ->add('countryCode', CountryType::class, array(
                'preferred_choices' => array(
                    User::COUNTRY_EN
                ),
                'label' => 'form.countryCode',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['countryCode'],
                'required' => true
            ))
            ->add('phone', TextType::class, array(
                'label' => 'form.phone',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['phone'],
                'required' => false
            ))
            ->add('mobile', TextType::class, array(
                'label' => 'form.mobile',
                'translation_domain' => 'SonataUserBundle',
                'data'=> $defaults['mobile'],
                'required' => false
            ))
        ;
	}

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => $this->class,
            'intention' => 'profile_contact_details_edit',
        ));
    }

    public function getName() {
        return $this->getBlockPrefix();
    }

    // Define the name of the form to call it for rendering
    public function getBlockPrefix() {
        return 'sonata_user_contact_details';
    }

    public function getExtendedType()
    {
        return method_exists(AbstractType::class, 'getBlockPrefix') ? FormType::class : 'form';
    }

}