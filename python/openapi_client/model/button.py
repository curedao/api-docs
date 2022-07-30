"""
    CureDAO Unified Health API

    A platform for participant-centered research and personal data exploration  # noqa: E501

    The version of the OpenAPI document: 0.0.1
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

import nulltype  # noqa: F401

from openapi_client.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
)


class Button(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
    }

    validations = {
    }

    additional_properties_type = None

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        return {
            'link': (str,),  # noqa: E501
            'text': (str,),  # noqa: E501
            'accessibility_text': (str,),  # noqa: E501
            'action': ({str: (bool, date, datetime, dict, float, int, list, str, none_type)},),  # noqa: E501
            'additional_information': (str,),  # noqa: E501
            'color': (str,),  # noqa: E501
            'confirmation_text': (str,),  # noqa: E501
            'function_name': (str,),  # noqa: E501
            'parameters': ({str: (bool, date, datetime, dict, float, int, list, str, none_type)},),  # noqa: E501
            'html': (str,),  # noqa: E501
            'id': (str,),  # noqa: E501
            'image': (str,),  # noqa: E501
            'ion_icon': (str,),  # noqa: E501
            'state_name': (str,),  # noqa: E501
            'state_params': ({str: (bool, date, datetime, dict, float, int, list, str, none_type)},),  # noqa: E501
            'success_toast_text': (str,),  # noqa: E501
            'success_alert_title': (str,),  # noqa: E501
            'success_alert_body': (str,),  # noqa: E501
            'tooltip': (str,),  # noqa: E501
            'webhook_url': (str,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'link': 'link',  # noqa: E501
        'text': 'text',  # noqa: E501
        'accessibility_text': 'accessibilityText',  # noqa: E501
        'action': 'action',  # noqa: E501
        'additional_information': 'additionalInformation',  # noqa: E501
        'color': 'color',  # noqa: E501
        'confirmation_text': 'confirmationText',  # noqa: E501
        'function_name': 'functionName',  # noqa: E501
        'parameters': 'parameters',  # noqa: E501
        'html': 'html',  # noqa: E501
        'id': 'id',  # noqa: E501
        'image': 'image',  # noqa: E501
        'ion_icon': 'ionIcon',  # noqa: E501
        'state_name': 'stateName',  # noqa: E501
        'state_params': 'stateParams',  # noqa: E501
        'success_toast_text': 'successToastText',  # noqa: E501
        'success_alert_title': 'successAlertTitle',  # noqa: E501
        'success_alert_body': 'successAlertBody',  # noqa: E501
        'tooltip': 'tooltip',  # noqa: E501
        'webhook_url': 'webhookUrl',  # noqa: E501
    }

    _composed_schemas = {}

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, link, text, *args, **kwargs):  # noqa: E501
        """Button - a model defined in OpenAPI

        Args:
            link (str): Ex: https://local.curedao.org
            text (str): Ex: Connect

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            accessibility_text (str): Ex: connect. [optional]  # noqa: E501
            action ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}): Action data. [optional]  # noqa: E501
            additional_information (str): Ex: connect. [optional]  # noqa: E501
            color (str): Ex: #f2f2f2. [optional]  # noqa: E501
            confirmation_text (str): Text to show user before executing functionName. [optional]  # noqa: E501
            function_name (str): Name of function to call. [optional]  # noqa: E501
            parameters ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}): Data to provide to functionName or be copied to the card parameters when button is clicked and card is posted to the API. [optional]  # noqa: E501
            html (str): Ex: connect. [optional]  # noqa: E501
            id (str): HTML element id. [optional]  # noqa: E501
            image (str): Ex: https://image.jpg. [optional]  # noqa: E501
            ion_icon (str): Ex: ion-refresh. [optional]  # noqa: E501
            state_name (str): State to go to. [optional]  # noqa: E501
            state_params ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}): Data to provide to the state. [optional]  # noqa: E501
            success_toast_text (str): Text to show user after executing functionName. [optional]  # noqa: E501
            success_alert_title (str): Text to show user after executing functionName. [optional]  # noqa: E501
            success_alert_body (str): Text to show user after executing functionName. [optional]  # noqa: E501
            tooltip (str): Ex: This is a tooltip. [optional]  # noqa: E501
            webhook_url (str): Post here on button click. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.link = link
        self.text = text
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
